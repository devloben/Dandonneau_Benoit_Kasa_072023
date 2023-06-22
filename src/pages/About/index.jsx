import "./_about.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import imgBanner from "../../assets/img/apropos.png"


function About() {
 
  return (
    <div>
      <div className="k-wrapper">
        <Header />
        <Banner>
          <img src={imgBanner} className='k-banner-img' alt="Banner" />
        </Banner>
        <div className="k-collapse-wrapper">
          <Collapse 
            title="Fiabilité" 
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
          <Collapse 
            title="Respect" 
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
          <Collapse 
            title="Service" 
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
          <Collapse 
            title="Sécurité" 
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About