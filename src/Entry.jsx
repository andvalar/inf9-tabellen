import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Entry() {  

  return (
    <my-entry>
      <h1>Tabellendokumente</h1>
      <h2>Aufbau</h2>
      <flex-container>
        <img src="src/assets/1-1-cell_row_column.png" />
        <div>
          Ein Tabellendokument kann aus mehreren Tabellen bestehen. 
          Jede Tabelle enthält <span class="color-green">Zellen (hier: B4)</span>, die in <span class="color-blue">Zeilen (hier: 4)</span> und <span class="color-orange">Spalten (hier: B)</span> angeordnet sind.
          In einer Zelle kann ein Wert stehen.
        </div>
      </flex-container>

      <h2>Zellen formatieren</h2>
      <flex-container>
        <img src="src/assets/1-1-format_cell.png" />
        <div>
          Das Format einer Zelle bestimmt, wie der Inhalt dargestellt wird (z.B. als Dezimalzahl, Prozentangabe, Datum, Text...).
          Wir sprechen vom Datentyp der Zelle.<br /><br />
          Eine Zelle markierst du, indem du sie linksklickst.
          Wenn du eine nicht-markierte Zelle linksklickst, die Maustaste nicht loslässt und dann die Maus bewegst, 
          kannst du mehrere Zellen auf einmal markieren. <br />
          Einen markierten Bereich (natürlich auch einzelne Zellen) kannst du üblicherweise formatieren, 
          indem du ihn rechtsklickst und dann "Zelle formatieren" wählst.
        </div>
      </flex-container>
    </my-entry>
  )
}