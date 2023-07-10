import './_error.scss'
import { Link } from 'react-router-dom'

function Error() {

  return (
    <>
      <div className='k-wrapper'>
        <div className='k-error'>
          <h1 className='k-error-404'>404</h1>
          <h2 className='k-error-text'>Oups! La page que vous demandez n'existe pas</h2>
          <Link to="/" className='k-error-link'>Retourner sur la page d'accueil</Link>
        </div>
      </div>
    </>
  )
}

export default Error