import './index.css'
import Person1 from '../../assets/person-11.avif'
import Person2 from '../../assets/person-4.avif'
import Person3 from '../../assets/person-8.avif'
import Person4 from '../../assets/person-5.avif'
import Person5 from '../../assets/person-10.avif'
import { Link } from 'react-router-dom'

const Opinions = ()=>{
    return(
        <>
        <div className='persons-edit'>
            <div className='says-button'>
            <div className='says-edit'>
                <div className='says-edit1'>Reviews_______________________</div>
                <div className='says-edit2'>What they're saying about us</div>
            </div>
            <div className='review-button'>
                <Link to = '/'>
                    <button className='review-button2'>Home</button>
                    </Link>

                </div>
                </div>
            <div className='person-1'>
                <div className='text-2'>"Meraki is a hidden gem! From the moment I stepped in, I was blown away by the ambiance and warmth of the place. The food was an absolute delight - each dish was expertly prepared and bursting with flavor. The staff were attentive and friendly, making sure our dining experience was nothing short of perfect. I can't wait to come back and try more of their exquisite menu!" - Saraj H."</div>
                <div>
                    <img className='image-2' src={Person1}></img>
                </div>
            </div>
            <div className='person-2'>
                <div className='text-2'>"I recently hosted a corporate event at Meraki, and I couldn't be happier with the outcome. The team at Meraki was incredibly accommodating, helping me plan every aspect of the event from start to finish. The food was outstanding, and my colleagues couldn't stop raving about it. The ambiance of the restaurant lent a sophisticated yet relaxed vibe, perfect for networking and building connections. Meraki exceeded my expectations, and I look forward to hosting future events here." - Alex C.</div>
                <div>
                    <img className='image-2' src={Person2}></img>
                </div>
            </div>
            <div className='person-3'>
                <div className='text-2'>"My birthday celebration at Meraki was beyond my wildest expectations! The private dining room was beautifully decorated, creating the perfect atmosphere for an intimate gathering with my friends. The menu was diverse and offered something for everyone, and the cocktails were top-notch. The staff went above and beyond to ensure every detail was taken care of, making it a truly memorable experience. I highly recommend Meraki for any special occasion!" - Michael L.</div>
                <div>
                    <img className='image-2' src={Person3}></img>
                </div>
            </div>
            <div className='person-4'>
                <div className='text-2'>"Meraki is my go-to spot for date nights, and it never disappoints! The cozy yet elegant atmosphere sets the stage for a romantic evening, and the food is always exceptional. We love trying new dishes from their ever-changing menu, and we're never disappointed. The staff are always friendly and attentive, making us feel right at home. If you're looking for a memorable dining experience, look no further than Meraki!" - Emily M.</div>
                <div>
                    <img className='image-2' src={Person4}></img>
                </div>
            </div>
            <div className='person-5'>
                <div className='text-2'>"I recently had the pleasure of dining at Meraki with my family, and it was truly a culinary journey. The menu offered a fantastic variety of options, making it easy to cater to everyone's tastes. The food was beautifully presented and tasted even better than it looked. The service was impeccable - our server was knowledgeable and attentive, ensuring that we had everything we needed throughout the meal. Meraki exceeded all of our expectations, and we can't wait to return!" - Jessy W.</div>
                <div>
                    <img className='image-2' src={Person5}></img>
                </div>
            </div>
            </div>
        </>
    )
}

export default Opinions