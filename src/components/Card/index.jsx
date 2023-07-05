import './_card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

Card.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string
}

export default Card