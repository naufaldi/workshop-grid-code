import React from 'react';
import Button from '../common/button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto "
    >
      <h1 className="col-start-2 col-span-10 text-center">
        Create Amazing Digital Product For Your Business
      </h1>
      <p className="col-start-3 col-span-8 text-center">
        We are a professional digital agency that has been established since
        2016, we present a variety of digital services that can help you solve
        problems in your business
      </p>
      <div className="col-start-5 col-span-4 grid">
        <Button />
      </div>
      <div className="col-span-full">
        <div className="relative -mx-4 -mb-[364px] max-w-[1210px]">
          <img src="/hero.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
