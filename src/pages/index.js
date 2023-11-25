import Hero from '@/components/home/hero';
import Client from '@/components/home/client';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import Service from '@/components/home/service';
import Testimoni from '@/components/home/testimoni';
import CallToAction from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#2F6B4F] pt-[24px] ">
        <Navbar />
        <Hero />
      </div>
      <Client />
      <Service />
      <Testimoni />
      <CallToAction />
      <Footer />
    </>
  );
}
