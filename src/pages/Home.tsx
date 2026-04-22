import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-polymer.jpg";

const Home = () => {
  return (
    <section className="relative bg-navy-deep text-primary-foreground overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 opacity-30">
        <img
          src={hero}
          alt="Polymer antenna chip on circuit board"
          className="w-full h-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-copper" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper">
            Portfolio · 2026
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-4xl">
          Optimizing the<br />
          <span className="italic font-normal text-slate-light">Multi-Material</span> Frontier.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-slate-light leading-relaxed">
          Polymers and graphene films are reshaping RF hardware. This site collects my writing on
          that shift.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/synthesis"
            className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-copper/90 transition"
          >
            Read Synthesis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/about"
            className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition"
          >
            About Ethan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
