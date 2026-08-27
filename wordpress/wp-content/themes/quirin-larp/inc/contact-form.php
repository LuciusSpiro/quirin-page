<?php
if (!defined('ABSPATH')) exit;

/**
 * Native Kontaktformular-Handler (wp_mail über den WP Mail SMTP-Transport).
 * Ersetzt die nie fertig verdrahtete EmailJS-Integration aus Kontakt.tsx.
 */
function quirin_handle_kontakt_submit() {
    if (!isset($_POST['quirin_kontakt_nonce']) || !wp_verify_nonce($_POST['quirin_kontakt_nonce'], 'quirin_kontakt')) {
        wp_safe_redirect(add_query_arg('kontakt', 'error', wp_get_referer() ?: home_url('/kontakt/')));
        exit;
    }

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (!empty($_POST['quirin_kontakt_website'])) {
        wp_safe_redirect(add_query_arg('kontakt', 'success', wp_get_referer() ?: home_url('/kontakt/')));
        exit;
    }

    $name      = sanitize_text_field($_POST['name'] ?? '');
    $email     = sanitize_email($_POST['email'] ?? '');
    $betreff   = sanitize_text_field($_POST['betreff'] ?? '');
    $nachricht = sanitize_textarea_field($_POST['nachricht'] ?? '');

    if (!$name || !is_email($email) || !$nachricht) {
        wp_safe_redirect(add_query_arg('kontakt', 'error', wp_get_referer() ?: home_url('/kontakt/')));
        exit;
    }

    $subject = $betreff ? "[Kontaktformular] {$betreff}" : '[Kontaktformular] Neue Nachricht';
    $body    = "Name: {$name}\nE-Mail: {$email}\n\n{$nachricht}";
    $headers = array('Reply-To: ' . $name . ' <' . $email . '>');

    $sent = wp_mail(get_option('admin_email'), $subject, $body, $headers);

    wp_safe_redirect(add_query_arg('kontakt', $sent ? 'success' : 'error', wp_get_referer() ?: home_url('/kontakt/')));
    exit;
}
add_action('admin_post_quirin_kontakt', 'quirin_handle_kontakt_submit');
add_action('admin_post_nopriv_quirin_kontakt', 'quirin_handle_kontakt_submit');
