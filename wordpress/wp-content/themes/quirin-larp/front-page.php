<?php if (!defined('ABSPATH')) exit; get_header();

$shop_url = class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/anmeldungen/');
$hero_bg  = get_theme_file_uri('/assets/images/hero-castle.png');
$wappen   = get_theme_file_uri('/assets/images/wappen-kaiserreich.png');

$features = array(
    array('icon' => '&#9876;', 'label' => 'Das Spiel', 'title' => 'Krieger & Adel', 'desc' => 'Zwei Spielzweige, eine Welt: Verfeinere deine Kampfkünste im Kriegerspiel oder navigiere die Intrigen des Adelsspiels.', 'url' => home_url('/das-spiel/')),
    array('icon' => '&#128506;', 'label' => 'Die Welt', 'title' => '8 Regionen', 'desc' => 'Vom Kronland Talborn bis zu den Stürmen von Sturmkap – jede Präfektur trägt eine eigene Kultur und Geschichte.', 'url' => home_url('/die-welt/')),
    array('icon' => '&#128220;', 'label' => 'Geschichte', 'title' => '826 Jahre Lore', 'desc' => 'Eine lebendige Welt mit Jahrhunderten von Geschichte, Kriegen, Dynastien und Legenden.', 'url' => home_url('/geschichte/')),
);

$commitments = array(
    array('title' => '24/7 Immersion', 'desc' => 'Nonstop-Erlebnis – wir spielen rund um die Uhr.'),
    array('title' => 'Ausgewogene Herausforderungen', 'desc' => 'Physisch und psychisch, immer im Rahmen deiner Grenzen.'),
    array('title' => 'Respekt & Inklusion', 'desc' => 'Alle Spieler werden gleich respektiert – ohne Ausnahme.'),
    array('title' => 'In-Time / Out-Time', 'desc' => 'Klare Trennung zwischen Spiel und Realität.'),
    array('title' => 'Gemeinschaft', 'desc' => 'Eine leidenschaftliche Gruppe, die ihr Hobby lebt.'),
);
?>

<div class="page-home">

    <section class="hero">
        <div class="hero-bg" style="background-image:url('<?php echo esc_url($hero_bg); ?>');"></div>
        <div class="hero-gradient"></div>
        <div class="container hero-content">
            <img src="<?php echo esc_url($wappen); ?>" alt="Wappen des Kaiserreichs Quirin" class="hero-wappen">
            <span class="section-label">Kaiserreich Quirin &middot; LARP seit 1999</span>
            <h1 class="hero-title">Sey gegrüßt,<br><em class="text-gold italic">Reisender</em></h1>
            <p class="hero-sub">
                Das Kaiserreich Quirin – das Juwel des Westens – erwartet dich.
                Ein lebendiges Imperium, eine reiche Geschichte, und ein Platz
                für dich – ob Krieger, Edelmann oder freier Händler.
            </p>
            <div class="hero-cta">
                <a href="<?php echo esc_url($shop_url); ?>" class="btn btn-primary btn-lg">Jetzt teilnehmen</a>
                <a href="<?php echo esc_url(home_url('/die-welt/')); ?>" class="btn btn-ghost btn-lg">Die Welt erkunden</a>
            </div>
        </div>
        <div class="scroll-hint">
            <span class="scroll-line"></span>
            <span class="scroll-text">Scroll</span>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="features">
                <?php foreach ($features as $f) : ?>
                    <a href="<?php echo esc_url($f['url']); ?>" class="card feature-card">
                        <div class="feature-icon"><?php echo $f['icon']; ?></div>
                        <span class="section-label" style="margin-bottom:8px;"><?php echo esc_html($f['label']); ?></span>
                        <h3 class="feature-title"><?php echo esc_html($f['title']); ?></h3>
                        <p class="prose" style="font-size:14px;"><?php echo esc_html($f['desc']); ?></p>
                        <span class="feature-arrow">&rarr;</span>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section about-section">
        <div class="container">
            <div class="about-grid">
                <div>
                    <span class="section-label">Was ist Quirin?</span>
                    <h2>Ein Reich, das lebt</h2>
                    <div class="prose" style="margin-top:24px;">
                        <p>
                            Das Kaiserreich Quirin ist eine <em>24/7-Immersion</em> – ein Live-Action-Rollenspiel,
                            das auf der Insel Efarim spielt, dem Herzstück des Westens.
                            Gegründet 1999 in Würzburg, vereint Quirin die Codes der Samurai-Philosophie
                            mit mittelalterlichem Fantasy-Europa.
                        </p>
                        <p style="margin-top:16px;">
                            Ob in der <em>Quiriner Kriegerakademie</em>, im <em>Bund der Klingen</em>
                            oder am Hofe des Kaisers in Talborn – hier schreibst du deine eigene Geschichte.
                        </p>
                    </div>
                    <div class="stats">
                        <?php foreach (array(array('1999','Gründungsjahr'), array('3.0','Aktuelle Version'), array('8','Regionen'), array('826','Jahre Lore')) as $s) : ?>
                            <div class="stat">
                                <strong class="text-gold font-display" style="font-size:32px;"><?php echo esc_html($s[0]); ?></strong>
                                <span class="text-muted" style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;"><?php echo esc_html($s[1]); ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="commitments">
                    <div class="commitment-title">Unsere Grundsätze</div>
                    <?php foreach ($commitments as $c) : ?>
                        <div class="commitment">
                            <span class="text-gold">&#9670;</span>
                            <div>
                                <strong style="color:var(--fg-primary);font-size:14px;"><?php echo esc_html($c['title']); ?></strong>
                                <p class="text-muted" style="font-size:13px;margin-top:2px;"><?php echo esc_html($c['desc']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <?php
    $news_query = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 3, 'ignore_sticky_posts' => true));
    if ($news_query->have_posts()) :
    ?>
    <section class="section-sm">
        <div class="container">
            <span class="section-label">Neuigkeiten</span>
            <h2 style="margin-bottom:40px;">Aktuelle Ankündigungen</h2>
            <div class="news-list">
                <?php while ($news_query->have_posts()) : $news_query->the_post(); ?>
                    <a href="<?php the_permalink(); ?>" class="card news-card">
                        <div class="card-body">
                            <div class="news-meta">
                                <?php $cats = get_the_category(); ?>
                                <span class="badge badge-gold"><?php echo esc_html($cats ? $cats[0]->name : 'Ankündigung'); ?></span>
                                <span class="text-muted" style="font-size:12px;"><?php echo esc_html(get_the_date('j. F Y')); ?></span>
                            </div>
                            <h4 style="margin-top:12px;"><?php the_title(); ?></h4>
                            <p class="text-secondary" style="font-size:14px;margin-top:8px;"><?php the_excerpt(); ?></p>
                        </div>
                    </a>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

    <section class="cta-banner">
        <div class="divider-gold"></div>
        <div class="container">
            <div class="cta-inner">
                <div>
                    <h2 class="font-display">Bereit für das Kaiserreich?</h2>
                    <p class="text-secondary" style="margin-top:8px;">Melde dich für das nächste Event an und tritt in die Welt von Quirin ein.</p>
                </div>
                <div class="cta-buttons">
                    <a href="<?php echo esc_url($shop_url); ?>" class="btn btn-primary btn-lg">Zu den Events</a>
                    <a href="<?php echo esc_url(home_url('/faq/')); ?>" class="btn btn-ghost btn-lg">Mehr erfahren</a>
                </div>
            </div>
        </div>
        <div class="divider-gold"></div>
    </section>

</div>

<?php get_footer(); ?>
