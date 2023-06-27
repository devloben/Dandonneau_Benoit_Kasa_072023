import "./_header.scss"
import { NavLink } from 'react-router-dom'
import logoRed from '../../assets/img/logo_kasa_red.png'

function Header() {
  return (
    <nav className="k-nav-container">
      <NavLink to="/">
        <img src={logoRed} alt='logo Kasa' className='k-logo' />
      </NavLink>
      <div className='k-nav-links'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </div> 
    </nav>
  ) 
}

export default Header