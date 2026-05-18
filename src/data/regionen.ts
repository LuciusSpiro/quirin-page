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
    schlagwort: 'Herz des Reiches',
    beschreibung: 'Das Kronland Talborn ist der Herzschlag des Kaiserreichs – Sitz des Kaisers, der Kriegerakademie und der imperialen Ordnung. Hier wird der Maßstab aller Dinge gesetzt.',
    kultur: ['Militärische Disziplin', 'Imperiale Hierarchie', 'Kriegshandwerk', 'Präzisionsarbeit'],
    besonderheiten: 'Heimat der Quiriner Kriegerakademie und des Kaiserpalastes Navalis. Die Stadt Talborn mit ihren Terrassen, Glockentürmen und Festungsanlagen ist das Fundament des Reiches.',
    farbe: '#8E7023',
    wappen: '/images/wappen-talborn.png',
    lore: 'Wer aus dem Kronland kommt, weiß genau, was das Maß aller Dinge ist. Disziplin und Ordnung sind nicht Tugend, sondern Grundlage – die Seele des Reiches trägt das Herz des Soldaten. Talborn, die Hauptstadt, erhebt sich über sanfte Felder und schiffbare Flüsse: Terrassenwälle, Glockentürme, Bollwerke und zeremonielle Plätze prägen das Bild. Im Hafen liegen Handelsschiffe neben der Kriegsflotte. Die Kriegerakademie bildet seit Generationen die Elite des Reiches aus. Freyhafen, die zweitgrößte Stadt, ist ein privilegierter Handelsknotenpunkt – selbstverwaltende Kaufmannsgilden tauschen Waren mit der weiten Welt. In den Vororten und Garnisonen spürt man die imperialen Wehrbereiche: Vier Militärdistrikten mit großen Garnisonskräften schützen das Reich nach innen und außen. Jenseits der gesicherten Gebiete lauern Goblins, Trolle, Verderbtheit und Räuber. Das Reich exportiert Erze, Waffen, Präzisionsarbeit und edles Mithril.',
  },
  {
    id: 'siegeshain',
    name: 'Siegeshain',
    schlagwort: 'Wein, Etikette & Duelle',
    beschreibung: 'Siegeshain ist die Präfektur der Kultiviertheit – Wein, Mode und unerschütterliche Fassung unter Druck. Wer hier aufwächst, lernt: Kleidung ist Sprache, Schweigen ist Stärke.',
    kultur: ['Weinbaukultur', 'Etikette & Mode', 'Duellkultur', 'Composure'],
    besonderheiten: 'Die Küstenregion liegt im Morgennebel vom Meer. Tiberes, die Hauptstadt, vereint Akademien, Häfen und Märkte. Das Wahrzeichen Siegeshains ist die "Stille Würde" – wer Kontrolle verliert, hat schon entschieden.',
    farbe: '#6E8FA6',
    wappen: '/images/wappen-siegeshain.png',
    lore: 'Wer aus Siegeshain kommt, ist bekannt als jemand, der selbst unter Druck nie die Fassung verliert und stets die neueste Mode trägt. Die Weinreben ziehen sich an den Küstenhängen entlang, der Morgennebel vom Meer kriecht durch die Täler. In Tiberes vereinen sich Akademien, Häfen und Märkte zu einem Bild gepflegter Eleganz. Kleidung ist hier Sprache – jede Wahl ein Statement. Die Duellkultur Siegeshains ist berühmt: Man kämpft mit Präzision, nicht mit Lärm. "Der Stille Geist lehrt: Wer unter Druck die Kontrolle verliert, hat bereits entschieden." So lautet das Sprichwort, das Generationen von Siegeshainern geprägt hat.',
  },
  {
    id: 'waldestrutz',
    name: 'Waldestrutz',
    schlagwort: 'Wälder, Wildnis & Langbögen',
    beschreibung: 'Dichte Wälder, abgelegene Pfade und das Gesetz des langen Bogens – Waldestrutz ist das Reich derer, die zwischen den Bäumen zu Hause sind.',
    kultur: ['Bogenschießen', 'Waldläuferei', 'Naturnähe', 'Eigenständigkeit'],
    besonderheiten: 'Weitgehend unerschlossenes Waldgebiet mit verstreuten Siedlungen. Die Waldestrutz-Bogenschützen gelten als die treffsichersten im Reich.',
    farbe: '#6B9672',
    wappen: '/images/wappen-waldestrutz.png',
    lore: 'Wer aus Waldestrutz kommt, versteht die Sprache des Waldes besser als die der Städte. Hier zählen Ausdauer, Geduld und ein gutes Auge mehr als Rang und Titel. Die dichten Forste bieten Schutz und Nahrung, aber auch Gefahr – Trolle und schlimmere Dinge lauern in den Tiefen. Die Bogenschützen von Waldestrutz sind legendär: Man sagt, ein guter Waldläufer trifft eine Münze auf hundert Schritt. Die Gemeinschaften sind klein, eng verbunden und argwöhnisch gegenüber Fremden – aber treu wie Eichenholz gegenüber denen, denen sie vertrauen.',
  },
  {
    id: 'roon',
    name: 'Roon',
    schlagwort: 'Häfen, Grenzen & Soldatentum',
    beschreibung: 'Roon ist das Grenzland des Reiches – raue Hafenstädte, harte Männer und Frauen, und ein Wille aus Stahl, der die Grenze hält.',
    kultur: ['Maritim', 'Militärisch', 'Pragmatisch', 'Grenzbewusstsein'],
    besonderheiten: 'Wichtiger Handels- und Militärhafen. Roon-Söldner sind im ganzen Reich für ihre Verlässlichkeit bekannt.',
    farbe: '#5C7A8A',
    wappen: '/images/wappen-roon.png',
    lore: 'Wer aus Roon kommt, hat gelernt, dass das Meer kein Versprechen kennt – nur den Wind und die Gezeiten. Die Hafenstädte Roons sind laut, lebendig und gefährlich. Händler und Piraten sind hier oft dasselbe, und die Grenzgarnisonen halten mit harter Hand, was das Reich beansprucht. Roon-Soldaten gelten als die zuverlässigsten Söldner im Reich – nicht die elegantesten, aber die, die durchhalten.',
  },
  {
    id: 'trident',
    name: 'Trident',
    schlagwort: 'Wasser, Glas & Kunst',
    beschreibung: 'Trident liegt an einem Netz von Flüssen und Kanälen. Hier entstehen die schönsten Glaswaren und Kunstwerke des Reiches.',
    kultur: ['Glaskunst', 'Handwerk', 'Handel', 'Ästhetik'],
    besonderheiten: 'Die Glasmeister von Trident sind legendär. Ihre Werke schmücken die Paläste des Reiches und werden bis ans Ende der Welt gehandelt.',
    farbe: '#4A8AA0',
    wappen: '/images/wappen-trident.jpeg',
    lore: 'Wer aus Trident kommt, sieht die Welt durch das Prisma der Schönheit. Die Kanäle spiegeln die Himmel, und in den Werkstätten der Glasmeister entsteht das Licht selbst in Farben. Trident ist Handelszentrum und Kunstmetropole in einem – die Reichen des Reiches wetteifern um die kostbarsten Stücke, und die Händler kennen den Wert jeder Ware bis auf den letzten Kupferpfennig.',
  },
  {
    id: 'nebelwacht',
    name: 'Nebelwacht',
    schlagwort: 'Leuchtturmfeuer, Salz & Tiefen',
    beschreibung: 'Die nördlichste Präfektur liegt im ewigen Nebel. Leuchtturm-Wächter, Salzhändler und solche, die das Meer fürchten und lieben, nennen es Heimat.',
    kultur: ['Mystik', 'Seefahrt', 'Isolation', 'Tradition'],
    besonderheiten: 'Nebelwacht ist bekannt für sein Salz, seine Leuchtturmketten und die Gerüchte über Dinge, die in den Tiefen des Meeres hausen.',
    farbe: '#4A6070',
    wappen: '/images/wappen-nebelwacht.jpeg',
    lore: 'Wer aus Nebelwacht kommt, spricht wenig und weiß viel. Der Nebel ist hier keine Einschränkung – er ist ein alter Freund. Die Leuchtturm-Wächter kennen jeden Fels, jede Strömung, jeden tückischen Gezeiten-Wirbel. Das Salz der Nebelwacht ist das beste im Reich, und die Geschichten, die die Fischer erzählen, werden anderswo als Märchen abgetan – hier gelten sie als Warnung.',
  },
  {
    id: 'argent',
    name: 'Argent',
    schlagwort: 'Silber, Musik & Glocken',
    beschreibung: 'Argent ist das kulturelle Herz des Reiches – Silberminen, Musikakademien und der Klang von Glocken, der durch die Täler hallt.',
    kultur: ['Musik', 'Handwerk', 'Religiosität', 'Bildung'],
    besonderheiten: 'Die Glockentürme Argents sind im ganzen Reich zu hören. Die Silberakademie bildet Musiker und Gelehrte aus.',
    farbe: '#A0A0B0',
    wappen: '/images/wappen-argent.png',
    lore: 'Wer aus Argent kommt, trägt die Musik in sich. Die Silberminen liefern das Metall für die feinsten Instrumente, und die Akademien lehren Töne, die Götter und Menschen berühren. Die Glocken Argents haben eine besondere Qualität – sie sollen Böses fernhalten und Gutes herbeirufen. So sagen die Alten.',
  },
  {
    id: 'sturmkap',
    name: 'Sturmkap',
    schlagwort: 'Wölfe, Wind & Seile',
    beschreibung: 'Die raue Nordspitze des Reiches – ewige Stürme, Wolfsjäger und Männer, die an Seilen leben oder sterben.',
    kultur: ['Kletterei', 'Jagd', 'Ausdauer', 'Rauheit'],
    besonderheiten: 'Sturmkap liefert die besten Kletterer und Seiler des Reiches. Die Wolfsjagd ist hier Tradition und Notwendigkeit zugleich.',
    farbe: '#8A7A6A',
    wappen: '/images/wappen-sturmkap.png',
    lore: 'Wer aus Sturmkap kommt, lächelt über Klagen über schlechtes Wetter. Was anderswo als Sturm gilt, ist hier ein milder Frühlingswind. Die Klippen, die Wölfe, die Seile – das ist das Leben. Sturmkap-Männer und -Frauen sind in der ganzen Welt als die zuverlässigsten Kletterführer bekannt, und ihre Seile gelten als die stärksten, die es gibt.',
  },
];

export function getRegionById(id: string): Region | undefined {
  return regionen.find(r => r.id === id);
}
