import React from 'react';
import './Navbar.css';
import { SearchOutlined, MobileOutlined, UserOutlined , ShoppingCartOutlined } from '@ant-design/icons';

function Navbar() {
    return (
        <nav>
            <ul className='nav-item'>
                <li className='logo'></li>
                <li className='search-container'>
                    <input className='inp' type='text' placeholder='Try Saree,Kurti or Search by Product Code' />
                    <SearchOutlined className='search-icon' />
                </li>
                <li className='Download-app'>
                    <a href='#'>
                        <MobileOutlined />
                    </a>
                    Download<br />App
                    <div className='hover-images'>
                        <p className='pheading'>Download From</p>
                        <img src='public\apple.png' alt='Google Play' className='download-image' />
                    </div>
                </li>
                <hr className='line' />
                <li className='Supplier'><a href='#'>Become a <br />Supplier</a></li>
                <hr className='line2' />
                <li className='Newsroom'><a href='#'>Newsroom</a></li>
                <hr className='line' />
                <div className='account'>
                    <li className='user'><UserOutlined /></li>
                    <p className='profile'>Profile</p>
                </div>
                <div className='account'>
                    <li className='user'><ShoppingCartOutlined /></li>
                    <p className='profile'>Profile</p>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
