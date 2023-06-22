import "./_locations-list.scss"
// import { Link } from 'react-router-dom'
import datas from '../../datas/logements.json'
import Card from '../Card'

function LocationsList() {
  const locations = datas



  return (
      <ul className='k-home-container'>
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











