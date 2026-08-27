<?php
if (!defined('ABSPATH')) exit;

/** FAQ-Einträge (ersetzt die hartcodierten Items in FAQ.tsx) — Titel=Frage, Inhalt=Antwort. */
function quirin_register_cpt_faq() {
    register_post_type('faq_eintrag', array(
        'labels' => array(
            'name'          => 'FAQ-Einträge',
            'singular_name' => 'FAQ-Eintrag',
            'add_new_item'  => 'Neuen FAQ-Eintrag hinzufügen',
            'edit_item'     => 'FAQ-Eintrag bearbeiten',
            'all_items'     => 'Alle FAQ-Einträge',
        ),
        'public'              => false,
        'publicly_queryable'  => false,
        'exclude_from_search' => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'has_archive'         => false,
        'menu_icon'           => 'dashicons-editor-help',
        'supports'            => array('title', 'editor', 'page-attributes'),
    ));
}
add_action('init', 'quirin_register_cpt_faq');
