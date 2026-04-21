import { Link } from "react-router-dom";
import { ArrowRight, Atom, Zap, Layers } from "lucide-react";
import hero from "@/assets/hero-polymer.jpg";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={hero} alt="Polymer antenna chip on circuit board" className="w-full h-full object-cover" width={1600} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-28 lg:pt-32 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-copper" />
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-copper">Portfolio · MS Research</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-primary-foreground">
                Optimizing the<br />
                <span className="italic font-normal text-slate-light">Multi-Material</span><br />
                Frontier.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-slate-light leading-relaxed">
                Shifting RF components from copper toward polymers and graphene films unlocks
                dynamic tuning, lighter weight, and better thermal protection. This site tracks
                that shift.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/synthesis" className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-copper/90 transition">
                  Read Synthesis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="group inline-flex items-center gap-3 border border-white/20 text-primary-foreground px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition">
                  About Ethan
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/10">
              <dl className="space-y-6">
                {[
                  { k: "Institution", v: "CU Boulder" },
                  { k: "Discipline", v: "Chemical Engineering" },
                  { k: "Focus", v: "Materials · RF Hardware" },
                  { k: "Year", v: "Junior · 2026" },
                ].map((item) => (
                  <div key={item.k} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                    <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-light">{item.k}</dt>
                    <dd className="font-serif text-lg text-primary-foreground">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* HOOK */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ The Hook</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy leading-tight">
                From stubborn metal to a <em className="text-copper not-italic">smart</em> material.
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-8 lg:border-l border-steel">
              <p className="text-xl text-navy leading-relaxed mb-6">
                For about a century, antennas have been made of copper and gold. They are great
                at one job, but they cannot adapt. As 5G evolves into 6G, rigid hardware has
                started to run into a wall.
              </p>
              <p className="text-lg text-slate leading-relaxed">
                This portfolio bridges peer-reviewed research with industrial application:
                conducting polymers as electrochemical switches, 3D-printed K-band horns, and
                graphene films for thermal dissipation. Together, they show hardware becoming as
                flexible as the software it houses.
              </p>
            </div>
          </div>

          {/* Three pillars */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-steel border border-steel">
            {[
              { icon: Atom, t: "Reconfigurable Polymers", d: "Polyaniline switches frequency states through redox chemistry. No mechanical parts." },
              { icon: Layers, t: "Graphene Assembled Films", d: "Beats copper on thermal conductivity and shields sensitive RF stages from outside noise." },
              { icon: Zap, t: "Industrial Implication", d: "Lighter aerospace payloads, fewer antennas per phone, and hardware that adapts to a global spectrum." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-bone p-8 lg:p-10 group hover:bg-background transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 bg-navy text-primary-foreground grid place-items-center group-hover:bg-copper transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-light">0{[1,2,3][["Reconfigurable Polymers","Graphene Assembled Films","Industrial Implication"].indexOf(t)]}</span>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">{t}</h3>
                <p className="text-slate leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE BANNER */}
      <section className="bg-navy text-primary-foreground py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">Purpose</div>
            <p className="font-serif text-3xl lg:text-4xl leading-snug">
              This site translates lab chemistry into engineering specification, and shares my
              work with the teams building the next generation of aerospace and telecom
              hardware.
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.2em] uppercase text-slate-light">Ethan Blair, CU Boulder '27</p>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-white/10">
            <Link to="/article" className="group block">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">Featured Article</div>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-copper transition-colors">
                Plastic Power: The Shape-Shifting Future of Connectivity
              </h3>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase border-b border-copper pb-1">
                Read Pop-Sci Piece <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;