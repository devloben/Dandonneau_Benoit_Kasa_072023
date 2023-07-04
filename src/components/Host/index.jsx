import "./_host.scss"

function Host(props) {
  
  return (
    <div>
      <div className="k-host-wrapper">
        <div className='k-host-name'>
          <h3>{props.name}</h3>
        </div>
          <img src={props.picture} alt={props.name} className='k-host-img'/>
      </div>
    </div>
  )
}

export default Host