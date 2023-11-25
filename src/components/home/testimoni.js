import React from 'react';

const Testimoni = () => {
  return (
    <section
      id="testimoni"
      className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto"
    >
      <div className="col-span-5 flex flex-col gap-[4px]">
        <h6>Client Reviews</h6>
        <h2>What Our Happy Client Say About Us</h2>
      </div>
      <div className="col-span-12 grid grid-cols-3 gap-x-[140px] gap-y-[54px] px-[32px]">
        <div className="flex flex-col gap-4 items-start p-[24px] border border-white">
          <h6 className="mb-2">Website My Hospital</h6>
          <p className="mb-[21px]">
            Very nice to work with Bubble Bash, a reliable and responsive team
            is very helpful
          </p>
          <div className="flex gap-x-[17px] ">
            <div>foto</div>
            <div className="flex flex-col">
              <p>Katty Clock</p>
              <p>CEO My Hospital</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
          <div>Icon</div>
          <h6>title</h6>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab
            tempore, sapiente qui natus cupiditate quisquam quia delectus
            pariatur eaque illum quasi atque quam iste amet unde reprehenderit
            eveniet nihil?
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
          <div>Icon</div>
          <h6>title</h6>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab
            tempore, sapiente qui natus cupiditate quisquam quia delectus
            pariatur eaque illum quasi atque quam iste amet unde reprehenderit
            eveniet nihil?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
