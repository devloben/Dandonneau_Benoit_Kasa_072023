import "./_footer.scss"
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/img/logo_kasa_white.png'

function Footer() {
  return (
    
    <footer className="k-footer-container">
      <div className="k-footer"> 
        <Link to="/">
          <img src={logoWhite} alt='logo Kasa' className='k-logo-footer' />
        </Link>
        <div className="k-footer-copyright">
          © 2020 Kasa. All rights reserved
        </div> 
      </div>
    </footer>
  )
}

export default Footer