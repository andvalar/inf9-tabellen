import { data } from './Data'
import { useParams } from "react-router"
import { Link } from "react-router-dom"


export function Header() {  

  return (
    <my-header>
      
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
    <my-footer>
      footer
    </my-footer>
  )
}