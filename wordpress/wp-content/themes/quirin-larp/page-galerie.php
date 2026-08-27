<?php
/* Template Name: Galerie */
if (!defined('ABSPATH')) exit;
get_header();

$img_uri = get_theme_file_uri('/assets/images');

$bilder = array(
    array('alt' => 'Kaiserpalast Navalis – Talborn bei Nacht', 'kategorie' => 'Artwork', 'breit' => true,  'src' => $img_uri . '/hero-castle.png'),
    array('alt' => 'Reichswappen des Kaiserreichs Quirin',      'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-kaiserreich.png'),
    array('alt' => 'Wappen Kronland Talborn',                   'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-talborn.png'),
    array('alt' => 'Wappen Siegeshain',                         'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-siegeshain.png'),
    array('alt' => 'Wappen Waldestrutz',                        'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-waldestrutz.png'),
    array('alt' => 'Wappen Roon',                               'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-roon.png'),
    array('alt' => 'Wappen Trident',                            'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-trident.jpeg'),
    array('alt' => 'Wappen Nebelwacht',                         'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-nebelwacht.jpeg'),
    array('alt' => 'Wappen Argent',                             'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-argent.png'),
    array('alt' => 'Wappen Sturmkap',                           'kategorie' => 'Regionen', 'breit' => false, 'src' => $img_uri . '/wappen-sturmkap.png'),
    array('alt' => 'Kaiserliche Krone mit Sonnenmotiv',         'kategorie' => 'Artwork', 'breit' => false, 'src' => $img_uri . '/krone-sonne.png'),
    array('alt' => 'Imperiale Krone mit Drachen',               'kategorie' => 'Artwork', 'breit' => false, 'src' => $img_uri . '/krone-kaiserlich.png'),
    array('alt' => 'Semper Amplio – Emblem des Reiches',        'kategorie' => 'Artwork', 'breit' => true,  'src' => $img_uri . '/emblem-semper-amplio.png'),
);

$kategorien = array('Alle', 'Regionen', 'Events', 'Artwork');
?>

<div class="page-galerie">
    <div class="page-header">
        <div class="container">
            <span class="section-label">Bilder &amp; Eindrücke</span>
            <h1 style="margin-top:8px;">Galerie</h1>
            <p class="text-secondary" style="max-width:520px;margin-top:16px;font-size:18px;line-height:1.7;">
                Atmosphärische Impressionen aus dem Kaiserreich – Fotos von Events
                und generierte Artworks aus der Welt von Quirin.
            </p>
        </div>
    </div>

    <div class="divider-gold"></div>

    <section class="section">
        <div class="container">
            <div class="filters" data-galerie-filters>
                <?php foreach ($kategorien as $k) : ?>
                    <button class="chip<?php echo $k === 'Alle' ? ' active' : ''; ?>" data-filter="<?php echo esc_attr($k); ?>"><?php echo esc_html($k); ?></button>
                <?php endforeach; ?>
            </div>

            <div class="masonry" data-galerie-grid>
                <?php foreach ($bilder as $b) : ?>
                    <div class="item<?php echo $b['breit'] ? ' item-breit' : ''; ?>" data-kategorie="<?php echo esc_attr($b['kategorie']); ?>" data-src="<?php echo esc_url($b['src']); ?>" data-alt="<?php echo esc_attr($b['alt']); ?>" data-galerie-item tabindex="0" role="button">
                        <div class="item-img">
                            <img src="<?php echo esc_url($b['src']); ?>" alt="<?php echo esc_attr($b['alt']); ?>" class="real-img" loading="lazy">
                        </div>
                        <div class="item-overlay">
                            <span class="badge badge-gold"><?php echo esc_html($b['kategorie']); ?></span>
                            <p class="item-alt"><?php echo esc_html($b['alt']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <div class="lightbox" data-lightbox>
        <div class="lightbox-img">
            <img src="" alt="" class="lightbox-real-img" data-lightbox-img>
        </div>
        <button class="lightbox-close" data-lightbox-close aria-label="Schließen">&#10005;</button>
    </div>
</div>

<?php get_footer(); ?>
