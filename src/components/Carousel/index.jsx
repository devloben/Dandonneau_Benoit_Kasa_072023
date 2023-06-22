import "./_carousel.scss"
import imgCarousel from '../../assets/img/carrousel.jpg'

function Carousel() {
  return (
    <div className="k-carousel-wrapper">
      <img src={imgCarousel} alt="carousel" />
      <div className="k-carousel-nav">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="k-carousel-page-number">1/4</div>
    </div>
  )
}

export default Carousel