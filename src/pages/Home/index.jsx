import './_home.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import imgBanner from '../../assets/img/header.png'
import LocationsList from '../../components/LocationsList'

function Home() {

  return (
    <>
      <div className='k-wrapper'>
        <Header />
        <Banner>
          <img src={imgBanner} className='k-banner-img' alt='Côte rocheuse escarpée enveloppée de brumes' />
          <div className='k-banner-title'>Chez vous, partout et ailleurs</div>
        </Banner>
        <LocationsList />
        <Footer />
      </div>
    </>
  )
}

export default Home