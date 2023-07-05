import "./_carousel.scss"
import { useState } from "react"
import PropTypes from 'prop-types'

function Carousel({pictures, title}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1))
  }
  const handlePrev = () => {
    setCurrentIndex((index) => (index === 0 ? pictures.length -1 : index - 1))
  }

const showNavCarousel = pictures.length > 1

  return (
    <div className="k-carousel-wrapper">
      <img src={pictures[currentIndex]} className="k-carousel-img" alt={title}/>
      {showNavCarousel && 
        <div className="k-carousel-nav">
          <i className="fa-solid fa-chevron-left" onClick={handlePrev}></i>
          <i className="fa-solid fa-chevron-right" onClick={handleNext}></i>
        </div>
      }
      {showNavCarousel && 
        <div className="k-carousel-page-number">{`${currentIndex + 1}/${pictures.length}`}</div>
      }
    </div>
  )
} 

Carousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string
}

export default Carousel