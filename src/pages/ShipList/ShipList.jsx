import * as apiService from '../../services/apiService'
import { useEffect, useState } from 'react'
import Ship from '../../components/Ship/Ship'
import styles from './ShipList.module.css'

const ShipList = () => {
  const [ships, setShips] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currPage, setCurrPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const fetchShipData = async () => {
      setIsLoading(true)
      const shipData = await apiService.getStarships(currPage)
      setShips(shipData.results)
      setPageCount(Math.ceil(shipData.count/10))
      setIsLoading(false)
    }
    fetchShipData()
  }, [currPage])

  const handleIncreasePageCount = () => {
    setCurrPage(currPage + 1)
  }

  const handleDecreasePageCount = () => {
    setCurrPage(currPage - 1)
  }

  if (isLoading) return <h2>please wait... loading ships...</h2>
  
  return (
    <>
      <div className={styles.paginationContainer}>
        {currPage > 1 && <h2 onClick={handleDecreasePageCount}>◄</h2>}
        <h2>page {currPage} of {pageCount}</h2>
        {currPage !== pageCount && <h2 onClick={handleIncreasePageCount}>►</h2>}
      </div>
      <div className={styles.shipContainer}>
        {ships.map(ship => 
          <Ship key={ship.name} ship={ship} />
        )}
      </div>
    </>
  )
}

export default ShipList