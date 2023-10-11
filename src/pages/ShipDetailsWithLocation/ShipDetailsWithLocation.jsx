import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import * as apiService from '../../services/apiService'
import ShipDetails from "../../components/ShipDetails/ShipDetails"


const ShipDetailsWithLocation = () => {
  const location = useLocation()
  const [shipDetails, setShipDetails] = useState(location.state.ship)
  const [isLoadingPilotData, setIsLoadingPilotData] = useState(true)
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    if (shipDetails.pilots.length) {
      const fetchPilotData = async () => {
        const pilotData = await apiService.getPilots(shipDetails.pilots)
        setPilots(pilotData)
      }
      fetchPilotData()
      setIsLoadingPilotData(false)
    } 
  }, [shipDetails])

  return (
    <ShipDetails 
      pilots={pilots} 
      shipDetails={shipDetails} 
      isLoadingPilotData={isLoadingPilotData} 
    />
  )
}

export default ShipDetailsWithLocation