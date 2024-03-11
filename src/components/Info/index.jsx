import './index.css'
import Table from '../../assets/table-logo.avif'
import { Link } from 'react-router-dom'

const Info = ()=>{
    return(
        <>
        <div className='info-class'>
            <div className='begin-begin'>
            <div className='begin-2'>
                <div className='begin-2edit'>About us___________________________</div>
                <div className='begin-3edit'>Learn more about our Restaurant</div>
            </div>
            <div className='begin-button'>
                <Link to='/'>
                <button className='begin-button2'>Home</button>
                </Link>
            </div>
            </div>
            <div className='begin-1'>
            <div className='edit-1' >
            <p>"Welcome to Meraki, where passion meets flavor in every dish we serve. Our journey began with a simple desire to create a culinary experience that goes beyond mere sustenance – we wanted to craft moments of pure delight for our guests. Derived from the Greek word meaning "to do something with soul, creativity, or love," Meraki embodies our commitment to infuse every aspect of our restaurant with this essence.</p>
        <p>Our story is one of love for food and community. Founded by a team of seasoned chefs and food enthusiasts, Meraki is more than just a place to eat; it's a celebration of gastronomic artistry. Drawing inspiration from diverse culinary traditions and local ingredients, we have curated a menu that tantalizes the taste buds and satisfies the soul.</p>
        <p>At Meraki, we believe in the power of connection. Whether you're enjoying a quiet dinner for two or hosting a lively gathering with friends and family, our warm and inviting ambiance sets the stage for unforgettable moments. We take pride in creating an inclusive space where everyone feels welcome and cherished.</p>
        <p>Our commitment to excellence extends beyond the kitchen. From our carefully curated wine selection to our attentive service, every detail is thoughtfully chosen to enhance your dining experience. We invite you to savor the flavors, share stories, and create memories that will last a lifetime at Meraki.</p>
        <p>Join us for our special events, where we showcase the best of our culinary creations paired with live music, wine tastings, and themed evenings. From seasonal celebrations to chef's table experiences, there's always something new and exciting happening at Meraki.</p>
        <p>Thank you for choosing Meraki as your culinary destination. We look forward to sharing our passion for food, community, and creativity with you."</p>
            </div>
            <div className='edit-2'>
                <img src={Table}></img>
            </div>
            </div>
            </div>
        </>
    )
}

export default Info