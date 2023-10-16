import { Link } from 'react-router-dom'

const ShipDetails = ({shipDetails, pilots, isLoadingPilotData}) => {
  return (
    <div className={shipDetails}>
      <h2>Name: {shipDetails.name.toLowerCase()}</h2>
      <h2>model: {shipDetails.model.toLowerCase()}</h2>
      <ul>pilots:
        {pilots.length ?
          pilots.map(pilot => 
            <li key={pilot.name}>{pilot.name.toLowerCase()}</li>
            )
            :
            <>
            {isLoadingPilotData ?
              <h3>no pilots for this ship!</h3>
              :
              <h3>loading pilots...</h3>
            }
          </>
        }
      </ul>
      <h3>hyperdrive rating: {shipDetails.hyperdrive_rating}</h3>
      <Link to='/ships'><button>BACK</button></Link>
    </div>
  )
}

export default ShipDetails