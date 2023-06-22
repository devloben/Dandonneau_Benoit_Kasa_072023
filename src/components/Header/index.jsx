import "./_header.scss"
import { Link } from 'react-router-dom'
import logoRed from '../../assets/img/logo_kasa_red.png'

function Header() {
  return (
    <nav className="k-nav-container">
      <Link to="/">
        <img src={logoRed} alt='logo Kasa' className='k-logo' />
      </Link>
      <div className='k-nav-links'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div> 
    </nav>
  )
}

export default Header