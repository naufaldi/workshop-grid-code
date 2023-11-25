import React from 'react';

const CardService = ({ logo, title, caption }) => {
  return (
    <div className="flex flex-col gap-4 items-center py-[32px] px-[24px] shadow-xl">
      <div>{logo}</div>
      <h6>{title}</h6>
      <p className="text-center">{caption}</p>
    </div>
  );
};

export default CardService;
