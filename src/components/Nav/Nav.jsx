import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

import rebel from '../../assets/rebel.png'
import imperial from '../../assets/imperial.png'

const Nav = () => {
  return ( 
    <nav>
      <img src={rebel} alt="rebel alliance logo" />
      <NavLink to='/ships'>Star wars starships</NavLink>
      <img src={imperial} alt="imperial logo" />
    </nav>
  )
}

export default Nav