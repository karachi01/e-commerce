import './App.css'
import {useState} from "react"
import waterbottle from "./assets/waterbottle.JPG"
import toothbrush from "./assets/toothbrush.JPG"
import bamboobrush from "./assets/brush.JPG"
import bowl from "./assets/bowl.JPG"
import Navbar from './NavBar';



/* this is the normal format for react, you have to use multiple function components*/


function AnnouncementBar() {
  return (
    <div className='announcement-bar'>
      <p>Get 10% off your first order with code WATERBOTTLE</p>
    </div>
  )
}




function Heading() {
  return (
    <div className='heading'>
      <h4>Eco-friendly WaterBottle</h4>
    </div>
  )
}

function ProductImage() {
  return (
    <div className='picture'>
      <img src={waterbottle} className="waterbottle" alt="Water Bottle"></img>
    </div>
  )
}


/* this part was also added to create an addToCart click function */
function ProductInfo( {addToCart} ) {
  return (
    <div className='text-container'>
      <h2>Bamboo Waterbottle <span className="price">$29.99</span></h2>

      <div className='buttons-container'>
        <button className='add-to-cart' onClick={addToCart}> Add to Cart</button>
        
        <button className='buy-now'>Buy Now</button>
      </div>
<hr></hr>
      <div className='description'>
        <h4><strong>Description</strong></h4>
        <h5>Made from sustainably sourced bamboo, our eco-friendly water bottle is designed to keep you hydrated on-the-go while reducing your carbon footprint.</h5>
        <ul>
        <li><h5>Durable and long-lasting</h5></li>
        <li><h5>BPA-free and non-toxic</h5></li>
        <li><h5>Perfect for outdoor enthusiasts and environmentally conscious consumers</h5></li>
        </ul>

      <hr></hr>
        
        <div className='section-header'>
          <h4>Shipping</h4>
          <span class="expand-icon">+</span>
        </div>
      <hr></hr>
        
        <div className='section-header'>
          <h4>Reviews</h4>
          <span class="expand-icon">+</span>
        </div>
      <hr></hr>
        
      </div>

      
    </div>
  )
}


function MoreInfo() {
  return (
    <div className='may-also'>
      <h3>You May Also Like</h3>

      <div className='three-containers'>
        <div className='image-box'>
          <img src={toothbrush} alt="bamboo toothbrush" />
          <h4 className='image-title'>Bamboo Toothbrush</h4>
          <h4 className='image-title'>$18</h4>
        </div>
        
        <div className='image-box'>
          <img src={bamboobrush} alt="brush" />
          <h4 className='image-title'>Bamboo Brush</h4>
          <h4 className='image-title'>$24</h4>
        </div>
        
        <div className='image-box'>
          <img src={bowl} alt="bowl" />
          <h4 className='image-title'>Bamboo Plate</h4>
          <h4 className='image-title'>$16</h4>
        </div>
      </div>
    </div>
  )
}


function Footer(){
  return (
    <div className='footer'>
      
      <div className='footer-section footer-left'>
        <p><strong>About</strong></p>
        <p>Contact</p>
        <p>Our Values</p>
        <p>About Us</p>
    </div>

      <div className='footer-section footer-center'>
        <p><strong>Shop</strong></p>
        <p>All Products</p>
        <p>Featured Items</p>
        <p>Discounts</p>
      </div>

      <div className='footer-section footer-right'>
          <p><strong>Connect</strong></p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>X (Twitter)</p>
      </div>
      
<div className='copyright'>
   <p>© 2024 Eco-friends. All rights reserved</p>
</div>
    </div>


  )

}

/*this is the new added javascript part that is responsible for implementing the cartCount and increaasing it eery time it is pressed */
export default function App() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  return (
      <div>
        <AnnouncementBar />
        <Navbar cartCount={cartCount} />
        <Heading />
        <div className='container'>
          <ProductImage />
          <ProductInfo addToCart={handleAddToCart} />
        </div>
        <hr className="full-width-hr" />
        <MoreInfo />
        <Footer />
      </div>
    );
  }
