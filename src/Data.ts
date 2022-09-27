export const data = {
  title: "Informatik 9",
  name: "inf9-tabellen",
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
              _type: "multipleChoice",
              prompt: "",
              options: [
                "Ubuntu Nano", 
                "Microsoft Office Excel", 
              ],
              correctOptions: [1],
            },
            {
              _type: "entry",
              title: "Zellbezüge",
              content: [
                {
                  title: "Aufbau",
                  content: `Ein Tabellendokument kann aus mehreren Tabellen bestehen. 
                    Jede Tabelle enthält <span className="color-green">Zellen (hier: B4)</span>, die in 
                    <span className="color-blue">Zeilen (hier: 4)</span> und <span className="color-orange">Spalten (hier: B)</span> 
                    angeordnet sind. In einer Zelle kann ein Wert stehen.`,
                  image: `1-1-cell_row_column.png`,
          
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
              prompt: "Aufgabe 1",
              content: "A1",
            },
          ],
        },
        {
          title: "Funktionen",
          name: "funktionen",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Fktn PLATZHALTER`,
            },
            {
              _type: "multipleChoice",
              prompt: "",
              options: [
                "A", 
                "B", 
              ],
              correctOptions: [1],
            },
            {
              _type: "entry",
              title: "Funktionen",
              content: [
                {
                  title: "Aufbau",
                  content: `TEXT.`,
                  image: `1-1-cell_row_column.png`,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: "PROMPT?",
              options: [
                "C", 
                "B", 
                "A",
              ],
              correctOptions: [1],
            },
            {
              _type: "task",
              prompt: "Aufgabe 1",
              content: "A1",
            },
          ],
        },
      ],
    },
  ],
}