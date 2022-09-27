import { useState } from 'react'
import './App.css'
import { data } from './Data'
import { LessonPage } from './Topic'
import { Header, Footer } from './Outline'
//import { ScrollToTop } from './Util'
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom"

function App() {
  const [completed, setCompleted] = useState(0)

  return (

    <>
      <BrowserRouter basename={ `/${data.name}` }>
        {/*<ScrollToTop>*/}
          <Header />
            <Routes>
              <Route path="lesson/:topic/:lesson" element={ <LessonPage /> } />
              {/*<Route path="topics" element={ <ToC/> } />*/}
              <Route path="/" element={ <Navigate to="lesson/tabellen/tabellendokumente" /> } />
              <Route path="*" element={ "Not found" } />
            </Routes>
          <Footer />
        {/*</ScrollToTop>*/}
      </BrowserRouter>
    </>
  )
}



export default App