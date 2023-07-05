import "./_name-location.scss"
import PropTypes from 'prop-types'

function NameLocation({title, location}) {
  
  return (
    <div>
      <div className="k-name-location">
        <h2>{title}</h2>
        <h3>{location}</h3>
      </div>
    </div>
  )
}

NameLocation.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string
}

export default NameLocation