export type EreignisTyp = 'Krieg' | 'Dynastisch' | 'Katastrophe' | 'Gründung' | 'Magie' | 'Handel';

export interface Ereignis {
  id: string;
  jahr: number; // positiv = nach Reichsgründung, negativ = davor (v.d.B.)
  titel: string;
  beschreibung: string;
  typ: EreignisTyp;
}

export const ereignisse: Ereignis[] = [
  {
    id: 'chaos-herden',
    jahr: -330,
    titel: 'Zeitalter der Chaos-Herden',
    beschreibung: 'Vor der Reichsgründung herrschten die Chaos-Herden über das Land. Wilde Magie und Dunkelheit bedrohten alle Lebewesen.',
    typ: 'Katastrophe',
  },
  {
    id: 'reichsgruendung',
    jahr: 0,
    titel: 'Gründung des Kaiserreiches Quirin',
    beschreibung: 'Im Jahr 0 wird das Kaiserreich Quirin aus den Chaos-Herden befreit. Kaiser Quirin der Erste vereint die Stämme unter einem Banner und legt den Grundstein des Reiches.',
    typ: 'Gründung',
  },
  {
    id: 'kriegerakademie',
    jahr: 47,
    titel: 'Gründung der Kriegerakademie',
    beschreibung: 'Als magische Institutionen die Gesellschaft zu dominieren beginnen, gründen die Krieger als Gegenbewegung die Quiriner Kriegerakademie – eine exklusive Institution der Kriegerphilosophie.',
    typ: 'Gründung',
  },
  {
    id: 'bund-der-klingen',
    jahr: 112,
    titel: 'Gründung des Bund der Klingen',
    beschreibung: 'Der Bund der Klingen entsteht als Bruderschaft der besten Krieger des Reiches. Sie hüten die Kampfkünste und stellen sich in den Dienst des Kaisers.',
    typ: 'Gründung',
  },
  {
    id: 'erste-grosse-expansion',
    jahr: 180,
    titel: 'Erste Große Expansion',
    beschreibung: 'Das Kaiserreich expandiert unter Kaiser Aldric II. nach Westen und Norden. Die Präfekturen Roon und Sturmkap werden dem Reich eingegliedert.',
    typ: 'Krieg',
  },
  {
    id: 'weisse-pest',
    jahr: 634,
    titel: 'Die Weiße Pest',
    beschreibung: 'Eine mysteriöse Seuche bricht aus dem Nebel auf und rafft ein Drittel der Bevölkerung hin. Piraterie und Söldnertum florieren in der Instabilität.',
    typ: 'Katastrophe',
  },
  {
    id: 'hochwald-spannungen',
    jahr: 701,
    titel: 'Hochwald-Spannungen',
    beschreibung: 'Die Elfen des Hochwalls und das Kaiserreich geraten in Konflikt über die Grenzen der imperialen Expansion in die alten Wälder.',
    typ: 'Krieg',
  },
  {
    id: 'dunkle-kulte',
    jahr: 820,
    titel: 'Zeit der Dunklen Kulte',
    beschreibung: 'Im Schatten des Adels und der Kirche breiten sich dunkle Kulte aus. Adelsintrigen und magische Experimente bedrohen die Stabilität des Reiches.',
    typ: 'Magie',
  },
  {
    id: 'freyhafener-charta',
    jahr: 950,
    titel: 'Freyhafener Handelscharta',
    beschreibung: 'Freyhafen erhält durch kaiserliches Dekret das Privileg der Selbstverwaltung seiner Kaufmannsgilden. Eine neue Ära des Handels beginnt.',
    typ: 'Handel',
  },
  {
    id: 'heute',
    jahr: 1200,
    titel: 'Die Gegenwart – Quirin 3.0',
    beschreibung: 'Das Kaiserreich steht vor neuen Herausforderungen. Adelsintrigen, Magie-Spannungen und äußere Bedrohungen fordern Krieger und Edle gleichermaßen. Eine neue Generation schreibt die Geschichte.',
    typ: 'Dynastisch',
  },
];

export const typFarben: Record<EreignisTyp, string> = {
  Krieg:      '#B85C5C',
  Dynastisch: '#D4AF37',
  Katastrophe:'#C9A24B',
  Gründung:   '#6B9672',
  Magie:      '#8B78B8',
  Handel:     '#6E8FA6',
};
