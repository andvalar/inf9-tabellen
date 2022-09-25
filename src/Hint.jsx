import { useState } from 'react'
import './App.css'

const clsx = (...classes) => classes.filter(Boolean).join(" ")

export function Hint({ hint, image }) {  
  const [isHintVisible, setIsHintVisible] = useState(false)

  return (

    <my-hint>
      !isHintVisible && <button onClick={() => setIsHintVisible(true)} className="hintButton">Tipp</button>
      isHintVisible && <flex-container>
        { 
          image &&
            <img src={ image } />
        }
        <hint-text>{ hint }</hint-text>
      </flex-container>
    </my-hint>
  )
}