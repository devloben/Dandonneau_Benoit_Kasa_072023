
import "./_card.scss"



function Card({ cover, title }) {
  
function handleClick(loctionTitle) {
  console.log(`Vous avez choisi ${loctionTitle} ?`)
}

  return (
    
    
    <li className="k-card" onClick={() => handleClick(title)}>
      <div className="k-card-title">{title}</div>
      <div className="k-card-gradient"></div>
      <img src={cover} alt="cover" className="k-card-img" />


    </li>
  )
}

export default Card
