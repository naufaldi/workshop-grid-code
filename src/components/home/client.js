import React from 'react';

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
    <section
      id="clients"
      className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto mt-[414px]"
    >
      <div className="col-span-12 grid grid-cols-4 gap-x-[160px] px-[83px] text-center text-black">
        {ListClient.map((item) => (
          <div>
            <h2>{item.number}</h2>
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
