import "./_rating.scss"

function Rating(props) {

  const fullStars = props.rating
  const emptyStars = 5 - fullStars
  const fullStarType = <i className="fa-solid fa-star fa-2xl"></i>
  const emptyStarType = <i className="fa-regular fa-star fa-2xl"></i>  

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

export default Rating