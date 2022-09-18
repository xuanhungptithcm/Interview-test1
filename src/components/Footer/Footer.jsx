import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// assets

import { ReactComponent as FacebookIcon } from 'assets/footer/Facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/footer/instagram.svg';
import { ReactComponent as YoutubeIcon } from 'assets/footer/youtube.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-container flex justify-between items-center'>
          <div className='menu-footer'>
            <ul className='flex gap-x-10 items-center'>
              <li>
                <Link to='#'>Sản phẩm hot</Link>
              </li>
              <li>
                <Link to='#'>Sản phẩm bán chạy</Link>
              </li>
              <li>
                <Link to='#'>Hot deal tháng 12</Link>
              </li>
              <li>
                <Link to='#'>Anotner links</Link>
              </li>
            </ul>
          </div>
          <div className='socials flex items-center gap-x-[22px]'>
            <span className='heading-5-Roboto'>© 2020 beebag.com.vn</span>
            <FacebookIcon className='cursor-pointer'/>
            <InstagramIcon className='cursor-pointer'/>
            <YoutubeIcon className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
