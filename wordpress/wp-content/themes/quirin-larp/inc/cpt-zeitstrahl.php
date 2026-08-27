<?php
if (!defined('ABSPATH')) exit;

/** Zeitstrahl-Ereignisse (ersetzt src/data/timeline.ts) — nur auf /geschichte/ aggregiert, keine eigenen Permalinks. */
function quirin_register_cpt_zeitstrahl() {
    register_post_type('zeitstrahl_ereignis', array(
        'labels' => array(
            'name'          => 'Zeitstrahl-Ereignisse',
            'singular_name' => 'Ereignis',
            'add_new_item'  => 'Neues Ereignis hinzufügen',
            'edit_item'     => 'Ereignis bearbeiten',
            'all_items'     => 'Alle Ereignisse',
        ),
        'public'              => false,
        'publicly_queryable'  => false,
        'exclude_from_search' => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'has_archive'         => false,
        'menu_icon'           => 'dashicons-clock',
        'supports'            => array('title', 'editor'),
    ));

    register_taxonomy('ereignis_typ', 'zeitstrahl_ereignis', array(
        'labels'            => array('name' => 'Ereignistypen', 'singular_name' => 'Ereignistyp'),
        'hierarchical'      => true,
        'public'            => false,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
    ));
}
add_action('init', 'quirin_register_cpt_zeitstrahl');

/** Einmalig die 6 Ereignistypen mit ihrer Farbe anlegen (ersetzt die typFarben-Map aus timeline.ts). */
function quirin_seed_ereignis_typen() {
    if (get_option('quirin_ereignis_typen_seeded')) {
        return;
    }
    $typen = array(
        'Krieg'       => '#B85C5C',
        'Dynastisch'  => '#D4AF37',
        'Katastrophe' => '#C9A24B',
        'Gründung'    => '#6B9672',
        'Magie'       => '#8B78B8',
        'Handel'      => '#6E8FA6',
    );
    foreach ($typen as $name => $farbe) {
        $term = term_exists($name, 'ereignis_typ');
        if (!$term) {
            $term = wp_insert_term($name, 'ereignis_typ');
        }
        if (!is_wp_error($term)) {
            $term_id = is_array($term) ? $term['term_id'] : $term;
            update_term_meta($term_id, 'farbe', $farbe);
        }
    }
    update_option('quirin_ereignis_typen_seeded', 1);
}
add_action('init', 'quirin_seed_ereignis_typen', 20);

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
        'key'      => 'group_zeitstrahl',
        'title'    => 'Ereignis-Details',
        'fields'   => array(
            array(
                'key'   => 'field_ereignis_jahr',
                'label' => 'Jahr (negativ = v.d.B.)',
                'name'  => 'ereignis_jahr',
                'type'  => 'number',
            ),
        ),
        'location' => array(
            array(
                array('param' => 'post_type', 'operator' => '==', 'value' => 'zeitstrahl_ereignis'),
            ),
        ),
    ));
}
