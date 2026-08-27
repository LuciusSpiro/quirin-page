<?php
/* Template Name: Das Spiel */
if (!defined('ABSPATH')) exit;
get_header();
?>

<div class="page-das-spiel">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Spielkonzept</span>
            <h1 style="margin-top:8px;">Das Spiel</h1>
            <p class="text-secondary" style="max-width:560px;margin-top:16px;font-size:18px;line-height:1.7;">
                Quirin bietet zwei Spielzweige: das körperlich fordernde Kriegerspiel
                und das diplomatisch komplexe Adelsspiel. Beide Welten treffen im Reich aufeinander.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="branches">
                <a href="<?php echo esc_url(home_url('/kriegerspiel/')); ?>" class="card branch-card">
                    <div class="branch-header" style="background: linear-gradient(135deg, rgba(184,86,86,0.15), rgba(184,86,86,0.04));">
                        <div class="branch-icon">&#9876;</div>
                        <span class="badge badge-gold">Körperlich &amp; taktisch</span>
                    </div>
                    <div class="card-body">
                        <h2 class="branch-title">Kriegerspiel</h2>
                        <p class="text-secondary" style="margin-top:12px;line-height:1.7;">
                            Das Kriegerspiel steht in einer jahrzehntelangen Tradition. Es verbindet
                            Kampfkunst, Ehre und hierarchisches Denken. Drei Säulen tragen das Spiel:
                            die Kriegerakademie, der Bund der Klingen und Banner XXI.
                        </p>
                        <ul class="branch-features">
                            <li>Quiriner Kriegerakademie</li>
                            <li>Bund der Klingen</li>
                            <li>Banner XXI (Spielergruppe)</li>
                            <li>Waffenarten &amp; Turniere</li>
                            <li>Rangsystem &amp; Hierarchie</li>
                        </ul>
                        <div class="branch-cta">Mehr erfahren <span>&rarr;</span></div>
                    </div>
                </a>

                <a href="<?php echo esc_url(home_url('/adelsspiel/')); ?>" class="card branch-card">
                    <div class="branch-header" style="background: linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.04));">
                        <div class="branch-icon">&#9819;</div>
                        <span class="badge badge-gold">Diplomatie &amp; Intrige</span>
                    </div>
                    <div class="card-body">
                        <h2 class="branch-title">Adelsspiel</h2>
                        <p class="text-secondary" style="margin-top:12px;line-height:1.7;">
                            Das Adelsspiel ist das Reich der Worte, Allianzen und verborgenen Pläne.
                            Die Fürstentümer ringen um Einfluss am Kaiserhof – mit Verhandlung,
                            Intrige und dem richtigen Auftreten zur richtigen Zeit.
                        </p>
                        <ul class="branch-features">
                            <li>Die Fürstentümer</li>
                            <li>Adelsränge &amp; Titel</li>
                            <li>Hofintrigenspiel</li>
                            <li>Diplomatische Verhandlungen</li>
                            <li>Hofbälle &amp; Zeremonien</li>
                        </ul>
                        <div class="branch-cta">Mehr erfahren <span>&rarr;</span></div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="grundsaetze-section">
        <div class="divider-gold"></div>
        <div class="container" style="padding-top:80px;padding-bottom:80px;">
            <div style="text-align:center;margin-bottom:48px;">
                <span class="section-label">Unsere Grundsätze</span>
                <h2>Wie wir spielen</h2>
            </div>
            <div class="prose" style="max-width:760px;margin:0 auto;">
                <?php the_content(); ?>
            </div>
            <p style="max-width:760px;margin:32px auto 0;">
                <a href="<?php echo esc_url(home_url('/spielphilosophie/')); ?>" class="btn btn-outline">Unsere ausführliche Spielphilosophie &rarr;</a>
            </p>
        </div>
        <div class="divider-gold"></div>
    </section>

    <section class="section-sm">
        <div class="container" style="text-align:center;">
            <h3 style="margin-bottom:8px;">Bereit einzusteigen?</h3>
            <p class="text-secondary" style="margin-bottom:32px;">Wähle deinen Weg und melde dich für das nächste Event an.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/')); ?>" class="btn btn-primary btn-lg">Jetzt anmelden</a>
                <a href="<?php echo esc_url(home_url('/faq/')); ?>" class="btn btn-ghost btn-lg">Häufige Fragen</a>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
