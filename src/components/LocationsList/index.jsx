import "./_locations-list.scss"
import datas from '../../datas/logements.json'
import Card from '../Card'

function LocationsList() {
  const locations = datas

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











