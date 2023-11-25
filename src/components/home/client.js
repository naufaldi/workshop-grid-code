import React from 'react';
import { Section } from '../common/section';

const Client = () => {
  const ListClient = [
    {
      number: '1.2K+',
      caption: 'Happy Clients',
    },
    {
      number: '1.1K+',
      caption: 'WorldWide Clients',
    },
    {
      number: '6+',
      caption: 'Years of Experience',
    },
    {
      number: '12+',
      caption: 'Award Winners',
    },
  ];
  return (
    <Section id="client" className=" mt-[100px] sm:mt-[240px]">
      <div className="col-span-full grid grid-cols-4 sm:gap-x-[160px] sm:px-[83px] text-center text-black">
        {ListClient.map((item) => (
          <div>
            <h2 className="text-lg sm:text-xl">{item.number}</h2>
            <p className="text-sm sm:text-base">{item.caption}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Client;
