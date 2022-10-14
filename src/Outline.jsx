import { data } from './Data'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useState } from 'react'


export function Header() {  
  const [isDarkMode, setIsDarkMode] = useState(true)

  isDarkMode ? 
    document.body.classList.add('darkmode') : 
    document.body.classList.remove('darkmode')

  return (
    <my-header>
      <button 
        id="dark-mode-toggle" 
        aria-label="toogle dark mode"
        onClick={() => setIsDarkMode(!isDarkMode)} 
      >
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
          <path 
            fill="currentColor" 
            d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" 
            transform="translate(-8 -8)"
          />
        </svg>
      </button>
      
      <my-nav>
      {
        data.content[0].content.map(({title, name}, index) =>  // nur ein Topic - anpassen!
          <Link key={name} to={"/lesson/"+data.content[0].name+"/"+name}>{title}</Link>
        )
      }
      </my-nav>
    </my-header>
  )
}

export function Footer() {  

  return (
    <my-footer class="full-width">
      <flex-container>
        <div className="left">COPYRIGHT © {new Date().getFullYear()}</div>
        <div className="right">And</div>
      </flex-container>
    </my-footer>
  )
}