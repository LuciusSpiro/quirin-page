export interface Staffel {
  name: string;
  preis: number;
}

export interface Event {
  id: string;
  titel: string;
  datum: string;
  datumEnde?: string;
  ort: string;
  beschreibung: string;
  preis: number;
  plaetze: number;
  plaetzeFrei: number;
  kategorie: 'Kriegerspiel' | 'Adelsspiel' | 'Gemeinschaft' | 'Sonstiges' | 'Akademie';
  stripeProductId?: string;
  /** Gestaffelte Frühbucherpreise (z.B. Akademie-Lehrgänge). Wenn gesetzt, ist `preis` der günstigste Tarif. */
  staffeln?: Staffel[];
}

export const events: Event[] = [
  {
    id: 'akademie-krieger-2027',
    titel: 'Kriegerakademie: Ausbildung Krieger',
    datum: '2027-05-05',
    datumEnde: '2027-05-09',
    ort: '97239 Aub',
    beschreibung: 'Der Grundlehrgang der Akademie widmet sich der Kampf- und Kriegskunst: Formal- und Gefechtsdienst, Erste Hilfe auf dem Schlachtfeld und die Fechtschule des Einhandschwerts. Schwerpunkt ist der Gruppenkampf – das Fundament jeder militärischen Ausbildung.',
    preis: 100,
    plaetze: 50,
    plaetzeFrei: 50,
    kategorie: 'Akademie',
    staffeln: [
      { name: 'Erste Staffel', preis: 100 },
      { name: 'Zweite Staffel', preis: 110 },
      { name: 'Dritte Staffel', preis: 120 },
    ],
  },
  {
    id: 'akademie-spaeher-2027',
    titel: 'Kriegerakademie: Ausbildung Späher',
    datum: '2027-05-05',
    datumEnde: '2027-05-09',
    ort: '97239 Aub',
    beschreibung: 'Ausbildung für Kundschafter, Saboteure und Attentäter: Spurenlesen, lautlose Handzeichen, Geländeorientierung sowie das Lesen und Zeichnen von Karten. Höhepunkt ist der berüchtigte Fallenparkour.',
    preis: 100,
    plaetze: 20,
    plaetzeFrei: 20,
    kategorie: 'Akademie',
    staffeln: [
      { name: 'Erste Staffel', preis: 100 },
      { name: 'Zweite Staffel', preis: 110 },
      { name: 'Dritte Staffel', preis: 120 },
    ],
  },
  {
    id: 'akademie-offizier-2027',
    titel: 'Kriegerakademie: Ausbildung Offizier',
    datum: '2027-05-05',
    datumEnde: '2027-05-09',
    ort: '97239 Aub',
    beschreibung: 'Der Aufbaulehrgang für angehende Heerführer: Strategie, Menschenführung und das Führen im Gefecht unter schwierigen Bedingungen. Ein erfolgreicher Abschluss als Krieger oder Späher wird vorausgesetzt – bitte vor der Anmeldung Kontakt mit der Spielleitung aufnehmen.',
    preis: 100,
    plaetze: 9,
    plaetzeFrei: 9,
    kategorie: 'Akademie',
    staffeln: [
      { name: 'Erste Staffel', preis: 100 },
      { name: 'Zweite Staffel', preis: 110 },
      { name: 'Dritte Staffel', preis: 120 },
    ],
  },
  {
    id: 'akademie-feldscher-2027',
    titel: 'Kriegerakademie: Ausbildung Feldscher',
    datum: '2027-05-05',
    datumEnde: '2027-05-09',
    ort: '97239 Aub',
    beschreibung: 'Der Kampfheiler-Lehrgang verbindet die Grundlagen des Kriegers mit denen des Heilers: Erste Hilfe und taktische Verwundetenversorgung mitten im Gefecht, als Teil einer Krieger- oder Spähergruppe.',
    preis: 100,
    plaetze: 15,
    plaetzeFrei: 15,
    kategorie: 'Akademie',
    staffeln: [
      { name: 'Erste Staffel', preis: 100 },
      { name: 'Zweite Staffel', preis: 110 },
      { name: 'Dritte Staffel', preis: 120 },
    ],
  },
  {
    id: 'akademie-tross-2027',
    titel: 'Kriegerakademie: Ausbildung Tross',
    datum: '2027-05-05',
    datumEnde: '2027-05-09',
    ort: '97239 Aub',
    beschreibung: 'Kein durchgetakteter Lehrgang, sondern das Rückgrat des Lagers: Feldküche, Schmiede, Mannschaftsheim und Belagerungswaffen. Optionale Prüfung für das Quiriner Tross-Abzeichen für alle, die das Lagerleben bereichern möchten.',
    preis: 90,
    plaetze: 25,
    plaetzeFrei: 25,
    kategorie: 'Akademie',
    staffeln: [
      { name: 'Erste Staffel', preis: 90 },
      { name: 'Zweite Staffel', preis: 100 },
      { name: 'Dritte Staffel', preis: 110 },
    ],
  },
];

export function formatDatum(datum: string, datumEnde?: string): string {
  const d = new Date(datum);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  if (!datumEnde) return d.toLocaleDateString('de-DE', opts);
  const de = new Date(datumEnde);
  const startStr = d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
  const endStr = de.toLocaleDateString('de-DE', opts);
  return `${startStr} – ${endStr}`;
}
