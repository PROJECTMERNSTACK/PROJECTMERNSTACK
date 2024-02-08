import React from 'react';
import './Testimonials.css';

import per01 from '../../file/image/Person-1.jpg';
import per02 from '../../file/image/Person-2.jpg';
import per03 from '../../file/image/Person-3.jpg';
import per04 from '../../file/image/Person-4.jpg';
import per05 from '../../file/image/Person-5.jpg';
import per06 from '../../file/image/Person-6.jpg';

const Testimonials = () => {
   return (
      <>
         <div className="per01">
            <p>Our family trip organized by Vista Quest was truly unforgettable. From the breathtaking views to the seamless logistics, every aspect of the journey exceeded our expectations. We can't wait to book our next adventure with them!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per01} className='img1' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>John Doe</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="per02">
            <p>I've traveled with Vista Quest multiple times, and each trip has been a delight. Their attention to detail, knowledgeable guides, and commitment to sustainability make them stand out from the rest. Highly recommend!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per02} className='img2' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>Devy Jones</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="per03">
            <p>Vista Quest exceeded my expectations in every way possible. From the moment I booked my trip to the moment I returned home, everything was seamless. I can't wait to explore more destinations with them!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per03} className='img3' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>Lia Franklin</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="per04">
            <p>The team at Vista Quest goes above and beyond to ensure that every traveler has a memorable experience. Their passion for travel is evident in everything they do. I wouldn't trust anyone else with my adventures!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per04} className='img4' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>Karls Marn</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="per05">
            <p>My recent trip with Vista Quest was nothing short of incredible. From exploring hidden gems to indulging in delicious local cuisine, every moment was filled with excitement and wonder. Can't wait to do it all over again!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per05} className='img5' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>Robert Brown</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="per06">
            <p>Vista Quest made my dream vacation a reality. Their knowledgeable guides and carefully curated itineraries ensured that I got the most out of my trip. I can't recommend them enough!</p>
            <div className='Per gap-4 mt-3'>
               <img src={per06} className='img6' alt="" />
               <div>
                  <h6 className='name mb-0 mt-3'>Peter Dan</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Testimonials;
