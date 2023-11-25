import React from 'react';
import Button from '../common/button';
import { Section } from '../common/section';

const Hero = () => {
  return (
    <Section id="hero">
      <h1 className="col-span-full sm:col-start-2 sm:col-span-10 text-center">
        Create Amazing Digital Product For Your Business
      </h1>
      <p className="col-span-full sm:col-start-3 sm:col-span-8 text-center">
        We are a professional digital agency that has been established since
        2016, we present a variety of digital services that can help you solve
        problems in your business
      </p>
      <div className="col-span-2 col-start-2 sm:col-start-5 sm:col-span-4 grid">
        <Button />
      </div>
      <div className="col-span-full">
        <div className="relative mx-auto sm:-mx-4 -mb-[50px] sm:-mb-[364px] max-w-[300px] sm:max-w-[1210px]">
          <img src="/hero.png" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
