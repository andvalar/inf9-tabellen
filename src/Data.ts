const base = "inf9-tabellen"

export const data = {
  title: "Informatik 9",
  name: base,
  content: [  // array of topics
    {
      title: "Tabellenkalkulation",
      name: "tabellen",
      content: [  // array of lessons
        {
          title: "Tabellendokumente",
          name: "tabellendokumente",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Ein Tabellenkalkulationsprogramm ist eine Software, mit der man Tabellen 
                  erstellen und verwalten kann.
                  In diesem Tabellen kann der Computer automatische Berechnungen durchführen.`,
            },
            {
              _type: "multipleChoice",
              prompt: "Wähle die Tabellenkalkulationsprogramme aus!",
              options: [
                "Ubuntu Nano", 
                "Microsoft Office Excel", 
                "LibreOffice Calc",
                "Apple Pages",
                "Samsung Tables",
                "Apple Numbers",
              ],
              correctOptions: [1, 2, 5],
            },
            {
              _type: "entry",
              title: "Tabellendokumente",
              content: [
                {
                  title: "Aufbau",
                  content: `Ein Tabellendokument kann aus mehreren Tabellen bestehen. 
                    Jede Tabelle enthält <span class="color-green">Zellen (hier: B4)</span>, 
                    die in <span class="color-blue">Zeilen (hier: 4)</span> und 
                    <span class="color-orange">Spalten (hier: B)</span> angeordnet sind.
                    In einer Zelle kann ein Wert stehen.`,
                  image: `1-1-cell_row_column.png`,
          
                },
                {
                  title: "Zellen formatieren",
                  content: `Das Format einer Zelle bestimmt, wie der Inhalt dargestellt wird (z.B. als Dezimalzahl, Prozentangabe, Datum, Text...).
                    Wir sprechen vom Datentyp der Zelle.<br /><br />
                    Eine Zelle markierst du, indem du sie linksklickst.
                    Wenn du eine nicht-markierte Zelle linksklickst, die Maustaste nicht loslässt und dann die Maus bewegst, 
                    kannst du mehrere Zellen auf einmal markieren. <br />
                    Einen markierten Bereich (natürlich auch einzelne Zellen) kannst du üblicherweise formatieren, 
                    indem du ihn rechtsklickst und dann "Zelle formatieren" wählst.`,
                  image: `1-1-format_cell.png`,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: "Was ist ein Tabellenkalkulationsprogramm?",
              options: [
                "Software zum Schreiben und Designen von Tabellen", 
                "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
                "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden",
              ],
              correctOptions: [1],
            },
            {
              _type: "task",
              number: "1a",
              prompt: "Dein erstes Tabellendokument",
              content: `Erstelle ein Tabellendokument, z.B. mit Microsoft Excel oder LibreOffice Calc. 
                Speichere es in <my-code>deinen Dokumenten</my-code> im 
                Ordner <my-code>Info 9</my-code> (neuen Ordner erstellen) 
                unter dem Namen <my-code>Erste-Tabelle</my-code> ab.`,
            },
            {
              _type: "task",
              number: "1b",
              prompt: "Bearbeite deine Tabelle",
              content: `Bearbeite dein erstes Tabellendokument. Am Ende soll es ähnlich aussehen, 
                wie die Beispieltabelle hier. Du kannst dafür ein Thema deiner Wahl darstellen, 
                oder einfach die Tabelle möglichst genau übernehmen. Achte dabei auf die Verwendung 
                von Schriftart, -farbe und -größe, Hintergrundfarbe, Hervorhebungen und Text-Stile, 
                Textausrichtung (auch vertikal!), Darstellungsformat (achte auf die Zahlen!) sowie Rahmen.`,
              image: "1-1-task1.png",
            },
            {
              _type: "task",
              number: "1c",
              prompt: "Verändere dein Tabellendokument",
              content: `Das Tabellendokument hat mehrere Tabellen (siehe Tabs unten links). 
                Lösche eine der leeren Tabellen. Vervielfältige dann den Inhalt deiner ersten Tabelle, 
                indem du alles markierst (Strg+A), kopierst (Strg+C) und dann in der leeren Tabelle 
                einfügst (Strg+V). Sortiere dann eine Spalte (Daten --> Sortieren). 
                Blende zum Schluss eine Spalte aus.`,
            },
            {
              _type: "task",
              number: "2",
              prompt: "Tabellengröße - Finde es heraus",
              content: `Finde heraus, wie viele Zeilen bzw. wie viele Spalten eine Tabelle hat.`,
            },
            {
              _type: "task",
              number: "3",
              prompt: "Diagramme in Tabellen",
              content: `Stelle die Informationen deiner Tabelle in verschiedenen Diagrammen dar. 
                Benutze dafür das Menü oben: 'Einfügen' --> Art des Diagramms`,
            },
          ],
        },
        {
          title: "Formeln",
          name: "formeln",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Die bisherigen Aufgaben (eine Tabelle zu erstellen und zu formatieren), hätten wir viel einfacher auch mit 
              einem Textverarbeitungsprogramm, wie z. B. Word oder Writer, erledigen können. <br /><br />
              Hier lernst du, wie du ein Tabellenkalkulationsprogramm zum automatisierten Rechnen nutzen kannst.`,
            },
            {
              _type: "entry",
              title: "Formeln",
              content: [
                {
                  title: "Zellbezüge",
                  content: `Jede Zell ist durch Angabe der Spalte und Zeile eindeutig bestimmt.<br /><br />
                    Die Spalten werden mit Buchstaben betitelt (A, B, C,...).<br />
                    Die Zeilen werden mit Zahlen (1, 2, 3,...) durchnummeriert.<br /><br />
                    Buchstabe und Zahl zusammen bilden (wie bei "Schiffe versenken") einen Zellbezug, z.B. <my-code>A1</my-code> oder <my-code>C3</my-code>`,
                },
                {
                  title: "Formeln",
                  content: `Wenn du in eine Zelle als erstes Zeichen ein <my-code>=</my-code> schreibst, 
                    versteht das <my-hint hint="Tabellenkalkulationsprogramm">TKP</my-hint> den Inhalt der Zelle als Formel.
                    Der Ausdruck nach dem <my-code>=</my-code> bestimmt, was das TKP automatisch berechnet.<br /><br />
                    Als Rechenzeichen benutzt du in TKP:<br />
                    <table><tr><th>Operation</th><th>Zeichen</th></tr>
                    <tr><td>Addition</td><td>+</td></tr>
                    <tr><td>Subtraktion</td><td>-</td></tr>
                    <tr><td>Multiplikation</td><td>*</td></tr>
                    <tr><td>Division</td><td>/</td></tr>
                    <tr><td>Potenzierung ("hoch")</td><td>^ (z.B. 2^3 ist "2 hoch 3"</td></tr></table><br />
                    <my-bsp>
                      <my-code>=1+2</my-code> als Zelleninhalt wird automatisch angezeigt als <my-code>3</my-code>
                    </my-bsp>
                    Formeln beginnen immer mit einem <my-code>=</my-code>. Danach folgt ein Ausdruck, der aus konstanten Werten 
                    (z.B. Zahlen), Rechenzeichen, Klammern und <span class="color-orange">Zellbezügen</span> besteht 
                    (ähnlich wie ein Term mit <span class="color-orange">Variablen)</span>`,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: `In einer Zelle stehen folgende Werte. Welche davon werden als <my-code>2</my-code> angezeigt?`,
              options: [
                "<my-code>=2*0</my-code>", 
                "<my-code>=2</my-code>", 
                "<my-code>2</my-code>",
                "<my-code>1+1</my-code>",
                "<my-code>=SUMME(1; 3; -2)</my-code>",
              ],
              correctOptions: [1, 2, 4],
            },
            {
              _type: "entry",
              title: "Formeln & Zellbezüge kombiniert",
              content: [
                {
                  title: "Zellbezüge",
                  content: `Schreibst du <my-code>=A3</my-code> in eine Zelle (z.B. <my-em>B3</my-em>), dann zeigt das TKP den Inhalt von 
                    <my-em>A3</my-em> in dieser Zelle (<my-em>B3</my-em>) an - auch wenn sich der Inhalt in <my-em>A3</my-em> verändert!<br /><br />
                    <my-tip><span>Tipp:</span> Wenn du schon <my-code>=</my-code> eingegeben hast, kannst du auch eine andere Zelle linksklicken, dann wird ihr 
                    Bezug automatisch eingefügt.</my-tip>
                    <my-bsp>
                      Steht in <my-em>A1</my-em> der Inhalt <my-code>12</my-code>, dann ergibt <my-code>=A1*2</my-code> in <my-em>B1</my-em>
                      automatisch <my-code>24</my-code>. Änderst du <my-em>A1</my-em> zu <my-code>3</my-code>, verändert sich gleich die Anzeige
                      in <my-em>B1</my-em> zu <my-code>6</my-code>. 
                    </my-bsp>`,
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: `Du darfst eine Zahl oder ein Rechenzeichen ändern. Welche Änderungen sorgen dafür, dass in <my-em>C2</my-em> <my-code>8</my-code>
                angezeigt wird?`,
              image: "1-2-mc1.png",
              options: [
                "In <my-em>C2</my-em> <my-code>^</my-code> statt <my-code>*</my-code>",
                "In <my-em>C2</my-em> <my-code>8</my-code> statt <my-code>A1</my-code>",
                "In <my-em>C2</my-em> <my-code>4</my-code> statt <my-code>3</my-code>",
                "In <my-em>A1</my-em> <my-code>1/3</my-code> statt <my-code>2</my-code>", 
              ],
              correctOptions: [0, 2, 3],
            },
            {
              _type: "multipleChoice",
              prompt: `Womit beginnt JEDE Formel?`,
              options: [
                "<my-code>!</my-code>",
                "<my-code>?</my-code>",
                "<my-code>=</my-code>",
                "<my-code>FORMEL:</my-code>",
              ],
              correctOptions: [2,],
            },
            {
              _type: "task",
              number: "1",
              prompt: "Erste Schritte mit Formeln",
              content: `Öffne die Datei <a href="/${base}/grundrechenarten.ods"><my-code>grundrechenarten.ods</my-code></a> und schaue dir darin Beispiel 1 an.<br /><br />
                Zuerst soll die Anzahl der Jungen (aus <my-em>C1</my-em>) und die Anzahl der Mädchen unter "Insgesamt" addiert werden.
                Der Wert von <my-em>C3</my-em> soll automatisch angepasst werden, wenn sich <my-em>C1</my-em> oder <my-em>C2</my-em> ändern.<br />
                In <my-em>C5</my-em> soll der Jungenanteil stehen (als Prozent- oder Dezimalzahl).<br />
                In <my-em>C7</my-em> soll der Mädchenanteil stehen (als Prozent- oder Dezimalzahl)<br />
                <my-tip><span>Tipp:</span> Dazu musst du in Zelle <my-em>C3</my-em> eine Formel mit Zellbezügen hinenschreiben.</my-tip>
                <ol>
                  <li>Schreibe den Inhalt von <my-em>C3</my-em></li>
                  <li>Schreibe den Inhalt von <my-em>C3</my-em></li>
                  <li>Schreibe den Inhalt von <my-em>C3</my-em></li>
                  <li>Sorge dafür, dass die Werte als %-Angaben angezeigt werden, ohne die Zellwerte zu verändern.</li>
                  <li>Ändere den Wert von <my-em>C1</my-em> oder <my-em>C2</my-em>, um, deine Formeln zu überprüfen.</li>
                </ol>`,
              //file: "grundrechenarten.ods",
            },
            {
              _type: "task",
              number: "2",
              prompt: "...und weiter",
              content: `Füge der gleichen Datei bei den Beispielen 2 bis 10 jeweils in den gelben Feldern die richtige Formel ein. 
                Speichere deine Bearbeitung ab.`,
            },
            {
              _type: "task",
              number: "3",
              prompt: "Jetzt ohne Stützräder",
              content: `Öffne die Datei <a href="/${base}/prozentrechnung.ods"><my-code>prozentrechnung.ods</my-code></a> und löse die 
                Prozentrechnungsaufgaben mithilfe passender Formeln.`,
            },
            {
              _type: "task",
              number: "4",
              prompt: "Profi",
              content: `<ol>
                  <li>Eine Stegreifaufgabe dauert im Durchschnitt nur ein Drittel mal so lang, wie eine Schulaufgabe. 
                  Öffne die Datei <a href="/${base}/pruefungsdauer.ods"><my-code>pruefungsdauer.ods</my-code></a> und trage
                  in der Zelle <my-em>C6</my-em> eine entsprechende Formel ein, obwohl in <my-em>C3</my-em> noch kein Wert steht.</li>
                  <li>Gleichzeitig dauert eine Schulaufgabe im Durchschnitt 30 min länger, als eine Stegreifaufgabe.Schulaufgabe
                  Trage die entsprechende Formel in der Zelle <my-em>C3</my-em> ein, auch wenn ein Fehler wegen zirkulärer Referenz auftritt</li>
                  <li>Im Menü unter <my-code>Extras / Optionen</my-code> kannst du unter <my-code>Calc / Berechnungen</my-code> (in LibreOffice Calc)
                  bzw. <my-code>Datei / Optionen / Formeln</my-code> (in Microsoft Excel) einstellen, dass bei zirkulärer Referenz Iterationen 
                  (wiederholte Berechnungen) erfolgen. Untersuche, ob auf dieses Weise die richtigen Prüfungsdauern berechnet werden.</li>
                </ol>`,
            },
          ],
        },
        {
          title: "Funktionen",
          name: "funktionen",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: ``,
            },
            {
              _type: "multipleChoice",
              prompt: "",
              options: [
                "", 
                "", 
              ],
              correctOptions: [],
            },
            {
              _type: "entry",
              title: "",
              content: [
                {
                  title: "",
                  content: ``,
                  image: ``,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: "",
              options: [
                "", 
                "", 
                "",
              ],
              correctOptions: [],
            },
            {
              _type: "task",
              number: "",
              prompt: "",
              content: ``,
            },
          ],
        },
      ],
    },
  ],
}