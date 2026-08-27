<?php
if (!defined('ABSPATH')) exit;

/**
 * Mit add_theme_support('woocommerce') übernimmt das Theme die Content-Wrapper-Pflicht
 * (WooCommerce fügt sonst keinen eigenen Wrapper ein). Ohne diese Hooks würde der
 * gesamte Shop-/Warenkorb-/Kasse-Inhalt ungewrappt direkt zwischen Header und Footer stehen.
 */
function quirin_woocommerce_wrapper_start() {
    echo '<div class="woocommerce-page-wrap"><div class="container">';
}
add_action('woocommerce_before_main_content', 'quirin_woocommerce_wrapper_start');

function quirin_woocommerce_wrapper_end() {
    echo '</div></div>';
}
add_action('woocommerce_after_main_content', 'quirin_woocommerce_wrapper_end');

/** Produkt-Grid: 3 statt der WooCommerce-Default 4 Spalten, passend zum restlichen Theme-Rhythmus. */
add_filter('loop_shop_columns', function () { return 3; });
