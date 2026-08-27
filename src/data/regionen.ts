export interface Region {
  id: string;
  name: string;
  schlagwort: string;
  beschreibung: string;
  kultur: string[];
  besonderheiten: string;
  farbe: string;
  wappen: string;
  lore: string;
}

export const regionen: Region[] = [
  {
    id: 'talborn',
    name: 'Kronland Talborn',
    schlagwort: 'Herz des Reiches, Reichsnorm & Amtssiegel',
    beschreibung: 'Das Kronland Talborn ist der verdichtete Kern des Kaiserreichs – direkt von Kaiser und Reichsverwaltung geführt, Sitz von Kaiserhof, Kriegerakademie und Bund der Klingen. Hier wird der Maßstab aller Dinge gesetzt.',
    kultur: ['Reichsverwaltung', 'Militärische Disziplin', 'Kriegshandwerk', 'Ordnung & Norm'],
    besonderheiten: 'Heimat der Quiriner Kriegerakademie (auf dem alten Teramar-Schlachtfeld) und des Bundes der Klingen. Die Hauptstadt Talborn ist Reichshafen und größte befestigte Stadt des Reiches mit Kaiserpalast und Lichtdom. Freyhafen ist privilegierte Handelsfreistadt, Hammerklang die zwergische Minen- und Bergstadt im Gebirge.',
    farbe: '#8E7023',
    wappen: '/images/wappen-talborn.png',
    lore: 'Wer aus dem Kronland stammt, weiß genau, was das Maß aller Dinge ist. Gepflasterte Reichswege, geeichte Gewichte und Wachen an jedem Knotenpunkt zeigen: Ordnung ist hier Alltag, nicht Ideal. Die Hauptstadt Talborn erhebt sich wie eine Krone aus hellem Stein über dem Hafen – Terrassen und Mauerringe gestaffelt, schwarz-goldene Banner an Toren und Amtsgebäuden, der Lichtdom mit goldener Kuppel unterhalb des Kaiserpalastes. Drei Tagesreisen entfernt bildet die Quiriner Kriegerakademie seit der Reichsgründung die Offiziere des Reiches aus, seit fünfundzwanzig Jahren auch Nicht-Quiriner. Eine Tagesreise weiter wacht der Bund der Klingen über die Kampfkunst selbst und prüft Gesellen wie Meister. Freyhafen, kaiserlich privilegierte Freistadt und zweitgrößte Stadt Quirins, wird von einem Gildenrat regiert – ohne adligen Vogt, dafür mit Söldnern, Schmugglern und Hehlern im Schatten des Wohlstands. Im Gebirge liegt Hammerklang, die Bergstadt der Zwerge unter dem Rat der drei Hämmer, deren Lex Zwergia eigene Gerichtsbarkeit sichert und deren Mithril reichsweit als Gütesiegel gilt. Die Kampfkunst des Kronlands, „Alles ist Basis", setzt mit langem Schwert, Seitenschwert und Dolch den Reichsstandard, den alle anderen Traditionen in sich tragen. Gegenüber Elfen herrscht durch den Hochwaldkonflikt Misstrauen, gegenüber Zwergen und Halblingen Respekt.',
  },
  {
    id: 'siegeshain',
    name: 'Siegeshain',
    schlagwort: 'Rotwein, Etikette & Duellkunst',
    beschreibung: 'Siegeshain ist die südliche Präfektur der Kultiviertheit – Rotwein, Mode und unerschütterliche Fassung unter Druck. Wer hier aufwächst, lernt: Kleidung ist Sprache, Haltung ist Stärke.',
    kultur: ['Weinbaukultur', 'Etikette & Mode', 'Duellkultur', 'Composure'],
    besonderheiten: 'Burg Siegeshain thront als Verwaltungssitz über dem Land. Tiberes, Hafen-, Handels- und Universitätsstadt, vereint Schwertschulen, die Akademie der Gehobenen Künste und Märkte. Reichsweit bekannt sind der Siegeshainer Rotwein und die Goldminen der Hügelzüge.',
    farbe: '#6E8FA6',
    wappen: '/images/wappen-siegeshain.png',
    lore: 'Wer aus Siegeshain kommt, gilt als jemand, der selbst unter Druck nie die Fassung verliert und stets die neueste Mode trägt. Die Weinreben ziehen sich an den Küstenhängen entlang, der Morgennebel vom Meer kriecht flussaufwärts durch die Täler und legt sich wie ein heller Schleier auf Reben und Obstgärten. In Tiberes vereinen sich Akademien, Häfen und Märkte zu einem Bild gepflegter Eleganz: Fechtvorführungen und Duellabsprachen auf den Plätzen, Frachtlisten und Zunftpreise an den Kais. Form ist hier keine Zier, sondern Kompetenz – man grüßt korrekt, wählt Worte mit Bedacht und zeigt Gefühle nur, wenn es der Situation dient. Mode ist ein gesellschaftliches Instrument: Schnitte und Farben werden in Siegeshain „gesetzt" und andernorts kopiert. Duelle sind sozial akzeptierte Bühne, doch an Protokoll gebunden – nicht Lautstärke entscheidet, sondern Haltung. Die Kampfkunst „Der Ruhige Geist" trainiert genau das: langes Schwert, Seitenschwert und Dolch, geübt im Duellprotokoll, bis Ruhe zur Gewohnheit wird. Gefahr lauert seltener in der Wildnis als im Menschen selbst – Intrigen und Duellspiralen machen Ehre zur Waffe, begleitet von Fälschungen und Überfällen auf Wein- und Goldtransporte.',
  },
  {
    id: 'waldestrutz',
    name: 'Waldestrutz',
    schlagwort: 'Dichte Wälder, leise Wege & lange Bögen',
    beschreibung: 'Waldestrutz ist die nördliche Grenzmark Efarims – dichte Wälder, der elfische Hochwald als ständiger Nachbar und das Gesetz des langen Bogens. Hier ist zu Hause, wer wenig redet und viel sieht.',
    kultur: ['Bogenschießen', 'Waldläuferei', 'Naturnähe', 'Eigenständigkeit'],
    besonderheiten: 'Burg Waldestrutz ist Verwaltungssitz und Gericht für Holz-, Jagd- und Grenzfragen. Großwattburg an der Nordküste ist Brückenkopf nach Roon und Stützpunkt der Nordostflotte. Aus dem Hochwald sickern über stille Pfade seltene Hölzer und Textilien ins Reich.',
    farbe: '#6B9672',
    wappen: '/images/wappen-waldestrutz.png',
    lore: 'Wer aus Waldestrutz kommt, gilt als jemand, der wenig redet, klare Grenzen kennt und immer einen Weg findet, wo andere nur Wald sehen. Dichte Wälder überziehen Hügelketten und Senken, aus dem Hochwald speisen klare Bäche die Täler, und wer vom markierten Pfad tritt, verliert schnell Richtung und Zeit. Die Menschen hier sind bodenständig und zurückhaltend – Gastfreundschaft ist schlicht, Prahlerei selten, aber Absprachen werden erinnert. Der Alltag ist Forst und Jagd, Wegepflege, Grenzdienst und Handwerk: Holz wird geschlagen, Harz gesiedet, Fleisch geräuchert. Aus dieser Lebensweise ist die Kampfkunst „Hinter den Blättern" hervorgegangen, mit dem Leitgedanken „Triff und Verschwinde" – der Bogen eröffnet, das lange Messer beendet, der Dolch dient engsten Distanzen. Gefährlich ist vor allem die Reibung an der Grenze: Illegale Rodungen, Wilderei und Schwarzhandel treiben Vergeltungsspiralen mit den Waldelfen an, während in den tiefen Beständen Waldgeister als Irrlichter und Stimmen im Unterholz umgehen. Reichsweit steht Waldestrutz für langsam gewachsenes Kernholz, begehrt für Bogenbau, dazu Harz, Pech und dunklen Harzhonig.',
  },
  {
    id: 'roon',
    name: 'Roon',
    schlagwort: 'Frontland, Portwein & eiserner Wille',
    beschreibung: 'Roon ist eine große Insel im Nordosten und die jüngste Präfektur des Reiches – lebendige Küstenorte, dahinter das stille Frontland zur Waldkante, wo die Schwarze Garde gegen die Blutschatten kämpft.',
    kultur: ['Maritim', 'Militärisch', 'Pragmatisch', 'Grenzbewusstsein'],
    besonderheiten: 'Schwarzburg ist Verwaltungssitz und Grenzpunkt der Insel – Tor zur Küste im Westen, Tor zur Front im Osten. An der Waldkante hält die Schwarze Garde eine Linie aus Wällen, Gräben und Türmen gegen den Zauberwald.',
    farbe: '#5C7A8A',
    wappen: '/images/wappen-roon.png',
    lore: 'Wer aus Roon kommt, gilt als jemand, der standhält, wenn andere weichen, und im entscheidenden Moment handelt, ohne zu zögern. Erst seit wenigen Jahrzehnten besiedelt, trägt die Insel noch die Narben der Wattwallschlacht – Untiefen und schwarze Wrackreste vor der Westküste. Die Küstenorte sind jung, geschäftig und meist aus Holz gebaut, doch je weiter man ins Landesinnere kommt, desto stiller und kontrollierter wird es, bis der Zauberwald beginnt: ein von der Finsternis berührter Forst, der als offene Drohung über dem Land liegt. Die Menschen Roons zeichnen ein ausgeprägter Stolz und ein starkes Wir-Gefühl aus – sie haben die Insel mit eigenen Händen aufgebaut und eine Invasion abgewehrt. Aus dieser Haltung wuchs die Kampfkunst „Ein Hau" mit dem Leitsatz „Entscheide mit einem Hieb", getragen von langem Schwert und Seitenschwert. Die größte Bedrohung bleibt der Zauberwald: Nachts kommen Blutschatten-Stämme, die den Wald als heiliges Jagdgebiet betrachten, verschleppen Siedler und opfern sie in blutigen Ritualen. Reichsweit bekannt ist Roon für Portwein aus kühlen Felskellern, für Erz, Gold und seltenes, extrem hartes Holz von der Waldkante.',
  },
  {
    id: 'trident',
    name: 'Trident',
    schlagwort: 'Wasser, Glas & Kunst',
    beschreibung: 'Trident liegt im Nordwesten Quirins – ein Gürtel aus Inselkernen, Riffen und Kanälen, der wie ein Dreizack ins Meer greift. Hier entstehen die feinsten Glaswaren und Kunstwerke des Reiches.',
    kultur: ['Glaskunst', 'Handwerk', 'Handel', 'Ästhetik'],
    besonderheiten: 'Stadt Trident ist Verwaltungssitz und Herz des Glas- und Lichthandwerks, mit der berühmten Kunstakademie für Malerei, Bildhauerei und Glasgestaltung. Beranshafen im Süden ist Stützpunkt der Nordwestflotte.',
    farbe: '#4A8AA0',
    wappen: '/images/wappen-trident.png',
    lore: 'Wer aus Trident kommt, gilt als innovativ und als jemand, für den Funktionalität und Schönheit kein Widerspruch sind. Kanäle, Stege und Pfahlbauten prägen den Norden – Wasserstraßen laufen wie Gassen zwischen den Häusern, und am Abend wirken die Kanäle wie flüssiges Glas, weil jede Laterne sich doppelt im Wasser spiegelt. In den Werkstätten der Glasmeister entstehen Mosaike, Leuchten und Spiegeltafeln, und Tridenter Linsen gelten als verlässlich auf See. Die Menschen Tridents sind Schöngeister mit praktischem Blick: neugierig, vorwärtsgewandt, stets auf der Suche nach der klareren Lösung, denn Ästhetik gilt hier als Form von Ordnung. Ihre Kampfkunst „Immer im Fluss" trainiert fließende Übergänge mit Seitenschwert oder langem Messer und Dolch – Spiegel dienen dabei als Hilfsmittel, um die Zentrallinie zu prüfen. Gefahren entstehen aus Küste und Wildnis zugleich: Riffe und Strömungen machen Fehler teuer, in warmen Nächten soll der Gesang von Sirenen über stilles Wasser tragen, und in den Kanälen wühlen Rattlinge. Reichsweit steht Trident für Glas und Spiegel, Linsen und Leuchten, Mosaike und feines Kunsthandwerk.',
  },
  {
    id: 'nebelwacht',
    name: 'Nebelwacht',
    schlagwort: 'Leuchtfeuer, Salz & dunkle Tiefen',
    beschreibung: 'Nebelwacht ist die äußerste Westpräfektur und flankiert den Seezugang nach Efarim – zerklüftete Küsten unter grauem Schleier, heiße Quellen und ein Höhlenlabyrinth voller dunkler Tiefen.',
    kultur: ['Mystik', 'Seefahrt', 'Isolation', 'Tradition'],
    besonderheiten: 'Der Tempelleuchtturm der Hauptstadt Nebelwacht ist zugleich Heiligtum, Signal und Zuflucht über den Salzklippen. In den Höhlentiefen wacht eine Bannkapelle des Lichts gegen die Finsternis, während Magier aus Arkapur die Strömungen des Schleiers beobachten.',
    farbe: '#4A6070',
    wappen: '/images/wappen-nebelwacht.png',
    lore: 'Wer aus Nebelwacht kommt, gilt als jemand, der auch ohne mit den Augen zu sehen sicher seinen Weg findet. Kalte Strömungen treffen hier auf heiße Quellen, Dampf steigt aus Spalten, und Gischt und Nebel nehmen die Sicht und verschlucken Geräusche. Unter den steil ins Meer brechenden Klippen beginnt ein Höhlen- und Stollenlabyrinth, das nur bei Ebbe oder über riskante Pfade erreichbar ist. Die Menschen hier gelten als misstrauisch, ihr Humor ist schwarz und trocken – nicht aus Grausamkeit, sondern als Schutz gegen das, was man nachts im Nebel zu sehen glaubt. Aus dieser Landschaft ist eine Kampfkultur entstanden, die nicht auf Sicht vertraut, sondern auf Kontakt: „Führung durch Fühlen", mit Seitenschwert oder langem Messer und Dolch, trainiert im Blindgang über die Bindung. In den Tiefen der Höhlen liegt eine Bannkapelle des Lichts, deren ewige Flammen als Bollwerk gegen die Finsternis dienen, denn dort treiben ertrunkene Leichenfresser und Geisterstimmen umher. Reichsweit steht Nebelwacht für Schleierware – alchimistische Kräuter, Harze, Tinkturen und Bannpulver, dazu Räucherfisch und schwarzes Klippensalz.',
  },
  {
    id: 'argent',
    name: 'Argent',
    schlagwort: 'Silber, Musik & Glockenklang',
    beschreibung: 'Argent ist eine südwestliche Inselpräfektur, geformt von Gestein und Sonne – Silberminen im rauen Norden, Oliven- und Weingärten im sanften Süden, und über allem der Klang der Glocken.',
    kultur: ['Musik', 'Handwerk', 'Präzision', 'Festkultur'],
    besonderheiten: 'Stadt Argent im Norden ist Festung und Werk zugleich – ihr großer Tempel mit offener Glockenhalle prägt den Glockenguss als Kunstform. Sita im Süden ist geschäftiger Handelshafen voller Musik.',
    farbe: '#A0A0B0',
    wappen: '/images/wappen-argent.png',
    lore: 'Wer aus Argent kommt, gilt als jemand, der alles ganz genau nimmt. Der Silberrücken, ein trockener Höhenzug, trennt die kargen, minenreichen Nordhänge von den weichen Landschaften im Süden mit Olivenbäumen, Zitrusplantagen und Weingärten – und selbst die Nächte tragen den fernen Nachhall von Glocken. In Stadt Argent ist Glockenguss nicht bloß Handwerk, sondern Kunst: Metall, Form und Nachklang werden geprüft, bis der Ton vollkommen sitzt. Die Menschen gelten als hochpräzise und penibel, stolz auf saubere Arbeit – doch trotz aller Selbstdisziplin kennt die Insel Freude, wenn Feste musikalisch, farbig und voller Gesang gefeiert werden. Die Kampfkunstphilosophie „Innere Stille" mit dem Lehrsatz „Keine Unruhe" schult mit Seitenschwert, langem Messer und Dolch die Körperbeherrschung bis in die kleinste Bewegung. Gefahr droht aus Tiefe, Küste und Gier: Trolle und Goblinbanden in den Minen, Sirenen auf See, vor allem aber Hehlerketten und organisiertes Verbrechen, das auf Silber und Schmuck zielt. Reichsweit steht Argent für Silber, insbesondere Klangsilber, für Glocken, Instrumente und Zitrusfrüchte.',
  },
  {
    id: 'sturmkap',
    name: 'Sturmkap',
    schlagwort: 'Wölfe, Wind & Wellen',
    beschreibung: 'Sturmkap liegt im Südwesten Quirins – ein Land aus Kaps und Klippen, windgezeichneten Küsten und blau-weißen Mosaiken, in dem der Wind selten stillsteht.',
    kultur: ['Seefahrt', 'Ausdauer', 'Handwerk', 'Rauheit'],
    besonderheiten: 'Burg Sturmkap, halb in den Fels gehauen, ist das Herz der Präfektur; darunter liegt der Hauptstützpunkt der Südwestflotte. Rundum klammern sich Kapsiedlungen und Fischorte an Buchten und Steinriegel.',
    farbe: '#8A7A6A',
    wappen: '/images/wappen-sturmkap.png',
    lore: 'Wer aus Sturmkap kommt, gilt als jemand, der einfach alles aushält. Der Wind fährt hier über nackten Stein, zerrt an Segeln und drückt Schiffe gegen den Felsen – Dächer werden mit Steinen beschwert, und Wege folgen dem Boden, nicht dem Wunsch. Die Menschen gelten als robust, pflichtbewusst und wortkarg, doch hinter der Härte liegt Herzlichkeit: Wer friert oder Hunger leidet, wird aufgenommen, auch wenn es den Gastgebern selbst an Brot fehlt. Klart das Wetter auf, feiert man ausgelassene Tanzfeste mit Liedern und Branntwein. Aus dieser Haltung ist die Kampfkultur des „Brandungsfels" gewachsen, deren Leitgedanke „Halte Stand" lautet – trainiert wird auf Klippen und in der Brandungszone, unter Wellendruck und mit schwereren Übungswaffen, damit Technik auch unter Erschöpfung sitzt. Gefahr entsteht zuerst aus der Natur: Brandung, Klippen und plötzliche Stürme bestrafen jeden Fehler, an den Küsten streifen Küstenwölfe, auf den Klippen sitzen Sturmkrähen, und vereinzelt zeigt sich sogar ein Wyvern. Reichsweit steht Sturmkap für robuste Schleifsteine, Sturmkraut-Öl und würzigen Schafs- und Ziegenkäse.',
  },
];

export function getRegionById(id: string): Region | undefined {
  return regionen.find(r => r.id === id);
}
