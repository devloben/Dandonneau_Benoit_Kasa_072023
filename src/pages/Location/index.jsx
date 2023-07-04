import './_location.scss'
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useFetch} from '../../utils/hooks'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NameLocation from '../../components/NameLocation'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'

function Location() {

  const {data, isLoading, error} = useFetch(
    `http://localhost:3000/logements.json`
  )
  const { locationId } = useParams()
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (data) {
      setLoadingData(false)
    }
  }, [data])

  if (error) {
    return <span>Oups il y a eu un problème...</span> 
  }
  
  if (isLoading || loadingData) {
    return <span>chargement en cours...</span>
  }

  if (!data) {
    return null
  }

  const locations = data
  const locationSelect = locations.find(el => el.id === locationId)  
  
  if (!locationSelect) {
    return <Navigate to='/error' />
  }

  return (
    <>
      <div className='k-wrapper'>
        <Header />
          {isLoading ? (
            <div className='loader'></div>
          ) : (
            <div className='k-location-wrapper'>
              <Carousel
                pictures={locationSelect.pictures}
                title={locationSelect.title} 
              />
              <div className='k-location-infos'>
                <div className='k-location-left'>
                  <NameLocation
                    title={locationSelect.title}
                    location={locationSelect.location} 
                  />
                  <Tag
                    tags={locationSelect.tags} 
                  />
                </div>
                <div className='k-location-right'>
                  <Host
                    name={locationSelect.host.name}
                    picture={locationSelect.host.picture}
                  />
                  <Rating
                    rating={locationSelect.rating} 
                  />
                </div>
              </div>
              <div className='k-location-retail'>
                <div className='k-location-description'>
                  <Collapse
                    title='Description'
                    content={locationSelect.description} 
                  />
                </div>
                <div className='k-location-equipements'>
                  <Collapse
                    title='Equipements'
                    content={locationSelect.equipments.map((equipment, index) => ( 
                      <ul key={index}>
                        <li>{equipment}
                        </li>
                      </ul>
                      ))} 
                  />
                </div>
              </div>
            </div>
            )}
      </div>
      <Footer />
    </>
  )
}

export default Location