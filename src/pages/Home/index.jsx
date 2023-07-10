import './_home.scss'
import Banner from '../../components/Banner'
import imgBanner from '../../assets/img/header.png'
import LocationsList from '../../components/LocationsList'

function Home() {

  return (
    <>
      <div className='k-wrapper'>
        <Banner>
          <img src={imgBanner} className='k-banner-img' alt='Côte rocheuse escarpée enveloppée de brumes' />
          <div className='k-banner-title'>Chez vous, partout et ailleurs</div>
        </Banner>
        <LocationsList />
      </div>
    </>
  )
}

export default Home