import "./_card.scss"
import { Link } from "react-router-dom"

function Card({ id, cover, title }) {

  return (
    
    <Link to={`/location/${id}`}>
    <li className="k-card">
      <div className="k-card-title">{title}</div>
      <div className="k-card-gradient"></div>
      <img src={cover} alt={title} className="k-card-img" />
    </li>
    </Link>
  )
}

export default Card

