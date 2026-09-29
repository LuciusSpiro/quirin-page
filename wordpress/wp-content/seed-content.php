<?php
/**
 * Einmalig ausfuehrbares Migrations-Skript: befuellt die Regionen-, Zeitstrahl- und
 * FAQ-CPTs mit den Daten aus der React-SPA (src/data/regionen.ts, timeline.ts, FAQ.tsx).
 * Aufruf: wp eval-file wp-content/seed-content.php --allow-root
 * Idempotent: vorhandene Eintraege (per Slug) werden aktualisiert statt dupliziert.
 *
 * Wappen werden NICHT mehr als Mediathek-Bild gesetzt, sondern vom Theme anhand des
 * Region-Slugs geladen (quirin_region_wappen_url) — dadurch bleibt der Export reiner
 * Text und der Import auf Live hat keine zerbrechlichen Attachment-IDs.
 */
if (!defined('ABSPATH')) exit;

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

// ── Regionen (Quelle: src/data/regionen.ts) ─────────────────────────────────
$regionen = array(
    array('id' => 'talborn', 'name' => 'Kronland Talborn',
        'schlagwort' => 'Herz des Reiches, Reichsnorm & Amtssiegel',
        'beschreibung' => 'Das Kronland Talborn ist der verdichtete Kern des Kaiserreichs – direkt von Kaiser und Reichsverwaltung geführt, Sitz von Kaiserhof, Kriegerakademie und Bund der Klingen. Hier wird der Maßstab aller Dinge gesetzt.',
        'kultur' => array('Reichsverwaltung', 'Militärische Disziplin', 'Kriegshandwerk', 'Ordnung & Norm'),
        'besonderheiten' => 'Heimat der Quiriner Kriegerakademie (auf dem alten Teramar-Schlachtfeld) und des Bundes der Klingen. Die Hauptstadt Talborn ist Reichshafen und größte befestigte Stadt des Reiches mit Kaiserpalast und Lichtdom. Freyhafen ist privilegierte Handelsfreistadt, Hammerklang die zwergische Minen- und Bergstadt im Gebirge.',
        'farbe' => '#8E7023',
        'lore' => 'Wer aus dem Kronland stammt, weiß genau, was das Maß aller Dinge ist. Gepflasterte Reichswege, geeichte Gewichte und Wachen an jedem Knotenpunkt zeigen: Ordnung ist hier Alltag, nicht Ideal. Die Hauptstadt Talborn erhebt sich wie eine Krone aus hellem Stein über dem Hafen – Terrassen und Mauerringe gestaffelt, schwarz-goldene Banner an Toren und Amtsgebäuden, der Lichtdom mit goldener Kuppel unterhalb des Kaiserpalastes. Drei Tagesreisen entfernt bildet die Quiriner Kriegerakademie seit der Reichsgründung die Offiziere des Reiches aus, seit fünfundzwanzig Jahren auch Nicht-Quiriner. Eine Tagesreise weiter wacht der Bund der Klingen über die Kampfkunst selbst und prüft Gesellen wie Meister. Freyhafen, kaiserlich privilegierte Freistadt und zweitgrößte Stadt Quirins, wird von einem Gildenrat regiert – ohne adligen Vogt, dafür mit Söldnern, Schmugglern und Hehlern im Schatten des Wohlstands. Im Gebirge liegt Hammerklang, die Bergstadt der Zwerge unter dem Rat der drei Hämmer, deren Lex Zwergia eigene Gerichtsbarkeit sichert und deren Mithril reichsweit als Gütesiegel gilt. Die Kampfkunst des Kronlands, „Alles ist Basis", setzt mit langem Schwert, Seitenschwert und Dolch den Reichsstandard, den alle anderen Traditionen in sich tragen. Gegenüber Elfen herrscht durch den Hochwaldkonflikt Misstrauen, gegenüber Zwergen und Halblingen Respekt.'),
    array('id' => 'siegeshain', 'name' => 'Siegeshain',
        'schlagwort' => 'Rotwein, Etikette & Duellkunst',
        'beschreibung' => 'Siegeshain ist die südliche Präfektur der Kultiviertheit – Rotwein, Mode und unerschütterliche Fassung unter Druck. Wer hier aufwächst, lernt: Kleidung ist Sprache, Haltung ist Stärke.',
        'kultur' => array('Weinbaukultur', 'Etikette & Mode', 'Duellkultur', 'Composure'),
        'besonderheiten' => 'Burg Siegeshain thront als Verwaltungssitz über dem Land. Tiberes, Hafen-, Handels- und Universitätsstadt, vereint Schwertschulen, die Akademie der Gehobenen Künste und Märkte. Reichsweit bekannt sind der Siegeshainer Rotwein und die Goldminen der Hügelzüge.',
        'farbe' => '#6E8FA6',
        'lore' => 'Wer aus Siegeshain kommt, gilt als jemand, der selbst unter Druck nie die Fassung verliert und stets die neueste Mode trägt. Die Weinreben ziehen sich an den Küstenhängen entlang, der Morgennebel vom Meer kriecht flussaufwärts durch die Täler und legt sich wie ein heller Schleier auf Reben und Obstgärten. In Tiberes vereinen sich Akademien, Häfen und Märkte zu einem Bild gepflegter Eleganz: Fechtvorführungen und Duellabsprachen auf den Plätzen, Frachtlisten und Zunftpreise an den Kais. Form ist hier keine Zier, sondern Kompetenz – man grüßt korrekt, wählt Worte mit Bedacht und zeigt Gefühle nur, wenn es der Situation dient. Mode ist ein gesellschaftliches Instrument: Schnitte und Farben werden in Siegeshain „gesetzt" und andernorts kopiert. Duelle sind sozial akzeptierte Bühne, doch an Protokoll gebunden – nicht Lautstärke entscheidet, sondern Haltung. Die Kampfkunst „Der Ruhige Geist" trainiert genau das: langes Schwert, Seitenschwert und Dolch, geübt im Duellprotokoll, bis Ruhe zur Gewohnheit wird. Gefahr lauert seltener in der Wildnis als im Menschen selbst – Intrigen und Duellspiralen machen Ehre zur Waffe, begleitet von Fälschungen und Überfällen auf Wein- und Goldtransporte.'),
    array('id' => 'waldestrutz', 'name' => 'Waldestrutz',
        'schlagwort' => 'Dichte Wälder, leise Wege & lange Bögen',
        'beschreibung' => 'Waldestrutz ist die nördliche Grenzmark Efarims – dichte Wälder, der elfische Hochwald als ständiger Nachbar und das Gesetz des langen Bogens. Hier ist zu Hause, wer wenig redet und viel sieht.',
        'kultur' => array('Bogenschießen', 'Waldläuferei', 'Naturnähe', 'Eigenständigkeit'),
        'besonderheiten' => 'Burg Waldestrutz ist Verwaltungssitz und Gericht für Holz-, Jagd- und Grenzfragen. Großwattburg an der Nordküste ist Brückenkopf nach Roon und Stützpunkt der Nordostflotte. Aus dem Hochwald sickern über stille Pfade seltene Hölzer und Textilien ins Reich.',
        'farbe' => '#6B9672',
        'lore' => 'Wer aus Waldestrutz kommt, gilt als jemand, der wenig redet, klare Grenzen kennt und immer einen Weg findet, wo andere nur Wald sehen. Dichte Wälder überziehen Hügelketten und Senken, aus dem Hochwald speisen klare Bäche die Täler, und wer vom markierten Pfad tritt, verliert schnell Richtung und Zeit. Die Menschen hier sind bodenständig und zurückhaltend – Gastfreundschaft ist schlicht, Prahlerei selten, aber Absprachen werden erinnert. Der Alltag ist Forst und Jagd, Wegepflege, Grenzdienst und Handwerk: Holz wird geschlagen, Harz gesiedet, Fleisch geräuchert. Aus dieser Lebensweise ist die Kampfkunst „Hinter den Blättern" hervorgegangen, mit dem Leitgedanken „Triff und Verschwinde" – der Bogen eröffnet, das lange Messer beendet, der Dolch dient engsten Distanzen. Gefährlich ist vor allem die Reibung an der Grenze: Illegale Rodungen, Wilderei und Schwarzhandel treiben Vergeltungsspiralen mit den Waldelfen an, während in den tiefen Beständen Waldgeister als Irrlichter und Stimmen im Unterholz umgehen. Reichsweit steht Waldestrutz für langsam gewachsenes Kernholz, begehrt für Bogenbau, dazu Harz, Pech und dunklen Harzhonig.'),
    array('id' => 'roon', 'name' => 'Roon',
        'schlagwort' => 'Frontland, Portwein & eiserner Wille',
        'beschreibung' => 'Roon ist eine große Insel im Nordosten und die jüngste Präfektur des Reiches – lebendige Küstenorte, dahinter das stille Frontland zur Waldkante, wo die Schwarze Garde gegen die Blutschatten kämpft.',
        'kultur' => array('Maritim', 'Militärisch', 'Pragmatisch', 'Grenzbewusstsein'),
        'besonderheiten' => 'Schwarzburg ist Verwaltungssitz und Grenzpunkt der Insel – Tor zur Küste im Westen, Tor zur Front im Osten. An der Waldkante hält die Schwarze Garde eine Linie aus Wällen, Gräben und Türmen gegen den Zauberwald.',
        'farbe' => '#5C7A8A',
        'lore' => 'Wer aus Roon kommt, gilt als jemand, der standhält, wenn andere weichen, und im entscheidenden Moment handelt, ohne zu zögern. Erst seit wenigen Jahrzehnten besiedelt, trägt die Insel noch die Narben der Wattwallschlacht – Untiefen und schwarze Wrackreste vor der Westküste. Die Küstenorte sind jung, geschäftig und meist aus Holz gebaut, doch je weiter man ins Landesinnere kommt, desto stiller und kontrollierter wird es, bis der Zauberwald beginnt: ein von der Finsternis berührter Forst, der als offene Drohung über dem Land liegt. Die Menschen Roons zeichnen ein ausgeprägter Stolz und ein starkes Wir-Gefühl aus – sie haben die Insel mit eigenen Händen aufgebaut und eine Invasion abgewehrt. Aus dieser Haltung wuchs die Kampfkunst „Ein Hau" mit dem Leitsatz „Entscheide mit einem Hieb", getragen von langem Schwert und Seitenschwert. Die größte Bedrohung bleibt der Zauberwald: Nachts kommen Blutschatten-Stämme, die den Wald als heiliges Jagdgebiet betrachten, verschleppen Siedler und opfern sie in blutigen Ritualen. Reichsweit bekannt ist Roon für Portwein aus kühlen Felskellern, für Erz, Gold und seltenes, extrem hartes Holz von der Waldkante.'),
    array('id' => 'trident', 'name' => 'Trident',
        'schlagwort' => 'Wasser, Glas & Kunst',
        'beschreibung' => 'Trident liegt im Nordwesten Quirins – ein Gürtel aus Inselkernen, Riffen und Kanälen, der wie ein Dreizack ins Meer greift. Hier entstehen die feinsten Glaswaren und Kunstwerke des Reiches.',
        'kultur' => array('Glaskunst', 'Handwerk', 'Handel', 'Ästhetik'),
        'besonderheiten' => 'Stadt Trident ist Verwaltungssitz und Herz des Glas- und Lichthandwerks, mit der berühmten Kunstakademie für Malerei, Bildhauerei und Glasgestaltung. Beranshafen im Süden ist Stützpunkt der Nordwestflotte.',
        'farbe' => '#4A8AA0',
        'lore' => 'Wer aus Trident kommt, gilt als innovativ und als jemand, für den Funktionalität und Schönheit kein Widerspruch sind. Kanäle, Stege und Pfahlbauten prägen den Norden – Wasserstraßen laufen wie Gassen zwischen den Häusern, und am Abend wirken die Kanäle wie flüssiges Glas, weil jede Laterne sich doppelt im Wasser spiegelt. In den Werkstätten der Glasmeister entstehen Mosaike, Leuchten und Spiegeltafeln, und Tridenter Linsen gelten als verlässlich auf See. Die Menschen Tridents sind Schöngeister mit praktischem Blick: neugierig, vorwärtsgewandt, stets auf der Suche nach der klareren Lösung, denn Ästhetik gilt hier als Form von Ordnung. Ihre Kampfkunst „Immer im Fluss" trainiert fließende Übergänge mit Seitenschwert oder langem Messer und Dolch – Spiegel dienen dabei als Hilfsmittel, um die Zentrallinie zu prüfen. Gefahren entstehen aus Küste und Wildnis zugleich: Riffe und Strömungen machen Fehler teuer, in warmen Nächten soll der Gesang von Sirenen über stilles Wasser tragen, und in den Kanälen wühlen Rattlinge. Reichsweit steht Trident für Glas und Spiegel, Linsen und Leuchten, Mosaike und feines Kunsthandwerk.'),
    array('id' => 'nebelwacht', 'name' => 'Nebelwacht',
        'schlagwort' => 'Leuchtfeuer, Salz & dunkle Tiefen',
        'beschreibung' => 'Nebelwacht ist die äußerste Westpräfektur und flankiert den Seezugang nach Efarim – zerklüftete Küsten unter grauem Schleier, heiße Quellen und ein Höhlenlabyrinth voller dunkler Tiefen.',
        'kultur' => array('Mystik', 'Seefahrt', 'Isolation', 'Tradition'),
        'besonderheiten' => 'Der Tempelleuchtturm der Hauptstadt Nebelwacht ist zugleich Heiligtum, Signal und Zuflucht über den Salzklippen. In den Höhlentiefen wacht eine Bannkapelle des Lichts gegen die Finsternis, während Magier aus Arkapur die Strömungen des Schleiers beobachten.',
        'farbe' => '#4A6070',
        'lore' => 'Wer aus Nebelwacht kommt, gilt als jemand, der auch ohne mit den Augen zu sehen sicher seinen Weg findet. Kalte Strömungen treffen hier auf heiße Quellen, Dampf steigt aus Spalten, und Gischt und Nebel nehmen die Sicht und verschlucken Geräusche. Unter den steil ins Meer brechenden Klippen beginnt ein Höhlen- und Stollenlabyrinth, das nur bei Ebbe oder über riskante Pfade erreichbar ist. Die Menschen hier gelten als misstrauisch, ihr Humor ist schwarz und trocken – nicht aus Grausamkeit, sondern als Schutz gegen das, was man nachts im Nebel zu sehen glaubt. Aus dieser Landschaft ist eine Kampfkultur entstanden, die nicht auf Sicht vertraut, sondern auf Kontakt: „Führung durch Fühlen", mit Seitenschwert oder langem Messer und Dolch, trainiert im Blindgang über die Bindung. In den Tiefen der Höhlen liegt eine Bannkapelle des Lichts, deren ewige Flammen als Bollwerk gegen die Finsternis dienen, denn dort treiben ertrunkene Leichenfresser und Geisterstimmen umher. Reichsweit steht Nebelwacht für Schleierware – alchimistische Kräuter, Harze, Tinkturen und Bannpulver, dazu Räucherfisch und schwarzes Klippensalz.'),
    array('id' => 'argent', 'name' => 'Argent',
        'schlagwort' => 'Silber, Musik & Glockenklang',
        'beschreibung' => 'Argent ist eine südwestliche Inselpräfektur, geformt von Gestein und Sonne – Silberminen im rauen Norden, Oliven- und Weingärten im sanften Süden, und über allem der Klang der Glocken.',
        'kultur' => array('Musik', 'Handwerk', 'Präzision', 'Festkultur'),
        'besonderheiten' => 'Stadt Argent im Norden ist Festung und Werk zugleich – ihr großer Tempel mit offener Glockenhalle prägt den Glockenguss als Kunstform. Sita im Süden ist geschäftiger Handelshafen voller Musik.',
        'farbe' => '#A0A0B0',
        'lore' => 'Wer aus Argent kommt, gilt als jemand, der alles ganz genau nimmt. Der Silberrücken, ein trockener Höhenzug, trennt die kargen, minenreichen Nordhänge von den weichen Landschaften im Süden mit Olivenbäumen, Zitrusplantagen und Weingärten – und selbst die Nächte tragen den fernen Nachhall von Glocken. In Stadt Argent ist Glockenguss nicht bloß Handwerk, sondern Kunst: Metall, Form und Nachklang werden geprüft, bis der Ton vollkommen sitzt. Die Menschen gelten als hochpräzise und penibel, stolz auf saubere Arbeit – doch trotz aller Selbstdisziplin kennt die Insel Freude, wenn Feste musikalisch, farbig und voller Gesang gefeiert werden. Die Kampfkunstphilosophie „Innere Stille" mit dem Lehrsatz „Keine Unruhe" schult mit Seitenschwert, langem Messer und Dolch die Körperbeherrschung bis in die kleinste Bewegung. Gefahr droht aus Tiefe, Küste und Gier: Trolle und Goblinbanden in den Minen, Sirenen auf See, vor allem aber Hehlerketten und organisiertes Verbrechen, das auf Silber und Schmuck zielt. Reichsweit steht Argent für Silber, insbesondere Klangsilber, für Glocken, Instrumente und Zitrusfrüchte.'),
    array('id' => 'sturmkap', 'name' => 'Sturmkap',
        'schlagwort' => 'Wölfe, Wind & Wellen',
        'beschreibung' => 'Sturmkap liegt im Südwesten Quirins – ein Land aus Kaps und Klippen, windgezeichneten Küsten und blau-weißen Mosaiken, in dem der Wind selten stillsteht.',
        'kultur' => array('Seefahrt', 'Ausdauer', 'Handwerk', 'Rauheit'),
        'besonderheiten' => 'Burg Sturmkap, halb in den Fels gehauen, ist das Herz der Präfektur; darunter liegt der Hauptstützpunkt der Südwestflotte. Rundum klammern sich Kapsiedlungen und Fischorte an Buchten und Steinriegel.',
        'farbe' => '#8A7A6A',
        'lore' => 'Wer aus Sturmkap kommt, gilt als jemand, der einfach alles aushält. Der Wind fährt hier über nackten Stein, zerrt an Segeln und drückt Schiffe gegen den Felsen – Dächer werden mit Steinen beschwert, und Wege folgen dem Boden, nicht dem Wunsch. Die Menschen gelten als robust, pflichtbewusst und wortkarg, doch hinter der Härte liegt Herzlichkeit: Wer friert oder Hunger leidet, wird aufgenommen, auch wenn es den Gastgebern selbst an Brot fehlt. Klart das Wetter auf, feiert man ausgelassene Tanzfeste mit Liedern und Branntwein. Aus dieser Haltung ist die Kampfkultur des „Brandungsfels" gewachsen, deren Leitgedanke „Halte Stand" lautet – trainiert wird auf Klippen und in der Brandungszone, unter Wellendruck und mit schwereren Übungswaffen, damit Technik auch unter Erschöpfung sitzt. Gefahr entsteht zuerst aus der Natur: Brandung, Klippen und plötzliche Stürme bestrafen jeden Fehler, an den Küsten streifen Küstenwölfe, auf den Klippen sitzen Sturmkrähen, und vereinzelt zeigt sich sogar ein Wyvern. Reichsweit steht Sturmkap für robuste Schleifsteine, Sturmkraut-Öl und würzigen Schafs- und Ziegenkäse.'),
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
    WP_CLI::log("Region: {$r['name']} -> Post #{$post_id}");
}

// ── Zeitstrahl-Ereignisse (Quelle: src/data/timeline.ts) ────────────────────
$ereignisse = array(
    array('id' => 'mythische-vorzeit', 'jahr' => -200, 'titel' => 'Mythische Vorzeit: Velanor & Balaskra', 'typ' => 'Magie',
        'beschreibung' => 'In mythischer Vorzeit ringt Velanor, der goldene Seelöwe des Lichts, mit Balaskra, der großen Schlange der Finsternis. Im „Ersten Sturm" wird Balaskra in die Tiefen der Meere verbannt – doch seine Verführung wirkt seither über Träume, Gedanken und Schwächen der Sterblichen.'),
    array('id' => 'ankunft-quiriner', 'jahr' => -80, 'titel' => 'Ankunft der Quiriner', 'typ' => 'Gründung',
        'beschreibung' => 'Nach dem Zerfall einer Piratenflotte führt Kapitän Quirin sein Volk, das sich fortan Quiriner nennt, in das Archipel. Erste Siedler nehmen Argent und Sturmkap in Besitz, und der Glaube an das Licht beginnt sich auszubreiten.'),
    array('id' => 'elfenkriege-teramar', 'jahr' => -30, 'titel' => 'Elfenkriege & Schlacht von Teramar', 'typ' => 'Krieg',
        'beschreibung' => 'Kurz vor der Zeitrechnung werden die Waldelfen in den Elfenkriegen aus dem Süden Efarims verdrängt. Die Schlachten bei Siegshain und auf dem Feld von Teramar gelten als vernichtende Niederlagen der Elfen. Waldestrutz entsteht als „Schild gegen den Wald".'),
    array('id' => 'reichsgruendung', 'jahr' => 0, 'titel' => 'Gründung des Kaiserreiches Quirin', 'typ' => 'Gründung',
        'beschreibung' => 'Tal Navalis, vom goldenen Seelöwen Velanor gesegnet, schlägt im Befreiungskrieg die Horden der Finsternis und eint das Archipel politisch zum Kaiserreich Quirin unter dem Haus Navalis. Die Quiriner Zeitrechnung „nach der Befreiung" (n.d.B.) beginnt.'),
    array('id' => 'fruehe-institutionen', 'jahr' => 20, 'titel' => 'Kriegerakademie, Lex Zwergia & Reichskirche', 'typ' => 'Gründung',
        'beschreibung' => 'In den ersten Jahrzehnten unter Kaiser Tal I. wird die Quiriner Kriegerakademie als Hausakademie des Hauses Navalis gegründet, die Lex Zwergia sichert Hammerklang eigene Gerichtsbarkeit, dem Hochwald wird Schutzgebietsstatus zugesprochen, und die Kirche des Lichts wird offizielle Reichskirche.'),
    array('id' => 'expansion-nordwest', 'jahr' => 240, 'titel' => 'Eroberung von Trident und Nebelwacht', 'typ' => 'Krieg',
        'beschreibung' => 'Kaiser Batho I., der Eroberer, sichert und gliedert das nordwestliche Archipel militärisch ein. Trident und Nebelwacht werden fest in die Reichsordnung eingebunden.'),
    array('id' => 'grosser-waldaufstand', 'jahr' => 340, 'titel' => 'Der Große Waldaufstand', 'typ' => 'Krieg',
        'beschreibung' => 'Verbündete Elfenstämme des Hochwaldes greifen mehrere Grenzfestungen und Kolonien an. Nach verlustreichen Kämpfen erzwingt die Reichsgarde neue Verträge – der Hochwald wird fortan strenger überwacht.'),
    array('id' => 'grosse-pestepidemie', 'jahr' => 370, 'titel' => 'Große Pestepidemie', 'typ' => 'Katastrophe',
        'beschreibung' => 'Eine Pestepidemie bricht in den Großstädten aus und verbreitet sich über ganz Quirin. Für seine Leistungen im Kampf gegen die Seuche wird dem Lichtpriester Johan der erste Tiberesorden verliehen.'),
    array('id' => 'handelsfahrten-aurelia', 'jahr' => 450, 'titel' => 'Erste Handelsfahrten nach Aurelia', 'typ' => 'Handel',
        'beschreibung' => 'Unter Batho II., dem Seefahrer, entstehen erste regelmäßige Kontakte und Handelsfahrten nach Aurelia und in die Söldnerstaaten des Ostkontinents. Handel, diplomatische Spannungen und Glaubensunterschiede prägen fortan die Außenpolitik.'),
    array('id' => 'magierakademie-arkapur', 'jahr' => 460, 'titel' => 'Gründung der Magierakademie Arkapur', 'typ' => 'Magie',
        'beschreibung' => 'Die Magierakademie Arkapur wird offiziell gegründet und ausgebaut und wird zum einzigen anerkannten Ausbildungsort für Magier. Ein Reichsedikt bindet alle akademischen Zauberer an Krone und Akademie.'),
    array('id' => 'drachentoeter', 'jahr' => 489, 'titel' => 'Magnus I. bezwingt den Drachen', 'typ' => 'Magie',
        'beschreibung' => 'Ein gewaltiger Drache wird durch eine Gruppe von Helden um Kaiser Magnus I., den Drachentöter, so schwer verwundet, dass er in die heutigen Glutklippen stürzt. Bis heute heißt es, er ruhe dort im Feuer gebannt.'),
    array('id' => 'reichsreform-magnus2', 'jahr' => 600, 'titel' => 'Reichsreform unter Magnus II.', 'typ' => 'Dynastisch',
        'beschreibung' => 'Nach einer schweren Thronfolgekrise und einem Bürgerkrieg geht Magnus II., der Erneuerer, als Sieger hervor. Die Provinzen der alten Kriegsfürsten werden abgeschafft, das Reich wird in Präfekturen, Dienstadel und Reichserzämter zentralisiert. Freyhafen wird als freie Handelsstadt bestätigt.'),
    array('id' => 'edikt-gleichberechtigung', 'jahr' => 612, 'titel' => 'Edikt der Gleichberechtigung', 'typ' => 'Dynastisch',
        'beschreibung' => 'Auf einer großen Reichssynode in Talborn erlässt Kaiser Magnus II. gemeinsam mit der Kirche des Lichts das Edikt der Gleichberechtigung: Vor dem Licht sind alle Seelen gleich. Formal stehen Frauen wie Männern des Reiches fortan alle Wege offen.'),
    array('id' => 'waldelfenrebellion', 'jahr' => 640, 'titel' => 'Niederschlagung der Waldelfenrebellion', 'typ' => 'Krieg',
        'beschreibung' => 'Die Anführerin der Waldelfenrebellen, Sanaria Sonnentau, wird gefangengenommen und zu lebenslanger Arbeit in den Schwarzen Minen verurteilt. Der Hochwald wandelt sich von offenem Schutzgebiet zu stark kontrolliertem Reservatsland.'),
    array('id' => 'katastrophe-arkapur', 'jahr' => 670, 'titel' => 'Katastrophe von Arkapur', 'typ' => 'Magie',
        'beschreibung' => 'Ein fehlgeschlagenes Ritual sprengt das Gebiet der Magierakademie durch eine Explosion vom Festland ab. Das folgende Seebeben verursacht eine gewaltige Flutwelle an den Küsten.'),
    array('id' => 'kloakenkriege', 'jahr' => 745, 'titel' => 'Ende der Kloakenkriege', 'typ' => 'Krieg',
        'beschreibung' => 'Nach Angriffen der Rattlinge und dem Einsturz eines Teils Talborns ertränkt der Kloakenzwerg Grimgrim den Rattlingkönig Gwiek Halbzahn. Das neue Talborn wird auf den eingestürzten Teilen der alten Stadt errichtet.'),
    array('id' => 'schwarze-garde', 'jahr' => 798, 'titel' => 'Gründung der Schwarzen Garde', 'typ' => 'Gründung',
        'beschreibung' => 'Erste Blutschatten werden im Zauberwald gesichtet, Siedler in Neuland werden überfallen und massakriert. Aufgrund der hohen Verluste im Kampf gegen die Blutschatten wird die Schwarze Garde gegründet.'),
    array('id' => 'akademie-oeffnung', 'jahr' => 800, 'titel' => 'Kriegerakademie öffnet für Nicht-Quiriner', 'typ' => 'Dynastisch',
        'beschreibung' => 'Batho III., der Große, wird zum Kaiser gekrönt. Im selben Jahr öffnet Akademieleiter Kapitän Morgen die Quiriner Kriegerakademie erstmals auch für Nicht-Quiriner – ein wichtiger Schritt hin zur Reichsidee als Exportgut.'),
    array('id' => 'orkensturm', 'jahr' => 806, 'titel' => 'Der Orkensturm', 'typ' => 'Krieg',
        'beschreibung' => 'Unter einem Großkhan aus dem Osten zieht ein großer Sturm der Mongrelorks heran. Durch Piraterie und Überfälle wird der gesamte Handel bedroht, bis Quirin in der Seeschlacht siegt – auf Kosten eines Großteils seiner Flotte.'),
    array('id' => 'neulandkonflikt', 'jahr' => 810, 'titel' => 'Roderick spaltet Roon ab', 'typ' => 'Dynastisch',
        'beschreibung' => 'Nachdem die Blutschatten aus dem Zauberwald verschwinden, erklärt sich Roderick von Neuland für unabhängig, benennt die Präfektur in Königreich Roon um und krönt sich selbst. Der Neulandkonflikt beginnt.'),
    array('id' => 'wattwallschlacht', 'jahr' => 813, 'titel' => 'Die Wattwallschlacht', 'typ' => 'Krieg',
        'beschreibung' => 'Großadmiral Corona von Quirin startet eine Invasion gegen Roon. Nach einer dreitägigen Schlacht werfen die Neuländer die Quiriner Invasionsflotte zurück ins Meer.'),
    array('id' => 'bund-der-klingen', 'jahr' => 818, 'titel' => 'Gründung des Bund der Klingen', 'typ' => 'Gründung',
        'beschreibung' => 'Mit dem kaiserlichen Privilegium Legis inter Gladii wird der Bund der Klingen gegründet. Reich und Schwertschulen werden eng verzahnt, Schwertmeistertitel und Schwertschulen stehen fortan unter Reichsaufsicht.'),
    array('id' => 'weisse-pest', 'jahr' => 820, 'titel' => 'Die Weiße Pest', 'typ' => 'Katastrophe',
        'beschreibung' => 'Eine verheerende Seuche bricht aus und rafft binnen dreier Jahre viele Menschenleben dahin, bevor sie 823 n.d.B. endet. Piraterie und Söldnertum florieren in der Instabilität dieser Jahre.'),
    array('id' => 'heute', 'jahr' => 826, 'titel' => 'Die Gegenwart – Jahr 826', 'typ' => 'Dynastisch',
        'beschreibung' => 'Quirin wirkt nach außen als starkes, reiches Kaiserreich unter Batho III., dem Großen. Im Inneren zehren jedoch die Nachwehen der Weißen Pest, Spannungen mit Roon und im Zauberwald, Hochwaldkonflikte und Adelsintrigen an der Reichsidee. Eine junge Prophetin des Lichts gilt vielen als Stimme einer kommenden geistlichen Erneuerung.'),
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

// ── FAQ (Quelle: src/pages/FAQ.tsx, fuer WooCommerce angepasst) ─────────────
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

WP_CLI::success('Regionen (8), Zeitstrahl-Ereignisse (24) und FAQ (9) befuellt.');
