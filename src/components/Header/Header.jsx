/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
//assets
import { ReactComponent as Logo } from 'assets/logo/Logo-BeeYou.svg';
import { ReactComponent as Bag1 } from 'assets/svg/bag1.svg';
import { ReactComponent as MeneIcon } from 'assets/svg/menu1.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = React.useRef();

  React.useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      // header
      if (scrollTop > 34 && scrollTop < 1000) {
        headerRef.current.classList.add('header-bgWhite');
      }
      // reset
      if (scrollTop < 33) {
        headerRef.current.classList.remove('header-bgWhite');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const scrollTop = document.documentElement.scrollTop;
    // header
    if (scrollTop > 34) {
      headerRef.current.classList.add('header-bgWhite');
    }
    // reset
    if (scrollTop < 33) {
      headerRef.current.classList.remove('header-bgWhite');
    }
  }, []);
  const handleCloseMenu = useCallback(() => {
    if (!isOpen) return;
    setIsOpen(false);
  }, [isOpen]);

  return (
    <div className='h-[90px] py-[17px]'>
      <div className='header_stage'>
        <header
          className={`header ${isOpen ? 'header_mobile' : ''}`}
          ref={headerRef}
        >
          <div className='container'>
            <div className=''>
              <div className='flex w-full header-container items-center'>
                <div className='mr-[63px] header_logo'>
                  <Link to='/' className='flex items-center'>
                    <Logo />
                  </Link>
                </div>
                <nav className='flex items-center w-full header_menu_nav'>
                  <ul className='flex items-center -ml-2'>
                    <li onClick={handleCloseMenu}>
                      <Link
                        to='#'
                        className='mr-10 font-normal text-content-primary heading-4-bold active'
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li onClick={handleCloseMenu}>
                      <Link
                        to='#tote-collection'
                        className='mr-10 font-normal text-content-primary heading-4-bold'
                      >
                        Tote collection
                      </Link>
                    </li>
                    <li onClick={handleCloseMenu}>
                      <Link
                        to='#'
                        className='mr-10 font-normal text-content-primary heading-4-bold'
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li onClick={handleCloseMenu}>
                      <Link
                        to='#'
                        className='mr-10 font-normal text-content-primary heading-4-bold'
                      >
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='ml-auto header_theme'>
                  <div className='flex items-center'>
                    <div className='bag cursor-pointer'>
                      <div className='bg-yellow w-[40px] h-[40px] rounded-full flex justify-center items-center relative'>
                        <Bag1 />
                        <div className='count flex justify-center items-center absolute top-0 rounded-full'>
                          <span className='text-white heading-5-bold'>2</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`cursor-pointer header_iconMenu hidden ml-3 ${
                        isOpen ? 'is-show' : ''
                      }`}
                      onClick={() => setIsOpen((state) => !state)}
                    >
                      <MeneIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
