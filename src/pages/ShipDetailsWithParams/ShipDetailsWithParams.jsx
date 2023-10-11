import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import * as apiService from '../../services/apiService'
import ShipDetails from "../../components/ShipDetails/ShipDetails"

const ShipDetailsWithParams = () => {
  const {shipId} = useParams()
  const [shipDetails, setShipDetails] = useState({})
  const [isLoadingPilotData, setIsLoadingPilotData] = useState(true)
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipData = await apiService.getShipData(shipId)
      setShipDetails(shipData)
      if (shipData.pilots.length) {
        const fetchPilotData = async () => {
          const pilotData = await apiService.getPilots(shipData.pilots)
          setPilots(pilotData)
        }
        fetchPilotData()
        setIsLoadingPilotData(false)
      } 
    }
    fetchShipDetails()
  })


  if (!shipDetails.name) return <h2>Please wait... Loading Ship...</h2>

  return (
    <ShipDetails 
      pilots={pilots} 
      isLoadingPilotData={isLoadingPilotData} 
      shipDetails={shipDetails} 
    />
  )
}

export default ShipDetailsWithParams