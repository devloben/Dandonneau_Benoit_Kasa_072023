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
import datas from '../../datas/logements.json'


function Location() {

  const locations = datas
  const { locationId } = useParams()
  const locationSelect = locations.find(el => el.id === locationId)

  const equipments = locationSelect.equipments.map((equipment) =>
    <li key={equipment.toString()}>{equipment}</li>
  )

  return (
    <>
      <div className="k-wrapper">
        <Header />
        <div className="k-location-wrapper">
          <Carousel
            pictures={locationSelect.pictures}
            title={locationSelect.title} />
          <div className='k-location-infos'>
            <div className="k-location-left">
              <NameLocation
                title={locationSelect.title}
                location={locationSelect.location}
              />
              <Tag
                tags={locationSelect.tags} />
            </div>
            <div className="k-location-right">
              <Host
                name={locationSelect.host.name}
                picture={locationSelect.host.picture}
              />
              <Rating
                rating={locationSelect.rating} />
            </div>
          </div>
          <div className='k-location-retail'>
            <div className="k-location-description">
              <Collapse
                title="Description"
                content={locationSelect.description} />
            </div>
            <div className="k-location-equipements">
              <Collapse
                title="Equipements"
                content=<ul>{equipments}</ul> />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Location