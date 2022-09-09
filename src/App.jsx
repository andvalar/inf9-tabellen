import { useState } from 'react'
import './App.css'
import { Nav } from './Nav'
import { MultipleChoice } from './MultipleChoice'

function App() {
  const [completed, setCompleted] = useState(0)
  const [topic, setTopic] = ""

  return (

    <>
      <Nav />
      <h1>Informatik 9</h1>
      <h2>Tabellenkalkulation</h2>
      <MultipleChoice 
        prompt={ "Was ist ein Tabellenkalkulationsprogramm?" } 
        options={ [
          "Software zum Schreiben und Designen von Tabellen", 
          "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
          "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden"
        ] } 
        correctOptions={ [
          1
        ] } 
      />
      <MultipleChoice 
        prompt={ "Was ist ein Tabellenkalkulationsprogramm?" } 
        options={ [
          "Software zum Schreiben und Designen von Tabellen", 
          "Software zum Erstellen und Verwalten von Tabellen, mit denen automatische Berechnungen gemacht werden können", 
          "Software zum Zeichnen von Tabellen, in denen Informationen aus dem Internet bezogen werden"
        ] } 
        correctOptions={ [
          2
        ] } 
      />
    </>
  )
}

export default App
