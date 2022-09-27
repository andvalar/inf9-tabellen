export const data = {
  // topic
  title: "Tabellenkalkulation",
  name: "tabellenkalkulation",
  content: [  // array of lessons
    {
      title: "Tabellendokumente",
      name: "tabellendokumente",
      content: [  // array of entrys, tasks...
        {
          _type: "intro",
          content: `Ein Tabellenkalkulationsprogramm ist eine Software, mit der man Tabellen erstellen und verwalten kann. 
              In diesem Tabellen kann der Computer automatische Berechnungen durchführen.`,
        },
        {
          _type: "multipleChoice",
          prompt: "",
          choices: [],
          correct: [],
        },
        {
          _type: "entry"
          title: "Tabellendokumente",
          content: [
            {
              title: "Aufbau",
              content: `Ein Tabellendokument kann aus mehreren Tabellen bestehen. 
                Jede Tabelle enthält <span className="color-green">Zellen (hier: B4)</span>, die in <span className="color-blue">Zeilen (hier: 4)</span> und <span className="color-orange">Spalten (hier: B)</span> angeordnet sind.
                In einer Zelle kann ein Wert stehen.`,
              entryImg: `1-1-cell_row_column.png`,
      
            },
          ],
        },
      ]
    }
  ]
}