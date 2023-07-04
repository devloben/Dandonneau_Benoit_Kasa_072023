import "./_banner.scss"
import { useLocation } from 'react-router-dom'

function Banner({children}) {
  const locationPage = useLocation()

  let className = ''

  if (locationPage.pathname !== '/about') {
    className = 'k-banner-container'
  } else if (locationPage.pathname === '/about') {
    className = 'k-banner-container-about'
  }
  
  return (
    
    <div className={className}>
      {children}
    </div>
  )
}

export default Banner