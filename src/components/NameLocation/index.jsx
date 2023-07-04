import "./_name-location.scss"

function NameLocation(props) {
  
  return (
    <div>
      <div className="k-name-location">
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
      </div>
    </div>
  )
}

export default NameLocation