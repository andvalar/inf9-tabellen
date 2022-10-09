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
                  <my-tip><span>Tipp f:</span> Nutze gemischte Adressierung: Denke immer darüber nach, was "festgehalten" werden muss und was nicht.</my-tip></li>
                  <li>In der Tabelle <my-em>Stammbruchsumme</my-em> geht es um die Summe der ersten 1000 Stammbrüche: 
                  <img src="/${base}/stammbruchsumme.png" / class="colorover"><br />
                  Schätze zuerst die Summe, berechne sie dann.</li>
                  <li>Wechsle zur Tabelle <my-em>Wertetabelle</my-em>. Hier sollen Wertetabellen für lineare Funktionen erstellt werden.
                  Dabei ist die Steigung m, der y-Achsenabschnitt t, der Startwert für x sowie der Abstand zweier x-Wert der Tabelle frei wählbar.</li>
                  <li>Folgende Abbildung zeigt das pascalsche Dreieck:<br />
                  <img src="/${base}/pascalsches_dreieck.png" / class="colorover"><br />
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
                <img src="/${base}/term.png" / class="colorover" alt="(1 + 1/n)^n"><br /><br />
                Untersuche in einer Tabelle, wie sich der Wert des Terms verändert, wenn n immer größer wird.`,
            },
            {
              _type: "task",
              number: "8",
              prompt: "Kettenbruch",
              content: `Finde heraus, was sich hinter folgendem Kettenbruch verbirgt:<br />
                <img src="/${base}/kettenbruch.png" / class="colorover">
                <my-tip><span>Tipp:</span> Erstelle zuerst Tabellenspalten, in denen z.B. für n=1,...,50 die Werte von 2n-1 und n^2 stehen.
                Anschließend berechnest du in einer weiteren Spalte von unten nach oben nacheinander die Nenner.</my-tip>`,
            },
          ],
        },
        {
          title: "Funktionen",
          name: "funktionen",
          content: [  // array of entrys, tasks...
            {
              _type: "intro",
              content: `Die Berechnungen, die du bisher mithilfe von Formeln durchgeführst hast, haben sich oft aus mehreren 
                Rechenschritten zusammengesetzt. 
                Einen solchen Rechenschritt nennen wir im folgenden Funktion. Hier wirst du noch einige weitere, hilfreiche Funktionen
                kennenlernen, um komplexere Aufgaben (oft einfacher) zu lösen. <br />
                Außerdem lernst du, Funktionen (und später Verkettung von Funktionen) graphisch darzustellen. Solche graphischen
                Darstellungen wirst du nutzen, um komplexe Berechnungen zuerst zu modellieren (also gedanklich zu sortieren) und sie dann
                als Formel zu schreiben.<br />
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
                </dataflow-diagram>`,
            },
            /*{
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
            },*/
          ],
        },
      ],
    },
  ],
}