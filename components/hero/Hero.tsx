import { ArrowRight, Phone } from "lucide-react";
import Button from "../Button";
import Navbar from "../Navbar";
import HeroTitle from "./HeroTitle";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section aria-label="Présentation" className="relative overflow-hidden pt-[130px] md:pt-[210px]">
        {/* Halo jaune */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[120px] h-[min(760px,70vh)] w-[min(1320px,100%)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,#FFDC78_0%,#FFE6A0_40%,rgba(255,238,232,0)_72%)] blur-[30px] md:top-[200px]"
        />

        <div className="relative">
          <HeroTitle />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 px-4 md:mt-8 md:gap-[75px]">
            <Button href="#contact" variant="outline" icon={<Phone size={22} fill="currentColor" strokeWidth={0} />}>
              Me contacter
            </Button>
            <Button href="#projets" icon={<ArrowRight size={16} strokeWidth={2.2} />}>
              Voir mes projets
            </Button>
          </div>

          <div className="mt-8 md:mt-[41px]">
            <HeroVisual />
          </div>
        </div>
      </section>
    </>
  );
}