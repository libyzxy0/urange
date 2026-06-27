import { HeroBackground } from "@/components/HeroBackground";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import Image from "next/image";
import hero from "@/assets/hero.svg";

export default function Landing() {
  return (
    <main>
      <Navbar />
      <HeroBackground>
        <div className="min-h-screen flex flex-row justify-between items-center mx-6 md:mx-24">
          <div className="max-w-2xl text-center md:text-left">
            <Text className="text-brand font-head text-5xl md:text-6xl leading-14 md:leading-16"><span className="text-black">LET<span className="text-brand">'</span>S TURN VISIBLE </span>PROBLEMS INTO <span className="bg-brand text-white px-2">SYSTEMS</span></Text>
            <Text className="text-neutral-600 md:text-lg mt-4 mx-4 md:mx-0">We focused on creating practical digital solutions for real-world problems. We aim to simplify everyday processes by turning visible challenges into efficient, accessible, and reliable systems through technology.
            </Text>
            <div className="flex flex-row justify-center md:justify-start gap-4 mt-4">
              <Button className="px-6 py-2.5">Get Started</Button>
              <Button className="px-6 py-2.5" variant={'outline'}>Learn More</Button>
            </div>
          </div>
          <div className="mx-4 hidden md:flex">
            <Image src={hero} alt="Markup from storyset" />
          </div>
        </div>
      </HeroBackground>
    </main>
  );
}
