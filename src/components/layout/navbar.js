import React from 'react';
import Logo from '@/icon/logo';
import Link from 'next/link';

const Navbar = () => {
  const ListMenu = [
    { url: '/', name: 'Home' },
    { url: '/', name: 'Our Services' },
    { url: '/', name: 'Portofolio' },
    { url: '/', name: 'Testimonial' },
    { url: '/', name: 'Contact Us' },
  ];
  return (
    <nav className="grid grid-cols-4  gap-x-4 sm:grid-cols-12 sm:gap-x-[32px] max-w-[1210px] mx-auto px-4 sm:px-0  py-[16px] items-center">
      <div className="logo col-start-1 sm:col-end-3">
        <Logo />
      </div>
      <div className="list-menu col-span-7 col-end-13 hidden sm:block">
        <div className="max-w-[650px] w-full grid grid-cols-5 gap-x-[40px] ml-auto text-white">
          {ListMenu.map((item) => (
            <Link href={item.url}>{item.name}</Link>
          ))}
        </div>
      </div>
      <div className="col-span-1 col-end-5 block sm:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
