import './index.css'
import logo from '../../assets/logo.png'

const NavBar = ()=>{
    return(
        <>
        <nav>
           <div className='edit-1'>
            <img src={logo}></img>
            </div>
          <div className='edit-2'>
        <div>Home</div>
        <div>About</div>
        <div>Menu</div>
        <div>Events</div>
        <div>Reviews</div>
        <div>Contacts</div>
        <button>Book a table</button>
           </div> 
        </nav>
        
        </>
    )
}

export default NavBar