<?php
if (!defined('ABSPATH')) exit;

define('QUIRIN_THEME_VERSION', '0.1.0');
define('QUIRIN_THEME_DIR', get_template_directory());
define('QUIRIN_THEME_URI', get_template_directory_uri());

function quirin_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('automatic-feed-links');

    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    register_nav_menus(array(
        'primary' => __('Hauptmenü', 'quirin-larp'),
    ));
}
add_action('after_setup_theme', 'quirin_setup');

/** Dateizeitstempel statt fester Versionsnummer - erzwingt automatisch einen neuen
 * Cache-Buster (?ver=...), sobald eine CSS/JS-Datei geaendert wird. Verhindert, dass
 * Browser waehrend der Entwicklung eine veraltete Datei unter derselben URL behalten. */
function quirin_asset_version($relative_path) {
    $file = QUIRIN_THEME_DIR . $relative_path;
    return file_exists($file) ? filemtime($file) : QUIRIN_THEME_VERSION;
}

function quirin_enqueue_assets() {
    wp_enqueue_style('quirin-globals', QUIRIN_THEME_URI . '/assets/css/globals.css', array(), quirin_asset_version('/assets/css/globals.css'));
    wp_enqueue_style('quirin-layout', QUIRIN_THEME_URI . '/assets/css/layout.css', array('quirin-globals'), quirin_asset_version('/assets/css/layout.css'));

    if (file_exists(QUIRIN_THEME_DIR . '/assets/css/pages.css')) {
        wp_enqueue_style('quirin-pages', QUIRIN_THEME_URI . '/assets/css/pages.css', array('quirin-layout'), quirin_asset_version('/assets/css/pages.css'));
    }
    if (class_exists('WooCommerce') && file_exists(QUIRIN_THEME_DIR . '/assets/css/woocommerce.css')) {
        wp_enqueue_style('quirin-woocommerce', QUIRIN_THEME_URI . '/assets/css/woocommerce.css', array('quirin-layout'), quirin_asset_version('/assets/css/woocommerce.css'));
    }

    wp_enqueue_script('quirin-main', QUIRIN_THEME_URI . '/assets/js/main.js', array(), quirin_asset_version('/assets/js/main.js'), true);
}
add_action('wp_enqueue_scripts', 'quirin_enqueue_assets');

require_once QUIRIN_THEME_DIR . '/inc/nav-walker.php';
require_once QUIRIN_THEME_DIR . '/inc/cpt-regionen.php';
require_once QUIRIN_THEME_DIR . '/inc/cpt-zeitstrahl.php';
require_once QUIRIN_THEME_DIR . '/inc/cpt-faq.php';
require_once QUIRIN_THEME_DIR . '/inc/contact-form.php';
if (class_exists('WooCommerce')) {
    require_once QUIRIN_THEME_DIR . '/inc/woocommerce-support.php';
}
