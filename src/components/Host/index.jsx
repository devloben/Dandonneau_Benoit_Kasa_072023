import "./_host.scss"

function Host(props) {
console.log(props.name)
const [firstName, lastName] = props.name.split(' ')
console.log(firstName)
console.log(lastName)
  
  return (
    <div>
      <div className="k-host-wrapper">
        <div className='k-host-name'>
          <h3>{firstName}<br />{lastName}</h3> 
        </div>
          <img src={props.picture} alt={props.name} className='k-host-img'/>
      </div>
    </div>
  )
}

export default Host 