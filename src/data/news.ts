export interface NewsItem {
  id: string;
  datum: string;
  titel: string;
  text: string;
  kategorie: 'Ankündigung' | 'Spielleitung' | 'Event' | 'Regelwerk';
}

export const news: NewsItem[] = [
  {
    id: 'sl-ankuendigung-sommer',
    datum: '2026-05-10',
    titel: 'Sommerfest 2026 – Anmeldungen offen',
    text: 'Die Spielleitung freut sich, die Anmeldungen für das Große Sommerfest zu eröffnen. Plätze sind begrenzt – sichert euch euren Platz jetzt.',
    kategorie: 'Event',
  },
  {
    id: 'regelwerk-update-30',
    datum: '2026-04-15',
    titel: 'Quirinspiel 3.0 – Regelwerk aktualisiert',
    text: 'Das aktualisierte Hauptdokument (Version 3.0) steht ab sofort zum Download bereit. Bitte lest die Änderungen vor dem nächsten Event durch.',
    kategorie: 'Regelwerk',
  },
  {
    id: 'neue-region-beschreibungen',
    datum: '2026-03-22',
    titel: 'Regionenbeschreibungen 3.0 veröffentlicht',
    text: 'Die neuen Regionenbeschreibungen für alle 8 Präfekturen sind verfügbar. Viel Spaß beim Eintauchen in die Spielwelt!',
    kategorie: 'Spielleitung',
  },
];
