import "./_locations-list.scss"
import { useFetch } from '../../utils/hooks'
import Card from '../Card'

function LocationsList() {

  const {data, isLoading, error} = useFetch(
    `http://localhost:3000/logements.json`
    )
 
    if (isLoading){
      return <div className='loader'></div>
    }
    const locations = data
    
  if (error) {
    return <span>Oups il y a eu un problème...</span>
  }

  

  return (
    <ul className='k-location-list-wrapper'>
      {locations.map(({ id, cover, title }) => (
        <div key={id}>
          <Card
            id={id}
            cover={cover}
            title={title}
          />
        </div> 
      ))}
    </ul>
  )
}

export default LocationsList