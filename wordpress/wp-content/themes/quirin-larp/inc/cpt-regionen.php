<?php
if (!defined('ABSPATH')) exit;

/** Regionen (ersetzt src/data/regionen.ts) — eigene Detailseiten unter /die-welt/{slug}/ */
function quirin_register_cpt_regionen() {
    register_post_type('regionen', array(
        'labels' => array(
            'name'          => 'Regionen',
            'singular_name' => 'Region',
            'add_new_item'  => 'Neue Region hinzufügen',
            'edit_item'     => 'Region bearbeiten',
            'all_items'     => 'Alle Regionen',
        ),
        'public'       => true,
        'has_archive'  => false,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-location-alt',
        'supports'     => array('title', 'editor', 'excerpt', 'page-attributes', 'thumbnail'),
        'rewrite'      => array('slug' => 'die-welt', 'with_front' => false),
    ));
}
add_action('init', 'quirin_register_cpt_regionen');

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
        'key'      => 'group_regionen',
        'title'    => 'Region-Details',
        'fields'   => array(
            array(
                'key'   => 'field_region_schlagwort',
                'label' => 'Schlagwort',
                'name'  => 'region_schlagwort',
                'type'  => 'text',
            ),
            array(
                'key'          => 'field_region_kultur',
                'label'        => 'Kultur (ein Merkmal pro Zeile)',
                'name'         => 'region_kultur',
                'type'         => 'textarea',
                'rows'         => 4,
                'new_lines'    => '',
            ),
            array(
                'key'   => 'field_region_besonderheiten',
                'label' => 'Besonderheiten',
                'name'  => 'region_besonderheiten',
                'type'  => 'textarea',
                'rows'  => 3,
            ),
            array(
                'key'   => 'field_region_farbe',
                'label' => 'Akzentfarbe',
                'name'  => 'region_farbe',
                'type'  => 'color_picker',
            ),
            array(
                'key'           => 'field_region_wappen',
                'label'         => 'Wappen',
                'name'          => 'region_wappen',
                'type'          => 'image',
                'return_format' => 'url',
                'preview_size'  => 'thumbnail',
            ),
        ),
        'location' => array(
            array(
                array('param' => 'post_type', 'operator' => '==', 'value' => 'regionen'),
            ),
        ),
    ));
}
