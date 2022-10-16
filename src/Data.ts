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
          title: "E-V-A",
          name: "eva",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Eingabe, Verarbeitung, Ausgabe - dieses Prinzip ist - nicht nur - in der 
                Informatik allgegenwärtig.`,
            },
            {
              _type: "multipleChoice",
              prompt: "Wofür steht 'E-V-A'?",
              options: [
                "Für A-D-A-Ms Frau", 
                "Für Eingabe-Verarbeitung-Angabe",
                "Für Entropic-Vectoriczation-Artifact",
                "Für Eingabe-Verarbeitung-Ausgabe", 
              ],
              correctOptions: [3],
            },
            {
              _type: "entry",
              title: "",
              content: [
                {
                  title: "E-V-A-Prinzip",
                  content: `Eingabe, Verarbeitung, Ausgabe - dieses Prinzip ist in der Informatik allgegenwärtig.
                    Gerade in der Tabellenkalkulation begegnet es dir überall.<br /><br />
                    Wenn du später bei komplexeren Funktionen einmal nicht weiter weißt, kann es dir helfen, 
                    in Ruhe noch einmal das E-V-A-Prinzip durchzugehen:<br />
                    Was ist/sind die Eingabe/n? <br />
                    Wie werden sie verarbeitet? <br />
                    Was soll am Ende ausgegeben werden?`,
                  image: ``,
          
                },
              ],
            },
            /*{
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
            },*/
          ],
        },
        {
          title: "Tabellendokumente",
          name: "tabellendokumente",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Ein Tabellenkalkulationsprogramm (TKP) ist eine Software, mit der man Tabellen 
                  erstellen und verwalten kann, in denen vom Computer automatische Berechnungen 
                  durchgeführt werden können.
                  Zum Beispiel werden sie in vielen Unternehmen zur (einfachen) Buchhaltung, 
                  Berechnung von Marktverläufen oder Gewinnoptimierung genutzt. 
                  Gängige Tabellenkalkulationsprogramme sind zum Beispiel: Microsoft Excel, 
                  LibreOffice Calc und Apple Numbers`,
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
              correctOptions: [1, 2, 5,],
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
              correctOptions: [1,],
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
              solution: `Excel: 1048576 Zeilen/Spalten (Spalten bis <my-em>XFD</my-em>). `,
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
                  content: `Jede Zelle ist durch Angabe der Spalte und Zeile eindeutig bestimmt.<br /><br />
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
                "In <my-em>A1</my-em> <my-code>8/3</my-code> statt <my-code>2</my-code>", 
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
                  <li>Schreibe den Inhalt von <my-em>C5</my-em></li>
                  <li>Schreibe den Inhalt von <my-em>C7</my-em></li>
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
            {
              _type: "entry",
              title: "Kopieren von Formeln",
              content: [
                {
                  title: "Relative Zellbezüge",
                  content: `Du kannst den Inhalt von Zellen kopieren, wenn in folgenden Zeilen oder Spalten gleiche oder ähnliche Formeln stehen sollen.
                    Das ist natürlich deutlich praktischer, als jede Formel einzeln einzutippen.`,
                  image: `3-formeln_kopieren.png`,
                },
                {
                  title: "",
                  content: `Zum Beispiel geht das durch Tastenkombination (<my-code>Strg+C</my-code> zum Kopieren
                    <my-code>Strg+V</my-code> zum Einfügen) oder indem du einen zu kopierenden Bereich markierst (linksklickst) und dann die rechte untere
                    Ecke davon klickst, ziehst und loslässt (siehe Bilder).`,
                  image: `3-formeln_kopieren2.png`,
                },
                {
                  title: "",
                  content: `Enthält die ursprüngliche Zelle einen Zellbezug, wird dieser automatisch angepasst. In diesem Fall ändert sich automatisch die Zeile.
                    Der Zellbezug bleibt sozusagen bei <my-em>"Nimm die Zelle links daneben"</my-em>. Das nennen wir einen <my-em>relativen Zellbezug</my-em>.`,
                  image: `3-formeln_kopieren3.png`,
                },
                {
                  title: "Absolute Zellbezüge",
                  content: `Fügst du in der ursprünglichen Zelle ein <my-em>$</my-em> im Zellbezug ein, wird dadurch entweder die Zeile oder die Spalte
                    oder beides "festgehalten".`,
                  image: `3-formeln_kopieren4.png`,
                },
                {
                  title: "",
                  content: `So wird beim Kopieren die Zeile nicht automatisch verändert, der Bezug bezieht sich weiter auf exakt die gleiche Zelle.`,
                  image: `3-formeln_kopieren5.png`,
                },
                {
                  title: "",
                  content: `In diesem Beispiel kannst du sehen, dass die Zeile (<my-code>$2</my-code>) festgehalten wurde, sozusagen <my-em>"Nimm immer
                    genau die Zelle A2"</my-em>. Das nennen wir einen 
                    <my-em>absoluten Zellbezug</my-em>.`,
                  image: `3-formeln_kopieren6.png`,
                },
                {
                  title: "",
                  content: `(Genau genommen ist das oben kein reiner absoluter Zellbezug, da nur die Zeile festgehalten wurde. In diesem Fall sprechen
                    wir auch manchmal von einem <my-em>gemischten Zellbezug</my-em>. Wenn wir "nach rechts" statt "nach unten" kopiert hätten, hätte
                    sich die Spalte weiter verändert...)`,
                  image: ``,
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: `<my-code>=$E$5</my-code> ist...`,
              options: [
                "ein absoluter Zellbezug",
                "ein relativer Zellbezug",
                "ein gemischter Zellbezug",
                "eine Formel",
              ],
              correctOptions: [0,3,],
            },
            {
              _type: "task",
              number: "5.1",
              prompt: "Relative Zellbezüge",
              content: `Öffne die Datei <a href="/${base}/aufkleber.ods"><my-code>aufkleber.ods</my-code></a>.<br />
                Es soll der Preis von Aufklebern berechnet werden. Ein Aufkleber kostet 0,05€.<br />
                <ol>
                  <li>Gib auf der Tabelle <my-em>Ohne Porto</my-em> nur in der Zelle <my-em>C3</my-em> die richtige Formel 
                  <my-code>=B3*0,05</my-code> ein.</li>
                  <li>Kopiere dann die Zelle <my-em>C3</my-em> in <my-em>C4</my-em> bis <my-em>C12</my-em></li>
                  <li>Überprüfe den Inhalt der kopierten Zellen. Welche Art von Zellbezug wurde hier genutzt?</li>
                </ol>`,
            },
            {
              _type: "task",
              number: "5.2",
              prompt: "Absolute Zellbezüge",
              content: `Wechsle in der gleichen Datei (<my-em>aufkleber.ods</my-em>) auf die Tabelle <my-em>MitPorto</my-em>.<br />
                Zu den Kosten soll nun noch ein festes Porto dazukommen, das in Zelle <my-em>E3</my-em> eingetragen ist.<br />
                <ol>
                  <li>Gib in der Zelle <my-em>C3</my-em> die angepasste Formel <my-code>=B3*0,05+E3</my-code> ein.</li>
                  <li>Kopiere dann die Zelle <my-em>C3</my-em> in <my-em>C4</my-em> bis <my-em>C12</my-em>. Dir wird auffallen, dass hier
                  etwas schiefgegangen ist. Überprüfe den Inhalt der kopierten Zellen. Was ist passiert?</li>
                  <li>Verändere die Art des Zellbezugs: Schreibe <my-code>$E$3</my-code> statt <my-code>E3</my-code> in die ursprüngliche 
                  Zelle <my-em>C3</my-em>. Kopiere dann wieder in die Zeilen danach.</li>
                  <li>Überprüfe erneut den Inhalt der kopierten Zellen. Welche Art von Zellbezug wurde jetzt genutzt?</li>
                </ol>`,
            },
            {
              _type: "task",
              number: "6",
              prompt: "Jetzt selbst...",
              content: `Öffne die Datei <a href="/${base}/adressierungsarten.ods"><my-code>adressierungsarten.ods</my-code></a>.<br />
                <ol>
                  <li>Auf der Tabelle <my-em>Punktzahlen</my-em> soll für jede:n einzelne:n Schüler:in die Gesamtpunktzahl berechnet werden, 
                  die sich aus drei Runden eines Spiels ergibt.
                  <my-tip><span>Tipp a:</span> Denke an die Zellbezugsart. Bist du dir unsicher, denke an Aufgabe 5.</my-tip></li>
                  <li>Wechsle zur Tabelle <my-em>Startpunktzahl</my-em>. Hier soll zur Punktzahl aus den Runden noch eine Startpunktzahl
                  addiert werden, die in Zelle <my-em>H3</my-em> steht und verändert werden kann.</li>
                  <li>Die Fibonacci-Folge sind die Zahlen 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...<br />
                  Berechne in der Tabelle <my-em>Fibonacci</my-em> die 50. Zahl der Folge.
                  <my-tip><span>Tipp c:</span> Die ersten zwei Zahlen der Fibonacci-Folge sind fest: 1 und 1. Ab dort kannst du mit einer 
                  simplen Formel mit Addition weiter rechnen...</my-tip></li>
                  <li>Angenommen, du legst 1200€ bei einem (jährlichen) Zinssatz von 4,25% für 50 Jahre an. Berechne das Guthaben 
                  in der Tabelle <my-em>Sparguthaben</my-em></li>
                  <li>Das Heron-Verfahren berechnet die Quadratwurzel einer gegebenen Zahl in Näherungsschritten (es ist also ein 
                  <my-em>Algorithmus</my-em>).<br />
                  Die grundlegende Idee: Nähere dich der quadratischen Fläche durch grobe Rechtecke, die in jedem Schritt "quadratischer" werden.
                  Die (zuerst unterschiedlichen) Seitenlängen sind die Näherung der Wurzel.<br />
                  Berechne in der Tabelle <my-em>Heron-Verfahren</my-em> beliebige Quadratwurzeln: Im ersten Schritt wird ein x gewählt,
                  und ein passendes y berechnet (so dass x*y die Fläche ergibt, von der die Wurzel berechnet werden soll).<br />
                  Im Folgenden ist das neue x die Mitte zwischen dem alten x und dem alten y, das neue y wird entsprechend wie oben berechnet.
                  </li>
                  <li>Erstelle in der Tabelle <my-em>Multiplikationstafel</my-em> eine große "1x1-Tabelle" von 1 bis 100.
                  <my-tip><span>Tipp f:</span> Lasse A1 frei. Beginne damit, in A2,A3,.../B1,C1,... jeweils die Zahlen 1, 2,... 
                  zeilen-/spaltenweise einzutragen.<br />
                  Nutze gemischte Adressierung: Denke immer darüber nach, was "festgehalten" werden muss und was nicht.</my-tip></li>
                  <li>In der Tabelle <my-em>Stammbruchsumme</my-em> geht es um die Summe der ersten 1000 Stammbrüche: 
                  <img src="/${base}/stammbruchsumme.png" class="colorover" /><br />
                  Schätze zuerst die Summe, berechne sie dann.</li>
                  <li>Wechsle zur Tabelle <my-em>Wertetabelle</my-em>. Hier sollen Wertetabellen für lineare Funktionen erstellt werden.
                  Dabei ist die Steigung m, der y-Achsenabschnitt t, der Startwert für x sowie der Abstand zweier x-Wert der Tabelle frei wählbar.</li>
                  <li>Folgende Abbildung zeigt das pascalsche Dreieck:<br />
                  <img src="/${base}/pascalsches_dreieck.png" class="colorover" /><br />
                  Trage in der Tabelle <my-em>PascalschesDreieck</my-em> ein möglichst großes pascalsches Dreieck ein.
                  <my-tip><span>Tipp:</span> Lege das Dreieck "schräg" an, so dass die Spitze in Zelle <my-em>A1</my-em> liegt. Die Regel
                  von oben nach unten hängt mit einfacher Addition zusammen...</li>
                  <li>Die Fakultät <my-em>n!</my-em> einer natürlichen Zahl n ist das Produkt der Zahlen <my-em>von 1 bis n</my-em>.<br />
                  Bsp.: <my-code>5! = 1 * 2 * 3 * 4 * 5</my-code><br />
                  Vervollständige die Tabelle <my-em>Fakultät</my-em>. Beachte, dass <my-code>0! = 1</my-code> definiert ist.</li>
                </ol>`,
            },
            {
              _type: "task",
              number: "7",
              prompt: "Termwerte",
              content: `Gegeben ist der von einer natürlichen Zahl n abhängige Term: 
                <img src="/${base}/term.png" class="colorover" alt="(1 + 1/n)^n" /><br /><br />
                Untersuche in einer Tabelle, wie sich der Wert des Terms verändert, wenn n immer größer wird.`,
            },
            {
              _type: "task",
              number: "8",
              prompt: "Kettenbruch",
              content: `Finde heraus, was sich hinter folgendem Kettenbruch verbirgt:<br />
                <img src="/${base}/kettenbruch.png" class="colorover" />
                <my-tip><span>Tipp:</span> Erstelle zuerst Tabellenspalten, in denen z.B. für n=1,...,50 die Werte von 2n-1 und n^2 stehen.
                Anschließend berechnest du in einer weiteren Spalte von unten nach oben nacheinander die Nenner.</my-tip>`,
              solution: `<my-em>Pi</my-em>: (vernachlässige in der letzten Zeile deiner Tabelle den weiteren Bruch. Vergiss nicht, die oberste Zelle (<my-em>D1</my-em>:
                <my-code>=B1+C1/D2</my-code>) zu verrechnen:
                <my-code>=4/D1</my-code>)`,
            },
          ],
        },
        {
          title: "Funktionen",
          name: "funktionen",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `<p>Die Berechnungen, die du bisher mithilfe von Formeln durchgeführst hast, haben sich oft aus mehreren 
                Rechenschritten zusammengesetzt. 
                Einen solchen Rechenschritt nennen wir im folgenden Funktion. Hier wirst du noch einige weitere, hilfreiche Funktionen
                kennenlernen, um komplexere Aufgaben (oft einfacher) zu lösen.</p>
                <grid-container>
                  <p>Außerdem lernst du, Funktionen (und später Verkettung von Funktionen) graphisch darzustellen. Solche graphischen
                  Darstellungen wirst du nutzen, um komplexe Berechnungen zuerst zu modellieren (also gedanklich zu sortieren) und sie dann
                  als Formel zu schreiben.</p>

                  <dataflow-diagram>
                    <dataflow-params>
                      <dataflow-parameter>1</dataflow-parameter>
                      <dataflow-parameter>2</dataflow-parameter>
                    </dataflow-params>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-function>
                      +
                    </dataflow-function>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-result>
                      3
                    </dataflow-result>
                  </dataflow-diagram>
                </grid-container>`,
            },
            {
              _type: "entry",
              title: "Funktionen und ihre Darstellungen",
              content: [
                {
                  title: "Grundbegriffe",
                  content: `<p>Du kennst schon einige Funktionen, auch wenn du sie bisher sicher nicht 
                    als Funktion wahrgenommen hast: <br />
                    <my-em>+</my-em>, <my-em>-</my-em>, <my-em>*</my-em>,... Die Grundrechenarten, aber auch die <my-em>Wurzel</my-em>, 
                    das <my-em>Runden</my-em> oder das Nennen einer <my-em>Zufallszahl</my-em> können wir als Funktion verstehen.</p>

                    <p>Wir betrachten zum Beispiel <my-eM>1 + 2 = 3</my-eM>. Hier sind <my-code>1</my-code> und <my-code>2</my-code> 
                    <my-em>Parameterwerte</my-em>, <my-code>+</my-code> der <my-eM>Funktionsbezeichner</my-eM> und zum Schluss
                    <my-codE>3</my-codE> der <my-em>Rückgabewert</my-em></p>
                    <br />
                    <flex-container>
                      <grid-container class="table col-3">
                        <span class="table-header">E-V-A-Prinzip</span>
                        <span class="table-header">Funktionen</span>
                        <span class="table-header">Beispiel</span>
                        <span>Eingabe</span>
                        <span>Parameter</span>
                        <span>1; 2</span>
                        <span>Verarbeitungsvorschrift</span>
                        <span>Funktion(sbezeichner)</span>
                        <span>+</span>
                        <span>Ausgabe</span>
                        <span>Rückgabewert</span>
                        <span>3</span>
                      </grid-container>
                    </flex-container>
                    <br />
                    <p>Du wirst feststellen, dass Funktionen unterschiedlich viele Parameter (Eingaben) annehmen. Die Grundrechenarten
                    haben immer zwei, aber z. B. um eine Zufallszahl zu erhalten, musst du nichts weiter angeben.<br />
                    <my-em>Jede Funktion, ohne Ausnahme, hat jedoch immer genau einen Rückgabewert.</my-em></p>`,
                  image: ``,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: "<my-em>'Ziehe die Wurzel aus 49.'</my-em> Hier ist 49...",
              options: [
                "der Pamphlet", 
                "der Rückgabewert", 
                "der Papameter", 
                "der Katheter", 
                "der Parameter", 
              ],
              correctOptions: [4,],
            },
            {
              _type: "multipleChoice",
              prompt: "Was ist ein Tabellenkalkulationsprogramm?",
              options: [
                "Software zum Schreiben und Designen von Tabellen", 
                "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
                "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden",
              ],
              correctOptions: [1,],
            },
            {
              _type: "multipleChoice",
              prompt: `Funktionen haben...`,
              options: [
                `meistens zwei Parameter`, 
                `einen Rückgabewert`, 
                `keinen Rückgabewert`, 
                `eine Verarbeitungsvorschrift`, 
              ],
              correctOptions: [1, 3,],
            },
            {
              _type: "entry",
              title: "Funktionen und ihre Darstellungen",
              content: [
                {
                  title: "Darstellung als Datenfluss",
                  content: `Wie schon beim E-V-A-Prinzip stellen wir Funktionen oft "von oben nach unten" in ihre Einzelteile
                    aufgegliedert dar - die Daten "fließen" sozusagen durch die Funktion: daher der Name <my-em>Datenflussdiagramm</my-em>.
                    <br /><br />
                    <flex-container>
                        <dataflow-diagram>
                          <dataflow-params>
                            <dataflow-parameter>1</dataflow-parameter>
                            <dataflow-parameter>2</dataflow-parameter>
                          </dataflow-params>
                          <dataflow-arrows>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-function>
                            +
                          </dataflow-function>
                          <dataflow-arrows>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-result>
                            3
                          </dataflow-result>
                        </dataflow-diagram>

                        <dataflow-diagram>
                          <dataflow-params>
                            <dataflow-parameter>36</dataflow-parameter>
                          </dataflow-params>
                          <dataflow-arrows>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-function>
                            Wurzel
                          </dataflow-function>
                          <dataflow-arrows>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-result>
                            6
                          </dataflow-result>
                        </dataflow-diagram>

                        <dataflow-diagram>
                          <dataflow-params>
                            <dataflow-parameter>&nbsp;</dataflow-parameter>
                          </dataflow-params>
                          <dataflow-arrows class="seethrough">
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-function>
                            Zufallszahl
                          </dataflow-function>
                          <dataflow-arrows>
                            <span class="arrow is-triangle arrow-bar is-bottom"></span>
                          </dataflow-arrows>
                          <dataflow-result>
                            0.19287312340957
                          </dataflow-result>
                        </dataflow-diagram>
                    </flex-container>`,
                  image: ``,
          
                },
                {
                  title: "Term-Notation",
                  content: `<p>Aus der Mathematik ist dir bekannt, eine Funktion oder Term so aufzuschreiben: <my-code>f(x)</my-code></p>
                    <p>In der Informatik vergeben wir etwas aussagekräftigere Funktionsbezeichner - statt <my-code>f(x)</my-code>
                    z. B. <my-codE>Zufallszahl()</my-code>. <br />
                    Die leeren Klammern bedeuten hier, dass es keine Parameter gibt, also keine Eingabe nötig ist - wie oben bereits erklärt.
                    Die Klammern bleiben aber bei einer Funktion in dieser <my-em>Term-Notation</my-em> immer.</p>
                    <br />
                    <p>Wahrscheinlich würdest du aber nie auf die Idee kommen, <my-code>+(1; 2)</my-code> zu schreiben - stattdessen
                    schreibst du auch hier weiter <my-code>1 + 2</my-code>.<br />
                    <my-code>Funktionsbezeichner(Parameter...)</my-code> ist die <my-em>Präfix-Notation</my-em> (lat. "prae": vor, 
                    "praefigio": vorn anheften), der Funktionsbezeichner ist vorne angeheftet.<br />
                    <my-code>Parameter1 Funktionsbezeichner Parameter2</my-code> ist die <my-em>Infix-Notation</my-em> (lat. "in": in, 
                    "infigio": hineinheften), der Funktionsbezeichner ist zwischen die Parameter geheftet. Das geht allerdings nur für genau
                    zwei Parameter und ist nur üblich, bei den gängigsten Funktionen, wie z. B. den Grundrechenarten.</p>
                    <br />
                    <p>Den Rückgabewert ordnen wir in der Term-Notation so zu: <my-code>Runden(3,141592; 2) &rarr; 3,14</my-code> oder 
                    <my-code>35 / 5 &rarr; 7</my-code><br />
                    Das nennen wir dann <my-em>Funktionsaufruf</my-em>. In einem TKP erfolgt ein Funktionsaufruf so: <my-code>=Funktionsbezeichner(Parameter)</p>`,
                  image: ``,
          
                },
              ],
            },
            {
              _type: "multipleChoice",
              prompt: `<flex-container>
                  <dataflow-diagram>
                    <dataflow-params>
                      <dataflow-parameter>2,68</dataflow-parameter>
                      <dataflow-parameter>1</dataflow-parameter>
                    </dataflow-params>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-function>
                      Runden
                    </dataflow-function>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-result>
                      2,7
                    </dataflow-result>
                  </dataflow-diagram>

                  <p>Der zweite Parameter der Funktion links gibt an...</p>
                </flex-container>`,
              options: [
                "wie oft gerundet wird", 
                "was gerechnet wird", 
                "dass der PC mit dem Speed-Multiplikator 1 arbeitet", 
                "dass auf eine Nachkommastelle gerundet wird", 
                "wie nah zur 1 gerundet wird", 
                "ob auf- oder abgerundet wird", 
              ],
              correctOptions: [3],
            },
            {
              _type: "multipleChoice",
              prompt: `Fakultät(6) &rarr;`,
              options: [
                "12", 
                "72", 
                "720",
                "7200",
                "ist ein Funktionsaufruf",
              ],
              correctOptions: [2, 4],
            },
            {
              _type: "task",
              number: "0",
              prompt: "[Partnerarbeit]",
              content: `Erkläre deine:r Nachbar:in folgende Begriffe:
                <ul>
                  <li>Funktion</li>
                  <li>Funktionsbezeichner</li>
                  <li>Parameter</li>
                  <li>Präfix-Notation</li>
                </ul>`,
              solution: `Lies den Hefteintrag oben noch einmal.`,
            },
            {
              _type: "multipleChoice",
              prompt: "Bei Funktionen, die nur durch genau ein Symbol bezeichnet werden und zwei Parameter haben,...",
              options: [
                "brauchen wir Excel nicht", 
                "bietet sich die Präfix-Notation an", 
                "nutzen wir die Infix-Notation",
                "trinke ich erstmal einen Kaffee",
              ],
              correctOptions: [2],
            },
            {
              _type: "task",
              number: "1",
              prompt: `Datenfluss und Terme`,
              content: `Stelle die Funktionen in deinem Heft (digital gespeichert ist auch in Ordnung) graphisch und in Term-Notation dar.
                <ol>
                  <li>Die Funktion <my-em>Abs</my-em> hat einen Parameter <my-em>Zahl</my-em>. Sie berechnet den Betrag (auch ABSolutbetrag) der Zahl</li>
                  <li>Die Funktion <my-em>Zufallszahl</my-em> hat keinen Parameter. Sie liefert eine zufällige Zahl zwischen 0 und 1.</li>
                  <li>Die Funktion <my-em>Fakultät</my-em> hat einen Parameter <my-em>Zahl</my-em>. Sie berechnet die Fakultät (!) der Zahl</li>
                </ol>`,
              solution: `<grid-container class="media-left">
                  <dataflow-diagram>
                    <dataflow-params>
                      <dataflow-parameter>Zahl</dataflow-parameter>
                    </dataflow-params>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-function>
                      Abs
                    </dataflow-function>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-result>
                      gerundete Zahl
                    </dataflow-result>
                  </dataflow-diagram>

                  <p><my-code>Abs(Zahl)</my-code></p>

                  <dataflow-diagram>
                    <dataflow-function>
                      Zufallszahl
                    </dataflow-function>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-result>
                      zufällige Zahl
                    </dataflow-result>
                  </dataflow-diagram>

                  <p><my-code>Zufallszahl()</my-code></p>

                  <dataflow-diagram>
                    <dataflow-params>
                      <dataflow-parameter>Zahl</dataflow-parameter>
                    </dataflow-params>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-function>
                      Fakultät
                    </dataflow-function>
                    <dataflow-arrows>
                      <span class="arrow is-triangle arrow-bar is-bottom"></span>
                    </dataflow-arrows>
                    <dataflow-result>
                      Fakultät Ergebnis
                    </dataflow-result>
                  </dataflow-diagram>

                  <p><my-code>Fakultät(Zahl)</my-code></p>
                </grid-container>`,
            },
            {
              _type: "task",
              number: "2",
              prompt: `Funktionsaufrufe`,
              content: `Vervollständige im Heft (oder digital gespeichert) folgende Funktionsaufrufe:
                <ol>
                  <li>Runden(-4,5; 0) &rarr;</li>
                  <li>Aufrunden(-4,5; 0) &rarr;</li>
                  <li>Abrunden(-4,5; 0) &rarr;</li>
                  <li>6^5 &rarr;</li>
                  <li>Pi() &rarr;</li>
                  <li>Zufallszahl() &rarr;</li>
                  <li>Fakultät(10) &rarr;</li>
                </ol>`,
              solution: `Vervollständige im Heft (oder digital gespeichert) folgende Funktionsaufrufe:
                <ol>
                  <li>Runden(-4,5; 0) &rarr; -5</li>
                  <li>Aufrunden(-4,5; 0) &rarr; -5</li>
                  <li>Abrunden(-4,5; 0) &rarr; -4</li>
                  <li>6^5 &rarr; 7776</li>
                  <li>Pi() &rarr; 3,14159265...</li>
                  <li>Zufallszahl() &rarr; 0,2938642986234 (eine zufällige Zahl zwischen 0 und 1)</li>
                  <li>Fakultät(10) &rarr; 3628800</li>
                </ol>`,
            },
            {
              _type: "task",
              number: "3",
              prompt: `Datenfluss in TKP`,
              content: `Öffne die Datei <a href="/${base}/funktionsaufrufe.ods"><my-code>funktionsaufrufe.ods</my-code></a>.<br />
                <ol>
                  <li>
                    In der Tabelle <my-em>RUNDEN</my-em> soll der Aufruf <my-code>Runden(2,56; 1) &rarr; 2,6</my-code> dargestellt werden
                    <my-tip>
                      Auf Runde Ecken verzichten wir hier.<br />
                      Der Funktionsbezeichner sollte im Kasten stehen<br />
                      Der eigentliche Funktionsaufruf erfolgt in Zelle <my-em>C11</my-em>: <my-code>=Runden(C3; F3)</my-code>
                    </my-tip>
                  </li>
                  <li>
                    Genau so sollen in den Tabellen <my-em>WURZEL</my-em>, <my-em>PI</my-em>, <my-em>+</my-em> und <my-em>ZUFALLSZAHL</my-em>
                    die folgenden Aufrufe dargestellt werden:
                    <flex-container>
                      <span><my-code>Wurzel(49) &rarr; 7</my-code></span>
                      <span><my-code>Pi() &rarr; 3,141592...</my-code></span>
                      <span><my-code>3 + 5 &rarr; 8</my-code></span>
                      <span><my-code>Zufallszahl() &rarr; ...?</my-code></span>
                    </flex-container>
                    
                  </li>
                </ol>`,
            },
            {
              _type: "task",
              number: "4",
              prompt: `Funktionen vs. Funktionen`,
              content: `Im Mathematikunterricht sind dir auch Funktionen begegnet.<br />
                Stelle Gemeinsamkeiten und Unterschiede gegenüber.`,
              solution: `Die Funktionen im Mathematikunterricht haben in der Regel Funktionsbezeichner wie <my-eM>f, g</my-eM> usw., die nur aus einem Buchstaben bestehen, 
                in der Informatik nutzen wir aussagekräftigere Namen, z.B. <my-em>Runden</my-em>.
                <br /><br />
                Sie besitzen (im Rahmen der Schulmathematik) immer genau einen Parameter (meist <my-em>x</my-em>). <br />
                Sie liefern ebenfalls genau ein Ergebnis, den Funktionswert. Mit <my-eM>f(x)</my-em> kommt die Termnotation (Präfixschreibweise) zur Anwendung.
                <br /><br />
                Als Datentyp für Ein- und Rückgabewert kommt im Mathematikunterricht nur Zahl in Frage, in der Informatik können alle möglichen Datentypen genutzt werden 
                (z. B. auch Worte).`,
            },
            {
              _type: "task",
              number: "5",
              prompt: `Caesar war ein schlauer Mann`,
              content: `<p><my-em>Qrva Yruere uäggr urhgr orvanur irefpuynsra.</my-em></p>

                <p>Finde heraus, was sich hinter diesem verschlüsselten Satz verbirgt, indem du die Funktion <my-code>ROT13(Text)</my-code> 
                (geht nur in LibreOffice Calc!) anwendest. Wie arbeitet die Funktion genau?<p>`,
              solution: `<p><my-em>Dein Lehrer hätte heute beinahe verschlafen.</my-em></p>

                <p>Die Funktion nutzt eine Verschiebung (ROTation) des Alphabets um 13 Buchstaben.<p>`,
            },
            {
              _type: "task",
              number: "6",
              prompt: `(UNI)CODES`,
              content: `<p>Jedes Zeichen eines Textes ist im Rechner als Code gespeichert. 
                Die Funktion <my-code>Unicode()</my-code> liefert zu einem gegebenen Zeichen den Code des standardisierten Unicode-Zeichensatzes. 
                Umgekehrt gibt die Funktion <my-code>Unizeichen()</my-code> zu einem gegebenen Code das entsprechende Zeichen.</p>

                Erstelle eine Tabelle, auf der alle Zeichen mit den Codes 32 bis ca. 12000 erscheinen.`,
              solution: `Drei Spalten, beginnend z.B. in A1: 
                <grid-container class="no-gap">
                  <my-code>1</my-code>
                  <my-code>=Unizeichen(A1)</my-code>
                  <my-code>2</my-code>
                  <my-code>=Unizeichen(A2)</my-code>
                  ...
                </grid-container>`,
            },
            {
              _type: "task",
              number: "7",
              prompt: `Feiertage und Urlaub`,
              content: `In LibreOffice Calc gibt es die Funktion <my-code>Ostersonntag(Jahr)</my-code>.
                <p>Der Feiertag Christi Himmelfahrt findet immer genau 39 Tage nach dem Ostersonntag statt. Das ist immer ein Donnerstag.</p>

                <p>Prof. Urlaub überlegt sich: Wenn Christi Himmelfahrt auf den 30. April fällt, dann ist am nachfolgenden Freitag, den ersten Mai 
                ebenfalls Feiertag, so dass ein verlängertes Wochenende entsteht.

                Finde mit Hilfe von Calc heraus, in welchem Jahr Prof. Urlaubs Überlegungen als nächstes eintreffen.</p>`,
            },
            {
              _type: "task",
              number: "8",
              prompt: ``,
              content: `<p>Jede positive reelle Zahl lässt sich in eine Summe aus einer ganzen Zahl und einem Rest zwischen 0 und 1 zerlegen. 
                Ist dieser Rest ungleich null, so lässt er sich als Bruch mit 1 im Zähler schreiben. Den Nenner dieses Bruchs kann man wieder auf 
                gleiche Weise in eine Summe zerlegen, deren Rest als Bruch geschrieben wird usw.</p>

                <p>Führt man das Verfahren weiter fort, so entsteht ein Kettenbruch. Man spricht von der Kettenbruchentwicklung einer Zahl.</p>

                <flex-container class="align-upper">
                  <my-em>Beispiel:</my-em> Kettenbruchentwicklung für &pi; (3,141592...):<br />
                  <img src="/${base}/kettenbruchentwicklung.png" class="colorover" />
                </flex-container>
                <br /><br />
                <flex-container>
                  <span style="max-width: 60%" >Erstelle ein Tabellendokument, in dem die Kettenbruchentwicklung einer gegebenen (veränderbaren!) Zahl berechnet wird (siehe Tabelle).
                  Untersuche die Kettenbruchentwicklung von Quadratwurzeln natürlicher Zahlen.</span>
                  <img src="/${base}/kettenbruchentwicklung_tabelle.png" style="max-width: 30%" />
                </flex-container>`,
            },
          ],
        },
      ],
    },
  ],
}