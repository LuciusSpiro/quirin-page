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
    id: 'mythische-vorzeit',
    jahr: -200,
    titel: 'Mythische Vorzeit: Velanor & Balaskra',
    beschreibung: 'In mythischer Vorzeit ringt Velanor, der goldene Seelöwe des Lichts, mit Balaskra, der großen Schlange der Finsternis. Im „Ersten Sturm" wird Balaskra in die Tiefen der Meere verbannt – doch seine Verführung wirkt seither über Träume, Gedanken und Schwächen der Sterblichen.',
    typ: 'Magie',
  },
  {
    id: 'ankunft-quiriner',
    jahr: -80,
    titel: 'Ankunft der Quiriner',
    beschreibung: 'Nach dem Zerfall einer Piratenflotte führt Kapitän Quirin sein Volk, das sich fortan Quiriner nennt, in das Archipel. Erste Siedler nehmen Argent und Sturmkap in Besitz, und der Glaube an das Licht beginnt sich auszubreiten.',
    typ: 'Gründung',
  },
  {
    id: 'elfenkriege-teramar',
    jahr: -30,
    titel: 'Elfenkriege & Schlacht von Teramar',
    beschreibung: 'Kurz vor der Zeitrechnung werden die Waldelfen in den Elfenkriegen aus dem Süden Efarims verdrängt. Die Schlachten bei Siegshain und auf dem Feld von Teramar gelten als vernichtende Niederlagen der Elfen. Waldestrutz entsteht als „Schild gegen den Wald".',
    typ: 'Krieg',
  },
  {
    id: 'reichsgruendung',
    jahr: 0,
    titel: 'Gründung des Kaiserreiches Quirin',
    beschreibung: 'Tal Navalis, vom goldenen Seelöwen Velanor gesegnet, schlägt im Befreiungskrieg die Horden der Finsternis und eint das Archipel politisch zum Kaiserreich Quirin unter dem Haus Navalis. Die Quiriner Zeitrechnung „nach der Befreiung" (n.d.B.) beginnt.',
    typ: 'Gründung',
  },
  {
    id: 'fruehe-institutionen',
    jahr: 20,
    titel: 'Kriegerakademie, Lex Zwergia & Reichskirche',
    beschreibung: 'In den ersten Jahrzehnten unter Kaiser Tal I. wird die Quiriner Kriegerakademie als Hausakademie des Hauses Navalis gegründet, die Lex Zwergia sichert Hammerklang eigene Gerichtsbarkeit, dem Hochwald wird Schutzgebietsstatus zugesprochen, und die Kirche des Lichts wird offizielle Reichskirche.',
    typ: 'Gründung',
  },
  {
    id: 'expansion-nordwest',
    jahr: 240,
    titel: 'Eroberung von Trident und Nebelwacht',
    beschreibung: 'Kaiser Batho I., der Eroberer, sichert und gliedert das nordwestliche Archipel militärisch ein. Trident und Nebelwacht werden fest in die Reichsordnung eingebunden.',
    typ: 'Krieg',
  },
  {
    id: 'grosser-waldaufstand',
    jahr: 340,
    titel: 'Der Große Waldaufstand',
    beschreibung: 'Verbündete Elfenstämme des Hochwaldes greifen mehrere Grenzfestungen und Kolonien an. Nach verlustreichen Kämpfen erzwingt die Reichsgarde neue Verträge – der Hochwald wird fortan strenger überwacht.',
    typ: 'Krieg',
  },
  {
    id: 'grosse-pestepidemie',
    jahr: 370,
    titel: 'Große Pestepidemie',
    beschreibung: 'Eine Pestepidemie bricht in den Großstädten aus und verbreitet sich über ganz Quirin. Für seine Leistungen im Kampf gegen die Seuche wird dem Lichtpriester Johan der erste Tiberesorden verliehen.',
    typ: 'Katastrophe',
  },
  {
    id: 'handelsfahrten-aurelia',
    jahr: 450,
    titel: 'Erste Handelsfahrten nach Aurelia',
    beschreibung: 'Unter Batho II., dem Seefahrer, entstehen erste regelmäßige Kontakte und Handelsfahrten nach Aurelia und in die Söldnerstaaten des Ostkontinents. Handel, diplomatische Spannungen und Glaubensunterschiede prägen fortan die Außenpolitik.',
    typ: 'Handel',
  },
  {
    id: 'magierakademie-arkapur',
    jahr: 460,
    titel: 'Gründung der Magierakademie Arkapur',
    beschreibung: 'Die Magierakademie Arkapur wird offiziell gegründet und ausgebaut und wird zum einzigen anerkannten Ausbildungsort für Magier. Ein Reichsedikt bindet alle akademischen Zauberer an Krone und Akademie.',
    typ: 'Magie',
  },
  {
    id: 'drachentoeter',
    jahr: 489,
    titel: 'Magnus I. bezwingt den Drachen',
    beschreibung: 'Ein gewaltiger Drache wird durch eine Gruppe von Helden um Kaiser Magnus I., den Drachentöter, so schwer verwundet, dass er in die heutigen Glutklippen stürzt. Bis heute heißt es, er ruhe dort im Feuer gebannt.',
    typ: 'Magie',
  },
  {
    id: 'reichsreform-magnus2',
    jahr: 600,
    titel: 'Reichsreform unter Magnus II.',
    beschreibung: 'Nach einer schweren Thronfolgekrise und einem Bürgerkrieg geht Magnus II., der Erneuerer, als Sieger hervor. Die Provinzen der alten Kriegsfürsten werden abgeschafft, das Reich wird in Präfekturen, Dienstadel und Reichserzämter zentralisiert. Freyhafen wird als freie Handelsstadt bestätigt.',
    typ: 'Dynastisch',
  },
  {
    id: 'edikt-gleichberechtigung',
    jahr: 612,
    titel: 'Edikt der Gleichberechtigung',
    beschreibung: 'Auf einer großen Reichssynode in Talborn erlässt Kaiser Magnus II. gemeinsam mit der Kirche des Lichts das Edikt der Gleichberechtigung: Vor dem Licht sind alle Seelen gleich. Formal stehen Frauen wie Männern des Reiches fortan alle Wege offen.',
    typ: 'Dynastisch',
  },
  {
    id: 'waldelfenrebellion',
    jahr: 640,
    titel: 'Niederschlagung der Waldelfenrebellion',
    beschreibung: 'Die Anführerin der Waldelfenrebellen, Sanaria Sonnentau, wird gefangengenommen und zu lebenslanger Arbeit in den Schwarzen Minen verurteilt. Der Hochwald wandelt sich von offenem Schutzgebiet zu stark kontrolliertem Reservatsland.',
    typ: 'Krieg',
  },
  {
    id: 'katastrophe-arkapur',
    jahr: 670,
    titel: 'Katastrophe von Arkapur',
    beschreibung: 'Ein fehlgeschlagenes Ritual sprengt das Gebiet der Magierakademie durch eine Explosion vom Festland ab. Das folgende Seebeben verursacht eine gewaltige Flutwelle an den Küsten.',
    typ: 'Magie',
  },
  {
    id: 'kloakenkriege',
    jahr: 745,
    titel: 'Ende der Kloakenkriege',
    beschreibung: 'Nach Angriffen der Rattlinge und dem Einsturz eines Teils Talborns ertränkt der Kloakenzwerg Grimgrim den Rattlingkönig Gwiek Halbzahn. Das neue Talborn wird auf den eingestürzten Teilen der alten Stadt errichtet.',
    typ: 'Krieg',
  },
  {
    id: 'schwarze-garde',
    jahr: 798,
    titel: 'Gründung der Schwarzen Garde',
    beschreibung: 'Erste Blutschatten werden im Zauberwald gesichtet, Siedler in Neuland werden überfallen und massakriert. Aufgrund der hohen Verluste im Kampf gegen die Blutschatten wird die Schwarze Garde gegründet.',
    typ: 'Gründung',
  },
  {
    id: 'akademie-oeffnung',
    jahr: 800,
    titel: 'Kriegerakademie öffnet für Nicht-Quiriner',
    beschreibung: 'Batho III., der Große, wird zum Kaiser gekrönt. Im selben Jahr öffnet Akademieleiter Kapitän Morgen die Quiriner Kriegerakademie erstmals auch für Nicht-Quiriner – ein wichtiger Schritt hin zur Reichsidee als Exportgut.',
    typ: 'Dynastisch',
  },
  {
    id: 'orkensturm',
    jahr: 806,
    titel: 'Der Orkensturm',
    beschreibung: 'Unter einem Großkhan aus dem Osten zieht ein großer Sturm der Mongrelorks heran. Durch Piraterie und Überfälle wird der gesamte Handel bedroht, bis Quirin in der Seeschlacht siegt – auf Kosten eines Großteils seiner Flotte.',
    typ: 'Krieg',
  },
  {
    id: 'neulandkonflikt',
    jahr: 810,
    titel: 'Roderick spaltet Roon ab',
    beschreibung: 'Nachdem die Blutschatten aus dem Zauberwald verschwinden, erklärt sich Roderick von Neuland für unabhängig, benennt die Präfektur in Königreich Roon um und krönt sich selbst. Der Neulandkonflikt beginnt.',
    typ: 'Dynastisch',
  },
  {
    id: 'wattwallschlacht',
    jahr: 813,
    titel: 'Die Wattwallschlacht',
    beschreibung: 'Großadmiral Corona von Quirin startet eine Invasion gegen Roon. Nach einer dreitägigen Schlacht werfen die Neuländer die Quiriner Invasionsflotte zurück ins Meer.',
    typ: 'Krieg',
  },
  {
    id: 'bund-der-klingen',
    jahr: 818,
    titel: 'Gründung des Bund der Klingen',
    beschreibung: 'Mit dem kaiserlichen Privilegium Legis inter Gladii wird der Bund der Klingen gegründet. Reich und Schwertschulen werden eng verzahnt, Schwertmeistertitel und Schwertschulen stehen fortan unter Reichsaufsicht.',
    typ: 'Gründung',
  },
  {
    id: 'weisse-pest',
    jahr: 820,
    titel: 'Die Weiße Pest',
    beschreibung: 'Eine verheerende Seuche bricht aus und rafft binnen dreier Jahre viele Menschenleben dahin, bevor sie 823 n.d.B. endet. Piraterie und Söldnertum florieren in der Instabilität dieser Jahre.',
    typ: 'Katastrophe',
  },
  {
    id: 'heute',
    jahr: 826,
    titel: 'Die Gegenwart – Jahr 826',
    beschreibung: 'Quirin wirkt nach außen als starkes, reiches Kaiserreich unter Batho III., dem Großen. Im Inneren zehren jedoch die Nachwehen der Weißen Pest, Spannungen mit Roon und im Zauberwald, Hochwaldkonflikte und Adelsintrigen an der Reichsidee. Eine junge Prophetin des Lichts gilt vielen als Stimme einer kommenden geistlichen Erneuerung.',
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
