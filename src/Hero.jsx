import React from 'react'
import './Hero.css'
import { TruckOutlined } from '@ant-design/icons';

function Hero() {
    return (
        <div>
            <div>
                <p className='head1'>Lowest Prices
                    <br />Best Quality Shopping</p>
                <img src="public\hero1.png" className='head1-img' />
                <div className="hero-p-itme">
                    <p><TruckOutlined /></p>
                </div>

            </div>
        </div>
    )
}

export default Hero;