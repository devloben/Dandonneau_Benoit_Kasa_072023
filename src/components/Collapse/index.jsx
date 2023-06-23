import "./_collapse.scss"
import { useState } from "react"

function Collapse({ title, content }) {
  
  const [active, setActive] = useState(false)
  const handleToggle = e => {
    setActive(!active)
  }

  return ( 
    <div className={`k-collapse-wrapper ${active && "active"}`}>
      <div className="k-collapse-title" onClick={handleToggle}>{title} 
        <i className="fa-solid fa-chevron-up fa-xl"></i>
      </div>
      <div className="k-collapse-content">{content}</div> 
    </div>
  )
}

export default Collapse   