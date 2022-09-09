import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Mc } from './mc'

function App() {
  const [completed, setCompleted] = useState(0)
  const [topic, setTopic] = ""

  return (

    <>
      test
      <Mc 
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
      <Mc 
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
    /*
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Juhu! count is {count} !!!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    */
  )
}

export default App
