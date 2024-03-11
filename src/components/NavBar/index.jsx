import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Booking from '../../pages/Booking'

const NavBar = ()=>{
    return(
        <>
        <nav>
           <div className='edit-11'>
            <img src={logo}></img>
            </div>
          <div className='edit-23'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/events'>Events</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/booking'>
        <button className='button-home'>Book a table</button>
        </Link>
           </div> 
        </nav>
        
        </>
    )
}

export default NavBar