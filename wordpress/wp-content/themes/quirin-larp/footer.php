<?php if (!defined('ABSPATH')) exit; ?>
    <footer class="site-footer">
        <div class="divider-gold"></div>
        <div class="container inner">
            <div class="brand">
                <span class="brand-mark">&#10022;</span>
                <div>
                    <div class="brand-name">Kaiserreich <em>Quirin</em></div>
                    <div class="brand-sub">Das Juwel des Westens &middot; Seit 1999</div>
                </div>
            </div>

            <div class="links">
                <div class="link-group">
                    <span class="section-label">Die Welt</span>
                    <a href="<?php echo esc_url(home_url('/die-welt/')); ?>">Regionen</a>
                    <a href="<?php echo esc_url(home_url('/geschichte/')); ?>">Geschichte</a>
                    <a href="<?php echo esc_url(home_url('/das-spiel/')); ?>">Das Spiel</a>
                </div>
                <div class="link-group">
                    <span class="section-label">Mitmachen</span>
                    <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/')); ?>">Anmeldungen</a>
                    <a href="<?php echo esc_url(home_url('/faq/')); ?>">FAQ</a>
                    <a href="<?php echo esc_url(home_url('/kontakt/')); ?>">Kontakt</a>
                </div>
                <div class="link-group">
                    <span class="section-label">Rechtliches</span>
                    <a href="<?php echo esc_url(home_url('/impressum/')); ?>">Impressum</a>
                    <a href="<?php echo esc_url(home_url('/teilnahmebedingungen/')); ?>">Teilnahmebedingungen</a>
                </div>
            </div>
        </div>

        <div class="container bottom">
            <span>&copy; <?php echo esc_html(date('Y')); ?> Quirin Larp SL. Alle Rechte vorbehalten.</span>
            <a href="mailto:info@quirin-larp.de">info@quirin-larp.de</a>
        </div>
    </footer>

<?php wp_footer(); ?>
</body>
</html>
