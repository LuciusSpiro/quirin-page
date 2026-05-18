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
  kategorie: 'Kriegerspiel' | 'Adelsspiel' | 'Gemeinschaft' | 'Sonstiges';
  stripeProductId?: string;
}

export const events: Event[] = [
  {
    id: 'sommerfest-2026',
    titel: 'Großes Sommerfest des Reiches',
    datum: '2026-07-18',
    datumEnde: '2026-07-20',
    ort: 'Festungsgelände Talborn',
    beschreibung: 'Das jährliche Sommerfest vereint alle Stände des Reiches zu drei Tagen Spiel, Turnier und Festbankett. Krieger messen ihre Kräfte, Adlige pflegen ihre Allianzen und Händler schließen Geschäfte.',
    preis: 45,
    plaetze: 80,
    plaetzeFrei: 32,
    kategorie: 'Gemeinschaft',
  },
  {
    id: 'turnier-bund-der-klingen-2026',
    titel: 'Turnier des Bund der Klingen',
    datum: '2026-08-29',
    ort: 'Quiriner Kriegerakademie',
    beschreibung: 'Das alljährliche Turnier des Bund der Klingen. Kämpfer aller Schulen messen sich in Einzel- und Gruppenkämpfen. Sieger erhalten Ehre, Titel und Preise.',
    preis: 20,
    plaetze: 40,
    plaetzeFrei: 15,
    kategorie: 'Kriegerspiel',
  },
  {
    id: 'hofball-herbst-2026',
    titel: 'Herbstlicher Hofball der Fürstentümer',
    datum: '2026-10-10',
    ort: 'Palast Navalis, Talborn',
    beschreibung: 'Ein Abend der Diplomatie und des Intrigenspiels. Die Adelshäuser des Reiches treffen sich zum großen Herbstball – ein Ort, an dem Allianzen geschmiedet und Verrat geflüstert wird.',
    preis: 35,
    plaetze: 50,
    plaetzeFrei: 28,
    kategorie: 'Adelsspiel',
  },
  {
    id: 'einstieg-november-2026',
    titel: 'Einstiegsevent für Neulinge',
    datum: '2026-11-07',
    ort: 'Freyhafen',
    beschreibung: 'Speziell für neue Spieler: Ein Samstag voller Einführungen in Regeln, Kampftechnik und Spielwelt. Erfahrene Spieler begleiten die Neulinge. Perfekter Einstieg ins Kaiserreich Quirin.',
    preis: 10,
    plaetze: 20,
    plaetzeFrei: 14,
    kategorie: 'Sonstiges',
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
