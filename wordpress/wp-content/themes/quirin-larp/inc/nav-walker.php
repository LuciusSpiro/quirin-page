<?php
if (!defined('ABSPATH')) exit;

/**
 * Renders wp_nav_menu() output with the exact markup/classes the ported
 * Header.tsx CSS (assets/css/layout.css) expects, so the "primary" menu
 * stays editable in Design > Menüs instead of being hardcoded in PHP.
 */
class Quirin_Nav_Walker extends Walker_Nav_Menu {

    public function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<div class="dropdown">';
    }

    public function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</div>';
    }

    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $has_children = in_array('menu-item-has-children', $classes, true);
        $is_active = in_array('current-menu-item', $classes, true)
            || in_array('current-menu-ancestor', $classes, true)
            || in_array('current-menu-parent', $classes, true);

        if ($depth === 0) {
            $output .= '<div class="nav-item-wrap">';
            $output .= '<a class="nav-link' . ($is_active ? ' is-active' : '') . '" href="' . esc_url($item->url) . '">';
            $output .= esc_html($item->title);
            if ($has_children) {
                $output .= '<span class="chevron">&rsaquo;</span>';
            }
            $output .= '</a>';
        } else {
            $output .= '<a class="drop-link' . ($is_active ? ' is-active' : '') . '" href="' . esc_url($item->url) . '">';
            $output .= esc_html($item->title);
            $output .= '</a>';
        }
    }

    public function end_el(&$output, $item, $depth = 0, $args = null) {
        if ($depth === 0) {
            $output .= '</div>';
        }
    }
}

/** Same "primary" menu, rendered as the mobile drawer list. */
class Quirin_Drawer_Walker extends Walker_Nav_Menu {

    public function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<div class="drawer-sub">';
    }

    public function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</div>';
    }

    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $is_active = in_array('current-menu-item', $classes, true);

        if ($depth === 0) {
            $output .= '<div>';
            $output .= '<a class="drawer-link' . ($is_active ? ' is-active' : '') . '" href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';
        } else {
            $output .= '<a class="drawer-sub-link' . ($is_active ? ' is-active' : '') . '" href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';
        }
    }

    public function end_el(&$output, $item, $depth = 0, $args = null) {
        if ($depth === 0) {
            $output .= '</div>';
        }
    }
}

/**
 * Shown until a real "Hauptmenü" is created under Design > Menüs.
 * Slugs mirror the current React routes; reconcile with the final
 * WordPress page slugs during content migration (Phase 7).
 */
function quirin_fallback_menu() {
    $items = array(
        array('label' => 'Die Welt', 'url' => home_url('/die-welt/')),
        array('label' => 'Das Spiel', 'url' => home_url('/das-spiel/'), 'sub' => array(
            array('label' => 'Kriegerspiel', 'url' => home_url('/das-spiel/kriegerspiel/')),
            array('label' => 'Adelsspiel', 'url' => home_url('/das-spiel/adelsspiel/')),
        )),
        array('label' => 'Geschichte', 'url' => home_url('/geschichte/')),
        array('label' => 'Galerie', 'url' => home_url('/galerie/')),
        array('label' => 'FAQ', 'url' => home_url('/faq/')),
    );
    echo '<nav class="nav">';
    foreach ($items as $item) {
        echo '<div class="nav-item-wrap">';
        echo '<a class="nav-link" href="' . esc_url($item['url']) . '">' . esc_html($item['label']);
        if (!empty($item['sub'])) echo '<span class="chevron">&rsaquo;</span>';
        echo '</a>';
        if (!empty($item['sub'])) {
            echo '<div class="dropdown">';
            foreach ($item['sub'] as $sub) {
                echo '<a class="drop-link" href="' . esc_url($sub['url']) . '">' . esc_html($sub['label']) . '</a>';
            }
            echo '</div>';
        }
        echo '</div>';
    }
    echo '</nav>';
}

/** Mirrors the fallback items for the mobile drawer + drawer CTAs. */
function quirin_fallback_drawer_menu() {
    $items = array(
        array('label' => 'Die Welt', 'url' => home_url('/die-welt/')),
        array('label' => 'Das Spiel', 'url' => home_url('/das-spiel/'), 'sub' => array(
            array('label' => 'Kriegerspiel', 'url' => home_url('/das-spiel/kriegerspiel/')),
            array('label' => 'Adelsspiel', 'url' => home_url('/das-spiel/adelsspiel/')),
        )),
        array('label' => 'Geschichte', 'url' => home_url('/geschichte/')),
        array('label' => 'Galerie', 'url' => home_url('/galerie/')),
        array('label' => 'FAQ', 'url' => home_url('/faq/')),
    );
    foreach ($items as $item) {
        echo '<div>';
        echo '<a class="drawer-link" href="' . esc_url($item['url']) . '">' . esc_html($item['label']) . '</a>';
        if (!empty($item['sub'])) {
            echo '<div class="drawer-sub">';
            foreach ($item['sub'] as $sub) {
                echo '<a class="drawer-sub-link" href="' . esc_url($sub['url']) . '">' . esc_html($sub['label']) . '</a>';
            }
            echo '</div>';
        }
        echo '</div>';
    }
}
