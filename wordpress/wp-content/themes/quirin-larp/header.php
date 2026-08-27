<?php if (!defined('ABSPATH')) exit; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
            <span class="logo-mark">&#10022;</span>
            <span class="logo-text">Kaiserreich <em>Quirin</em></span>
        </a>

        <?php
        if (has_nav_menu('primary')) {
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'items_wrap'     => '<nav class="nav">%3$s</nav>',
                'walker'         => new Quirin_Nav_Walker(),
            ));
        } else {
            quirin_fallback_menu();
        }
        ?>

        <div class="actions">
            <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/')); ?>" class="btn btn-primary btn-sm">Events</a>
            <button class="burger" aria-label="Menü öffnen" aria-expanded="false">
                <span></span>
            </button>
        </div>
    </div>

    <div class="drawer">
        <nav class="drawer-nav">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'walker'         => new Quirin_Drawer_Walker(),
                ));
            } else {
                quirin_fallback_drawer_menu();
            }
            ?>
            <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/')); ?>" class="btn btn-primary" style="margin-top:16px;width:100%;justify-content:center;">Jetzt Anmelden</a>
            <a href="<?php echo esc_url(home_url('/kontakt/')); ?>" class="btn btn-ghost" style="margin-top:8px;width:100%;justify-content:center;">Kontakt</a>
        </nav>
    </div>
</header>
