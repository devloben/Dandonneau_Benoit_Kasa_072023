import "./_host.scss"
import PropTypes from 'prop-types'


function Host({name, picture}) {

const [firstName, lastName] = name.split(' ')

  return (
    
    <div>
      <div className="k-host-wrapper">
        <div className='k-host-name'>
          <h3>{firstName}<br />{lastName}</h3> 
        </div>
          <img src={picture} alt={name} className='k-host-img'/>
      </div>
    </div>
  )
} 

Host.propTypes= {
  name: PropTypes.string,
  picture: PropTypes.string,
}

export default Host 