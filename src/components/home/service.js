import React from 'react';
import CardService from '../common/Card/service/CardService';
import FigmaIcon from '@/icon/figma';

const Service = () => {
  const ListService = [
    {
      logo: <FigmaIcon />,
      title: 'UI/UX Designer',
      caption:
        'We are ready to make your website more friendly and efficient in the eyes of users',
    },
    {
      logo: <FigmaIcon />,
      title: 'Web Development',
      caption:
        'Want to create a website that has many features? We have the answer for you. ',
    },
    {
      logo: <FigmaIcon />,
      title: 'Content Writer',
      caption:
        'We are ready to make your website more friendly and efficient in the eyes of users',
    },
    {
      logo: <FigmaIcon />,
      title: 'Branding',
      caption:
        'We are ready to make your website more friendly and efficient in the eyes of users',
    },
    {
      logo: <FigmaIcon />,
      title: 'Editing Video',
      caption:
        'We are ready to make your website more friendly and efficient in the eyes of users',
    },
    {
      logo: <FigmaIcon />,
      title: 'Illustration',
      caption:
        'We are ready to make your website more friendly and efficient in the eyes of users',
    },
  ];
  return (
    <section
      id="service"
      className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto"
    >
      <div className="col-span-5 flex flex-col gap-[4px]">
        <h6>Our Services</h6>
        <h2>We Provide What You Need</h2>
      </div>
      <div className="col-span-12 grid grid-cols-3 gap-x-[140px] gap-y-[54px] px-[32px]">
        {ListService.map((item) => (
          <CardService
            logo={item.logo}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
