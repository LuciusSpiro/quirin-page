<?php
/* Template Name: Kontakt */
if (!defined('ABSPATH')) exit;
get_header();

$status = isset($_GET['kontakt']) ? sanitize_key($_GET['kontakt']) : null;
?>

<div class="page-kontakt">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Spielleitung</span>
            <h1 style="margin-top:8px;">Kontakt</h1>
            <p class="text-secondary" style="max-width:520px;margin-top:16px;font-size:18px;line-height:1.7;">
                Fragen, Anregungen oder einfach Hallo sagen – die Spielleitung
                freut sich über jede Nachricht.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="layout">
                <div>
                    <?php if ($status === 'success') : ?>
                        <div class="success">
                            <div class="success-icon">&#10003;</div>
                            <h3>Vielen Dank für deine Nachricht!</h3>
                            <p class="text-secondary">Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich.</p>
                            <a href="<?php echo esc_url(home_url('/kontakt/')); ?>" class="btn btn-ghost" style="margin-top:8px;">Neue Nachricht senden</a>
                        </div>
                    <?php else : ?>
                        <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="kontakt-form">
                            <input type="hidden" name="action" value="quirin_kontakt">
                            <?php wp_nonce_field('quirin_kontakt', 'quirin_kontakt_nonce'); ?>
                            <input type="text" name="quirin_kontakt_website" value="" style="position:absolute;left:-9999px;" tabindex="-1" autocomplete="off">

                            <?php if ($status === 'error') : ?>
                                <div class="error-msg">
                                    Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder
                                    schreibe direkt an <a href="mailto:info@quirin-larp.de">info@quirin-larp.de</a>.
                                </div>
                            <?php endif; ?>

                            <div class="form-row">
                                <div class="field">
                                    <label class="field-label">Name *</label>
                                    <input class="input" name="name" required placeholder="Dein Name">
                                </div>
                                <div class="field">
                                    <label class="field-label">E-Mail *</label>
                                    <input class="input" type="email" name="email" required placeholder="deine@email.de">
                                </div>
                            </div>

                            <div class="field">
                                <label class="field-label">Betreff</label>
                                <input class="input" name="betreff" placeholder="Worum geht es?">
                            </div>

                            <div class="field">
                                <label class="field-label">Nachricht *</label>
                                <textarea class="textarea" name="nachricht" required placeholder="Deine Nachricht an die Spielleitung..." style="min-height:160px;"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg" style="align-self:flex-start;">Nachricht senden</button>
                        </form>
                    <?php endif; ?>
                </div>

                <aside class="sidebar">
                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:16px;">Direktkontakt</h4>
                            <div class="contact-item">
                                <span>&#9993;</span>
                                <div>
                                    <div class="section-label" style="margin:0;">E-Mail</div>
                                    <a href="mailto:info@quirin-larp.de" class="contact-link">info@quirin-larp.de</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:12px;">Spielleitung</h4>
                            <p class="text-secondary" style="font-size:14px;line-height:1.7;">
                                Das Quirin Larp wird von einer Gruppe leidenschaftlicher Privatpersonen geleitet.
                                Antwortzeiten: meist innerhalb von 2–3 Werktagen.
                            </p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h4 style="margin-bottom:12px;">Rechtliches</h4>
                            <div class="legal-links">
                                <a href="<?php echo esc_url(home_url('/impressum/')); ?>">Impressum</a>
                                <a href="<?php echo esc_url(home_url('/teilnahmebedingungen/')); ?>">Teilnahmebedingungen</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
