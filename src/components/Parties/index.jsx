import './index.css'
import Birthday from '../../assets/birthday.avif'
import Custom from '../../assets/custom.avif'
import Private from '../../assets/private.avif'

const Parties = ()=>{
    return(
        <>
        <section>
          <div className='birthday'>
            <div className='text-1'><h1>Birthday Parties</h1>"Celebrate your birthday in absolute splendor at Meraki! Prepare to be enchanted by a culinary extravaganza specially crafted by our passionate chefs, featuring an array of delectable dishes that will tantalize your taste buds and leave you craving for more. Our dedicated team is committed to making your special day truly unforgettable, from personalized service to enchanting decorations that reflect your unique style and personality. Whether you're dreaming of an intimate gathering with close friends or a lavish party with all the bells and whistles, our versatile and elegant space is the perfect setting for your celebration. Let us turn your birthday into an extraordinary experience filled with laughter, joy, and cherished moments. Contact us today to reserve your spot and embark on a journey of indulgence and delight at Meraki!"</div>
            <div>
              <img className='image-1' src={Birthday}></img>
            </div>
          </div>
          <div className='private'>
            <div>
              <img className='image-1' src={Private}></img>
            </div>
            <div className='text-1'><h1>Private Parties</h1>"Experience unparalleled sophistication by hosting your next private party with us. Indulge in a culinary journey curated by our talented chefs, offering a tantalizing array of dishes sure to impress even the most discerning palate. Our dedicated event team will work closely with you to tailor every aspect of your celebration, from customizing the menu to arranging elegant decor, ensuring a personalized and seamless experience. With our stylish and versatile venue providing the perfect backdrop, your event will exude an atmosphere of refined elegance and charm. Whether it's a milestone birthday, an intimate anniversary, or a corporate gathering, let Meraki elevate your occasion to new heights. Contact us today to reserve your spot and embark on a journey of unforgettable moments and cherished memories!"</div>
          </div>
          <div className='custom'>
            <div className='text-1'><h1>Custom Parties</h1>"Indulge in the art of bespoke celebrations at Meraki, where we specialize in curating unforgettable events tailored precisely to your desires. Whether you envision an intimate soirée or a grand extravaganza, our versatile venue, exquisite cuisine, and attentive service promise to elevate every moment of your custom party experience. From personalized menus crafted by our talented chefs to themed decor that reflects your unique style, we're dedicated to bringing your vision to life in exquisite detail. With our commitment to excellence and attention to every aspect of your celebration, hosting your dream event at Meraki ensures an unforgettable experience for you and your guests. Contact us today to begin planning your custom party and embark on a journey of unparalleled indulgence and sophistication!"</div>
            <div>
              <img className='image-1' src={Custom}></img>
            </div>
          </div>
    </section>
        </>
    )
}

export default Parties