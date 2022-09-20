import { useState } from 'react'
import './App.css'
import { Intro } from './Intro'
import { Entry } from './Entry'
import { MultipleChoice } from './MultipleChoice'
import { Task } from './Task'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Lesson() {

  return (
    <div>
      <Intro />
      <Entry />

      <MultipleChoice 
        prompt={ "Was ist ein Tabellenkalkulationsprogramm?" } 
        options={ [
          "Software zum Schreiben und Designen von Tabellen", 
          "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
          "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden",
        ] } 
        correctOptions={ [
          1
        ] } 
      />

      <Task
        prompt={ "Aufgabe 1a: Dein erstes Tabellendokument" } 
        description={ 
          "Erstelle ein Tabellendokument, z.B. mit Microsoft Excel oder LibreOffice Calc. Speichere es in deinen Dokumenten im Ordner 'Info 9' unter dem Namen 'Erste-Tabelle' ab." 
        } 
      />
      <Task
        prompt={ "Aufgabe 1b: Bearbeite die Tabelle" } 
        description={ 
          "Bearbeite dein erstes Tabellendokument. Am Ende soll es ähnlich aussehen, wie die Beispieltabelle hier. Du kannst dafür ein Thema deiner Wahl darstellen, oder einfach die Tabelle möglichst genau übernehmen. Achte dabei auf die Verwendung von Schriftart, -farbe und -größe, Hintergrundfarbe, Hervorhebungen und Text-Stile, Textausrichtung (auch vertikal!), Darstellungsformat (achte auf die Zahlen!) sowie Rahmen." 
        } 
        image={ "1-1-task1.png" }
        hasImage="true"
      />
      <Task
        prompt={ "Aufgabe 1c: Verändere dein Tabellendokument" } 
        description={ 
          "Das Tabellendokument hat mehrere Tabellen (siehe Tabs unten links). Lösche eine der leeren Tabellen. Vervielfältige dann den Inhalt deiner ersten Tabelle, indem du alles markierst (Strg+A), kopierst (Strg+C) und dann in der leeren Tabelle einfügst (Strg+V). Sortiere dann eine Spalte (Daten --> Sortieren). Blende zum Schluss eine Spalte aus." 
        } 
      />
      <Task
        prompt={ "Aufgabe 2: Tabellengröße" } 
        description={ 
          "Finde heraus, wie viele Zeilen bzw. wie viele Spalten eine Tabelle hat." 
        } 
      />
      <Task
        prompt={ "Aufgabe 3: Diagramme in Tabellen" } 
        description={ 
          "Stelle die Informationen deiner Tabelle in verschiedenen Diagrammen dar. Benutze dafür das Menü oben: 'Einfügen' --> Art des Diagramms" 
        } 
      />
    </div>
  )
}