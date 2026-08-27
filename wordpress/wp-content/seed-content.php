<?php
/**
 * Einmalig ausfuehrbares Migrations-Skript: befuellt die Regionen-, Zeitstrahl- und
 * FAQ-CPTs mit den Daten aus der React-SPA (src/data/regionen.ts, timeline.ts, FAQ.tsx).
 * Aufruf: wp eval-file wp-content/seed-content.php --allow-root
 * Idempotent: vorhandene Eintraege (per Slug/Titel) werden aktualisiert statt dupliziert.
 */
if (!defined('ABSPATH')) exit;

function quirin_seed_import_theme_image($relative_path) {
    static $cache = array();
    if (isset($cache[$relative_path])) return $cache[$relative_path];

    $src = get_template_directory() . $relative_path;
    if (!file_exists($src)) {
        WP_CLI::warning("Bild nicht gefunden: {$relative_path}");
        return 0;
    }

    // Bereits importiert? (per Dateiname in den Uploads suchen)
    $existing = get_posts(array(
        'post_type'   => 'attachment',
        'meta_key'    => '_quirin_seed_source',
        'meta_value'  => $relative_path,
        'numberposts' => 1,
    ));
    if ($existing) {
        $cache[$relative_path] = $existing[0]->ID;
        return $existing[0]->ID;
    }

    $upload_dir = wp_upload_dir();
    $filename   = wp_unique_filename($upload_dir['path'], basename($src));
    $dest       = trailingslashit($upload_dir['path']) . $filename;
    copy($src, $dest);

    $filetype   = wp_check_filetype($filename);
    $attach_id  = wp_insert_attachment(array(
        'post_mime_type' => $filetype['type'],
        'post_title'     => sanitize_file_name(pathinfo($filename, PATHINFO_FILENAME)),
        'post_status'    => 'inherit',
    ), $dest);

    require_once ABSPATH . 'wp-admin/includes/image.php';
    wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $dest));
    update_post_meta($attach_id, '_quirin_seed_source', $relative_path);

    $cache[$relative_path] = $attach_id;
    return $attach_id;
}

function quirin_seed_upsert_post($post_type, $slug, $args) {
    $existing = get_posts(array(
        'post_type'   => $post_type,
        'name'        => $slug,
        'post_status' => 'any',
        'numberposts' => 1,
    ));
    if ($existing) {
        $args['ID'] = $existing[0]->ID;
        wp_update_post($args);
        return $existing[0]->ID;
    }
    $args['post_name'] = $slug;
    return wp_insert_post($args);
}

// ── Regionen ──────────────────────────────────────────────────────────────
$regionen = array(
    array('id' => 'talborn', 'name' => 'Kronland Talborn', 'schlagwort' => 'Herz des Reiches',
        'beschreibung' => 'Das Kronland Talborn ist der Herzschlag des Kaiserreichs – Sitz des Kaisers, der Kriegerakademie und der imperialen Ordnung. Hier wird der Maßstab aller Dinge gesetzt.',
        'kultur' => array('Militärische Disziplin', 'Imperiale Hierarchie', 'Kriegshandwerk', 'Präzisionsarbeit'),
        'besonderheiten' => 'Heimat der Quiriner Kriegerakademie und des Kaiserpalastes Navalis. Die Stadt Talborn mit ihren Terrassen, Glockentürmen und Festungsanlagen ist das Fundament des Reiches.',
        'farbe' => '#8E7023', 'wappen' => '/assets/images/wappen-talborn.png',
        'lore' => 'Wer aus dem Kronland kommt, weiß genau, was das Maß aller Dinge ist. Disziplin und Ordnung sind nicht Tugend, sondern Grundlage – die Seele des Reiches trägt das Herz des Soldaten. Talborn, die Hauptstadt, erhebt sich über sanfte Felder und schiffbare Flüsse: Terrassenwälle, Glockentürme, Bollwerke und zeremonielle Plätze prägen das Bild. Im Hafen liegen Handelsschiffe neben der Kriegsflotte. Die Kriegerakademie bildet seit Generationen die Elite des Reiches aus. Freyhafen, die zweitgrößte Stadt, ist ein privilegierter Handelsknotenpunkt – selbstverwaltende Kaufmannsgilden tauschen Waren mit der weiten Welt. In den Vororten und Garnisonen spürt man die imperialen Wehrbereiche: Vier Militärdistrikten mit großen Garnisonskräften schützen das Reich nach innen und außen. Jenseits der gesicherten Gebiete lauern Goblins, Trolle, Verderbtheit und Räuber. Das Reich exportiert Erze, Waffen, Präzisionsarbeit und edles Mithril.'),
    array('id' => 'siegeshain', 'name' => 'Siegeshain', 'schlagwort' => 'Wein, Etikette & Duelle',
        'beschreibung' => 'Siegeshain ist die Präfektur der Kultiviertheit – Wein, Mode und unerschütterliche Fassung unter Druck. Wer hier aufwächst, lernt: Kleidung ist Sprache, Schweigen ist Stärke.',
        'kultur' => array('Weinbaukultur', 'Etikette & Mode', 'Duellkultur', 'Composure'),
        'besonderheiten' => 'Die Küstenregion liegt im Morgennebel vom Meer. Tiberes, die Hauptstadt, vereint Akademien, Häfen und Märkte. Das Wahrzeichen Siegeshains ist die "Stille Würde" – wer Kontrolle verliert, hat schon entschieden.',
        'farbe' => '#6E8FA6', 'wappen' => '/assets/images/wappen-siegeshain.png',
        'lore' => 'Wer aus Siegeshain kommt, ist bekannt als jemand, der selbst unter Druck nie die Fassung verliert und stets die neueste Mode trägt. Die Weinreben ziehen sich an den Küstenhängen entlang, der Morgennebel vom Meer kriecht durch die Täler. In Tiberes vereinen sich Akademien, Häfen und Märkte zu einem Bild gepflegter Eleganz. Kleidung ist hier Sprache – jede Wahl ein Statement. Die Duellkultur Siegeshains ist berühmt: Man kämpft mit Präzision, nicht mit Lärm. "Der Stille Geist lehrt: Wer unter Druck die Kontrolle verliert, hat bereits entschieden." So lautet das Sprichwort, das Generationen von Siegeshainern geprägt hat.'),
    array('id' => 'waldestrutz', 'name' => 'Waldestrutz', 'schlagwort' => 'Wälder, Wildnis & Langbögen',
        'beschreibung' => 'Dichte Wälder, abgelegene Pfade und das Gesetz des langen Bogens – Waldestrutz ist das Reich derer, die zwischen den Bäumen zu Hause sind.',
        'kultur' => array('Bogenschießen', 'Waldläuferei', 'Naturnähe', 'Eigenständigkeit'),
        'besonderheiten' => 'Weitgehend unerschlossenes Waldgebiet mit verstreuten Siedlungen. Die Waldestrutz-Bogenschützen gelten als die treffsichersten im Reich.',
        'farbe' => '#6B9672', 'wappen' => '/assets/images/wappen-waldestrutz.png',
        'lore' => 'Wer aus Waldestrutz kommt, versteht die Sprache des Waldes besser als die der Städte. Hier zählen Ausdauer, Geduld und ein gutes Auge mehr als Rang und Titel. Die dichten Forste bieten Schutz und Nahrung, aber auch Gefahr – Trolle und schlimmere Dinge lauern in den Tiefen. Die Bogenschützen von Waldestrutz sind legendär: Man sagt, ein guter Waldläufer trifft eine Münze auf hundert Schritt. Die Gemeinschaften sind klein, eng verbunden und argwöhnisch gegenüber Fremden – aber treu wie Eichenholz gegenüber denen, denen sie vertrauen.'),
    array('id' => 'roon', 'name' => 'Roon', 'schlagwort' => 'Häfen, Grenzen & Soldatentum',
        'beschreibung' => 'Roon ist das Grenzland des Reiches – raue Hafenstädte, harte Männer und Frauen, und ein Wille aus Stahl, der die Grenze hält.',
        'kultur' => array('Maritim', 'Militärisch', 'Pragmatisch', 'Grenzbewusstsein'),
        'besonderheiten' => 'Wichtiger Handels- und Militärhafen. Roon-Söldner sind im ganzen Reich für ihre Verlässlichkeit bekannt.',
        'farbe' => '#5C7A8A', 'wappen' => '/assets/images/wappen-roon.png',
        'lore' => 'Wer aus Roon kommt, hat gelernt, dass das Meer kein Versprechen kennt – nur den Wind und die Gezeiten. Die Hafenstädte Roons sind laut, lebendig und gefährlich. Händler und Piraten sind hier oft dasselbe, und die Grenzgarnisonen halten mit harter Hand, was das Reich beansprucht. Roon-Soldaten gelten als die zuverlässigsten Söldner im Reich – nicht die elegantesten, aber die, die durchhalten.'),
    array('id' => 'trident', 'name' => 'Trident', 'schlagwort' => 'Wasser, Glas & Kunst',
        'beschreibung' => 'Trident liegt an einem Netz von Flüssen und Kanälen. Hier entstehen die schönsten Glaswaren und Kunstwerke des Reiches.',
        'kultur' => array('Glaskunst', 'Handwerk', 'Handel', 'Ästhetik'),
        'besonderheiten' => 'Die Glasmeister von Trident sind legendär. Ihre Werke schmücken die Paläste des Reiches und werden bis ans Ende der Welt gehandelt.',
        'farbe' => '#4A8AA0', 'wappen' => '/assets/images/wappen-trident.jpeg',
        'lore' => 'Wer aus Trident kommt, sieht die Welt durch das Prisma der Schönheit. Die Kanäle spiegeln die Himmel, und in den Werkstätten der Glasmeister entsteht das Licht selbst in Farben. Trident ist Handelszentrum und Kunstmetropole in einem – die Reichen des Reiches wetteifern um die kostbarsten Stücke, und die Händler kennen den Wert jeder Ware bis auf den letzten Kupferpfennig.'),
    array('id' => 'nebelwacht', 'name' => 'Nebelwacht', 'schlagwort' => 'Leuchtturmfeuer, Salz & Tiefen',
        'beschreibung' => 'Die nördlichste Präfektur liegt im ewigen Nebel. Leuchtturm-Wächter, Salzhändler und solche, die das Meer fürchten und lieben, nennen es Heimat.',
        'kultur' => array('Mystik', 'Seefahrt', 'Isolation', 'Tradition'),
        'besonderheiten' => 'Nebelwacht ist bekannt für sein Salz, seine Leuchtturmketten und die Gerüchte über Dinge, die in den Tiefen des Meeres hausen.',
        'farbe' => '#4A6070', 'wappen' => '/assets/images/wappen-nebelwacht.jpeg',
        'lore' => 'Wer aus Nebelwacht kommt, spricht wenig und weiß viel. Der Nebel ist hier keine Einschränkung – er ist ein alter Freund. Die Leuchtturm-Wächter kennen jeden Fels, jede Strömung, jeden tückischen Gezeiten-Wirbel. Das Salz der Nebelwacht ist das beste im Reich, und die Geschichten, die die Fischer erzählen, werden anderswo als Märchen abgetan – hier gelten sie als Warnung.'),
    array('id' => 'argent', 'name' => 'Argent', 'schlagwort' => 'Silber, Musik & Glocken',
        'beschreibung' => 'Argent ist das kulturelle Herz des Reiches – Silberminen, Musikakademien und der Klang von Glocken, der durch die Täler hallt.',
        'kultur' => array('Musik', 'Handwerk', 'Religiosität', 'Bildung'),
        'besonderheiten' => 'Die Glockentürme Argents sind im ganzen Reich zu hören. Die Silberakademie bildet Musiker und Gelehrte aus.',
        'farbe' => '#A0A0B0', 'wappen' => '/assets/images/wappen-argent.png',
        'lore' => 'Wer aus Argent kommt, trägt die Musik in sich. Die Silberminen liefern das Metall für die feinsten Instrumente, und die Akademien lehren Töne, die Götter und Menschen berühren. Die Glocken Argents haben eine besondere Qualität – sie sollen Böses fernhalten und Gutes herbeirufen. So sagen die Alten.'),
    array('id' => 'sturmkap', 'name' => 'Sturmkap', 'schlagwort' => 'Wölfe, Wind & Seile',
        'beschreibung' => 'Die raue Nordspitze des Reiches – ewige Stürme, Wolfsjäger und Männer, die an Seilen leben oder sterben.',
        'kultur' => array('Kletterei', 'Jagd', 'Ausdauer', 'Rauheit'),
        'besonderheiten' => 'Sturmkap liefert die besten Kletterer und Seiler des Reiches. Die Wolfsjagd ist hier Tradition und Notwendigkeit zugleich.',
        'farbe' => '#8A7A6A', 'wappen' => '/assets/images/wappen-sturmkap.png',
        'lore' => 'Wer aus Sturmkap kommt, lächelt über Klagen über schlechtes Wetter. Was anderswo als Sturm gilt, ist hier ein milder Frühlingswind. Die Klippen, die Wölfe, die Seile – das ist das Leben. Sturmkap-Männer und -Frauen sind in der ganzen Welt als die zuverlässigsten Kletterführer bekannt, und ihre Seile gelten als die stärksten, die es gibt.'),
);

$i = 0;
foreach ($regionen as $r) {
    $post_id = quirin_seed_upsert_post('regionen', $r['id'], array(
        'post_type'    => 'regionen',
        'post_title'   => $r['name'],
        'post_name'    => $r['id'],
        'post_status'  => 'publish',
        'post_excerpt' => $r['beschreibung'],
        'post_content' => '<!-- wp:paragraph --><p>' . esc_html($r['lore']) . '</p><!-- /wp:paragraph -->',
        'menu_order'   => $i++,
    ));
    update_field('field_region_schlagwort', $r['schlagwort'], $post_id);
    update_field('field_region_kultur', implode("\n", $r['kultur']), $post_id);
    update_field('field_region_besonderheiten', $r['besonderheiten'], $post_id);
    update_field('field_region_farbe', $r['farbe'], $post_id);
    $img_id = quirin_seed_import_theme_image($r['wappen']);
    if ($img_id) update_field('field_region_wappen', $img_id, $post_id);
    WP_CLI::log("Region: {$r['name']} -> Post #{$post_id}");
}

// ── Zeitstrahl-Ereignisse ────────────────────────────────────────────────
$ereignisse = array(
    array('id' => 'chaos-herden', 'jahr' => -330, 'titel' => 'Zeitalter der Chaos-Herden', 'typ' => 'katastrophe',
        'beschreibung' => 'Vor der Reichsgründung herrschten die Chaos-Herden über das Land. Wilde Magie und Dunkelheit bedrohten alle Lebewesen.'),
    array('id' => 'reichsgruendung', 'jahr' => 0, 'titel' => 'Gründung des Kaiserreiches Quirin', 'typ' => 'grundung',
        'beschreibung' => 'Im Jahr 0 wird das Kaiserreich Quirin aus den Chaos-Herden befreit. Kaiser Quirin der Erste vereint die Stämme unter einem Banner und legt den Grundstein des Reiches.'),
    array('id' => 'kriegerakademie', 'jahr' => 47, 'titel' => 'Gründung der Kriegerakademie', 'typ' => 'grundung',
        'beschreibung' => 'Als magische Institutionen die Gesellschaft zu dominieren beginnen, gründen die Krieger als Gegenbewegung die Quiriner Kriegerakademie – eine exklusive Institution der Kriegerphilosophie.'),
    array('id' => 'bund-der-klingen', 'jahr' => 112, 'titel' => 'Gründung des Bund der Klingen', 'typ' => 'grundung',
        'beschreibung' => 'Der Bund der Klingen entsteht als Bruderschaft der besten Krieger des Reiches. Sie hüten die Kampfkünste und stellen sich in den Dienst des Kaisers.'),
    array('id' => 'erste-grosse-expansion', 'jahr' => 180, 'titel' => 'Erste Große Expansion', 'typ' => 'krieg',
        'beschreibung' => 'Das Kaiserreich expandiert unter Kaiser Aldric II. nach Westen und Norden. Die Präfekturen Roon und Sturmkap werden dem Reich eingegliedert.'),
    array('id' => 'freyhafener-charta', 'jahr' => 430, 'titel' => 'Freyhafener Handelscharta', 'typ' => 'handel',
        'beschreibung' => 'Freyhafen erhält durch kaiserliches Dekret das Privileg der Selbstverwaltung seiner Kaufmannsgilden. Eine neue Ära des Handels beginnt.'),
    array('id' => 'weisse-pest', 'jahr' => 634, 'titel' => 'Die Weiße Pest', 'typ' => 'katastrophe',
        'beschreibung' => 'Eine mysteriöse Seuche bricht aus dem Nebel auf und rafft ein Drittel der Bevölkerung hin. Piraterie und Söldnertum florieren in der Instabilität.'),
    array('id' => 'hochwald-spannungen', 'jahr' => 701, 'titel' => 'Hochwald-Spannungen', 'typ' => 'krieg',
        'beschreibung' => 'Die Elfen des Hochwalls und das Kaiserreich geraten in Konflikt über die Grenzen der imperialen Expansion in die alten Wälder.'),
    array('id' => 'dunkle-kulte', 'jahr' => 820, 'titel' => 'Zeit der Dunklen Kulte', 'typ' => 'magie',
        'beschreibung' => 'Im Schatten des Adels und der Kirche breiten sich dunkle Kulte aus. Adelsintrigen und magische Experimente bedrohen die Stabilität des Reiches.'),
    array('id' => 'heute', 'jahr' => 826, 'titel' => 'Die Gegenwart – Jahr 826', 'typ' => 'dynastisch',
        'beschreibung' => 'Das Kaiserreich steht vor neuen Herausforderungen. Adelsintrigen, Magie-Spannungen und äußere Bedrohungen fordern Krieger und Edle gleichermaßen. Eine neue Generation schreibt die Geschichte.'),
);

foreach ($ereignisse as $e) {
    $post_id = quirin_seed_upsert_post('zeitstrahl_ereignis', $e['id'], array(
        'post_type'    => 'zeitstrahl_ereignis',
        'post_title'   => $e['titel'],
        'post_name'    => $e['id'],
        'post_status'  => 'publish',
        'post_content' => '<!-- wp:paragraph --><p>' . esc_html($e['beschreibung']) . '</p><!-- /wp:paragraph -->',
    ));
    update_field('field_ereignis_jahr', $e['jahr'], $post_id);
    wp_set_object_terms($post_id, array($e['typ']), 'ereignis_typ');
    WP_CLI::log("Ereignis: {$e['titel']} -> Post #{$post_id}");
}

// ── FAQ ───────────────────────────────────────────────────────────────────
$faq = array(
    array('frage' => 'Was ist LARP?', 'antwort' => 'LARP steht für Live Action Role Playing – Lebendiges Rollenspiel. Teilnehmer schlüpfen in eine Rolle und spielen Szenarien in echten Kostümen und Kulissen aus. Im Gegensatz zu Pen-and-Paper-Rollenspielen passiert alles physisch: Kämpfe werden mit gepolsterten Waffen ausgefochten, Gespräche finden im Charakter statt.'),
    array('frage' => 'Was ist das Kaiserreich Quirin?', 'antwort' => 'Quirin ist ein Fantasy-LARP, das 1999 in Würzburg gegründet wurde. Es spielt in einem mittelalterlichen Fantasiereich, das Samurai-Philosophie mit europäischem Mittelalter kombiniert. Es gibt zwei Hauptspielzweige: das kämpferisch orientierte Kriegerspiel und das diplomatisch ausgerichtete Adelsspiel.'),
    array('frage' => 'Wie melde ich mich an?', 'antwort' => 'Gehe zur Shop-Seite, wähle ein Event aus, fülle das Formular aus und bezahle über den Checkout. Du erhältst eine Bestätigungs-E-Mail mit allen Details. Bei Fragen stehen wir per Kontaktformular oder E-Mail zur Verfügung.'),
    array('frage' => 'Was muss ich mitbringen?', 'antwort' => 'Für Erstlinge reichen zuerst einfache mittelalterliche Kleidung (kein Fleece, kein Nylon) und gute Laune. Gepolsterte Waffen (Schaumstoffwaffen) sind Pflicht für den Kampf – du kannst sie aber auch ausleihen. Für deinen Aufenthalt: Schlafsack, wetterfeste Kleidung, Hygieneartikel. Eine detaillierte Packliste bekommst du nach der Anmeldung.'),
    array('frage' => 'Was kostet die Teilnahme?', 'antwort' => 'Die Kosten variieren je nach Event. Einsteiger-Events beginnen bei ca. 10 €, Wochenend-Events kosten zwischen 20 und 130 €. Die Preise beinhalten Spielgelände und Infrastruktur, aber in der Regel keine Unterkunft oder Verpflegung – diese werden oft gemeinschaftlich organisiert.'),
    array('frage' => 'Brauche ich LARP-Erfahrung?', 'antwort' => 'Nein. Wir haben regelmäßig Einsteiger-Events speziell für Neulinge. Erfahrene Spieler begleiten Neulinge und erklären Regeln, Kampfmechaniken und die Spielwelt. Außerdem empfehlen wir, das Hauptdokument (Quirinspiel 3.0) vorab zu lesen.'),
    array('frage' => 'Was ist In-Time und Out-Time?', 'antwort' => 'In-Time bedeutet: du spielst im Charakter, alles ist Teil der Spielwelt. Out-Time bedeutet: du bist für einen Moment du selbst, nicht dein Charakter – zum Beispiel bei Verletzungen oder wenn du eine Pause brauchst. Das Signal dafür ist meistens das Heben beider Hände. Diese Trennung ist wichtig und wird bei Quirin strikt respektiert.'),
    array('frage' => 'Wie ist die Gemeinschaft?', 'antwort' => 'Quirin ist eine leidenschaftliche Gruppe von Privatpersonen – kein eingetragener Verein. Die Community besteht aus Menschen verschiedenster Hintergründe, die alle eines gemeinsam haben: die Leidenschaft für immersives Rollenspiel. Respekt und Inklusion sind Grundwerte, die wir ernst nehmen.'),
    array('frage' => 'Kann ich meinen eigenen Charakter mitbringen?', 'antwort' => 'Ja! Du kannst einen völlig neuen Charakter erschaffen, der in die Spielwelt von Quirin passt. Das Hauptdokument gibt Hinweise zu den Völkern, Berufen, Adelstiteln und Fraktionen. Bitte bespreche deinen Charakter vorab mit der Spielleitung, um Konflikte mit der bestehenden Lore zu vermeiden.'),
);

$i = 0;
foreach ($faq as $f) {
    $slug = sanitize_title($f['frage']);
    $post_id = quirin_seed_upsert_post('faq_eintrag', $slug, array(
        'post_type'    => 'faq_eintrag',
        'post_title'   => $f['frage'],
        'post_status'  => 'publish',
        'post_content' => '<!-- wp:paragraph --><p>' . esc_html($f['antwort']) . '</p><!-- /wp:paragraph -->',
        'menu_order'   => $i++,
    ));
    WP_CLI::log("FAQ: {$f['frage']} -> Post #{$post_id}");
}

WP_CLI::success('Regionen, Zeitstrahl-Ereignisse und FAQ befuellt.');
