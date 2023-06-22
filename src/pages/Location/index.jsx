import "./_location.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import NameLocation from "../../components/NameLocation"
import Host from "../../components/Host"
import Tag from "../../components/Tag"
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"
import Carousel from "../../components/Carousel"
import { useParams } from "react-router-dom"


function Location() {

  const {locationId} = useParams()
  console.log(locationId)

  return (
    <div>
      <div className="k-wrapper">
        <Header />
        <div className="k-location-wrapper">
          <Carousel />
          <div className='k-location-infos'>
            <div className="k-location-left">
              <NameLocation />
              <Tag />
            </div>
            <div className="k-location-right">
              <Host />
              <Rating />
            </div>
          </div>
            <div className='k-location-retail'>
              <div className="k-location-description">
                <Collapse title="Description" content="Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement. " />
              </div>
              <div className="k-location-equipements">
                <Collapse title="Equipements" content="Climatisation" />
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Location