const topic = {
  titel: "Tabellenkalkulation",
  introHeading: "Tabellendokumente erstellen, verändern und formatieren",
  intro: `Ein Tabellenkalkulationsprogramm ist eine Software, mit der man Tabellen erstellen und verwalten kann. 
    In diesem Tabellen kann der Computer automatische Berechnungen durchführen.`,
  multipleChoice: [
    
  ]
  entry: {
    heading: `Tabellendokumente`,
    subEntries: [
      {
        Heading: `Aufbau`, 
        entryContent: `Ein Tabellendokument kann aus mehreren Tabellen bestehen. 
            Jede Tabelle enthält <span className="color-green">Zellen (hier: B4)</span>, die in <span className="color-blue">Zeilen (hier: 4)</span> und <span className="color-orange">Spalten (hier: B)</span> angeordnet sind.
            In einer Zelle kann ein Wert stehen.`,
        entryImg: `1-1-cell_row_column.png`,
      }
      {
        Heading: `Zellen formatieren`, 
        entryContent: `Das Format einer Zelle bestimmt, wie der Inhalt dargestellt wird (z.B. als Dezimalzahl, Prozentangabe, Datum, Text...).
          Wir sprechen vom Datentyp der Zelle.<br /><br />
          Eine Zelle markierst du, indem du sie linksklickst.
          Wenn du eine nicht-markierte Zelle linksklickst, die Maustaste nicht loslässt und dann die Maus bewegst, 
          kannst du mehrere Zellen auf einmal markieren. <br />
          Einen markierten Bereich (natürlich auch einzelne Zellen) kannst du üblicherweise formatieren, 
          indem du ihn rechtsklickst und dann "Zelle formatieren" wählst.`,
        entryImg: `1-1-format_cell.png`,
      }
    ]
  }

  tasks: [
    {

    }
  ]
}

// markdown parser für react... mit color?