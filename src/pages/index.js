import Logo from '@/icon/logo';

export default function Home() {
  return (
    <div className="w-full bg-[#2F6B4F] pt-[24px]">
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
        className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto"
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
          <button className="bg-white max-w-[147px] w-full mx-auto">
            Get Started
          </button>
        </div>

        <img src="/hero.png" className="col-span-full" />
      </section>
      <h1 className="font-sans">Hello Worlds</h1>
    </div>
  );
}
