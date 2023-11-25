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
    <nav className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto  py-[16px] items-center">
      <div className="logo col-start-1 col-end-3">
        <Logo />
      </div>
      <div className="list-menu col-span-7 col-end-13 ">
        <div className="max-w-[650px] w-full grid grid-cols-5 gap-x-[40px] ml-auto text-white">
          {ListMenu.map((item) => (
            <Link href={item.url}>{item.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
