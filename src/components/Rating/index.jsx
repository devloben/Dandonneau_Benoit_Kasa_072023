import "./_rating.scss"
import PropTypes from 'prop-types'

function Rating({rating}) {
  
  const fullStars = rating
  const emptyStars = 5 - fullStars
  const fullStarType = <i className="fa-solid fa-star"></i>
  const emptyStarType = <i className="fa-regular fa-star"></i>  

  return (
    <div className='k-rating'>
      {Array.from({ length: fullStars }).map((_, index) =>(
        <span key={index}>{fullStarType}</span>
      ))}
      {Array.from({ length: emptyStars }).map((_, index) =>(
        <span key={index}>{emptyStarType}</span>
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string
} 

export default Rating