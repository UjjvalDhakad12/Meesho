import React from 'react'
import './Hero.css'


function Hero() {
    return (
        <div>
            <div className="left">
                <p className='heading'>Lowest Prices<br />
                    Best Quality Shopping</p>
                <div className="item">
                    <pre><i class="fa-solid fa-truck"></i> Free Delivery</pre>
                    <pre><i class="fa-solid fa-hand-holding-dollar"></i> Cash on Delivery</pre>
                    <pre><i class="fa-solid fa-person-walking-arrow-loop-left"></i> Easy Returns</pre>
                </div>
                <button className='btn'>
                    <i class="fa-brands fa-google-play"></i>
                    Download the Meesho App</button>
            </div>
        </div>
    )
}

export default Hero