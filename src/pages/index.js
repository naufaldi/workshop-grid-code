import Logo from '@/icon/logo';

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#2F6B4F] pt-[24px] ">
        <navbar className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto  py-[16px] items-center">
          <div className="logo col-start-1 col-end-3">
            <Logo />
          </div>
          <div className="list-menu col-span-7 col-end-13 ">
            <div className="max-w-[638px] w-full grid grid-cols-5 gap-x-[40px] ml-auto text-white">
              {' '}
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
              <a href="">Home</a>
            </div>
          </div>
        </navbar>
        <section
          id="hero"
          className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto "
        >
          <h1 className="col-start-2 col-span-10 text-center">
            Create Amazing Digital Product For Your Business
          </h1>
          <p className="col-start-3 col-span-8 text-center">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <div className="col-start-5 col-span-4 grid">
            <button className="bg-white max-w-[147px] w-full mx-auto">
              Get Started
            </button>
          </div>
          <div className="col-span-full">
            <div className="relative -mx-4 -mb-[364px] max-w-[1210px]">
              <img src="/hero.png" />
            </div>
          </div>
        </section>
      </div>
      <section className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto ">
        <div className="col-span-12 grid grid-cols-4 gap-x-[160px] px-[83px] text-center text-white">
          <div>
            <h2>1.2K+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>1.2K+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>1.2K+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>1.2K+</h2>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>
      <section
        id="service"
        className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto"
      >
        <div className="col-span-5 flex flex-col gap-[4px]">
          <h6>Our Services</h6>
          <h2>We Provide What You Need</h2>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-x-[140px] gap-y-[54px] px-[32px]">
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
        </div>
      </section>
      <section
        id="client"
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-[32px] px-[24px]">
            <div>Icon</div>
            <h6>title</h6>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ab tempore, sapiente qui natus cupiditate quisquam quia delectus
              pariatur eaque illum quasi atque quam iste amet unde reprehenderit
              eveniet nihil?
            </p>
          </div>
        </div>
      </section>
      <section
        id="cta"
        className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto py-[60px]"
      >
        <div className="col-span-8 col-start-3">
          <div className="max-w-[661px] w-full flex flex-col items-center text-center">
            <h1 className="text-white font-bold text-[48px] mb-4">
              Have a project idea and want to make it come true?
            </h1>
            <p className="mb-64[px] text-white opacity-70">
              Please contact us and we will discuss about your project, don't
              forget we are always here for you
            </p>
            <button className="flex items-center justify-center gap-[8px] py-[23px] px-[32px] bg-white ">
              <p className="text-[#2A2C3D] font-bold text-[20px]">
                Contact Us{' '}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M3.75 12.5H20.25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 5.75L20.25 12.5L13.5 19.25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-Linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
