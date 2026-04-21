import labImg from "@/assets/about-lab.jpg";
import radioImg from "@/assets/grandfather-radio.jpg";
import { GraduationCap, Beaker, Rocket, Briefcase } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-bone border-b border-steel">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">02 — About</div>
            <h1 className="font-serif text-5xl lg:text-7xl text-navy leading-[0.95]">
              The story behind<br />the <em className="text-copper not-italic">specification.</em>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-steel">
            <p className="text-lg text-slate leading-relaxed">
              Engineers don't get into materials science by accident. For me it began with a piece
              of analog hardware older than my parents — and a question about why it still worked.
            </p>
          </div>
        </div>
      </section>

      {/* The Spark */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ The Spark</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-6">My grandfather's radio.</h2>
            <div className="space-y-5 text-lg text-slate leading-relaxed">
              <p>
                Some kids inherit a watch. I inherited a tube radio — heavy, walnut-cased, and
                loud enough to fill a Colorado garage on a Sunday morning. My grandfather kept it
                tuned to AM 850, even after the rest of the house had switched to streaming.
              </p>
              <p>
                When it finally went silent, he handed it to me. We took the back off together.
                Inside was a forest of copper coils, vacuum tubes, and a single hand-wound antenna
                — engineered in 1962 to do exactly one thing, exactly one way.
              </p>
              <p>
                I remember asking why it couldn't simply <em>change</em>. Why an antenna had to be
                fixed, when everything else in the world seemed to negotiate. He shrugged. I never
                stopped thinking about it. The research I do now is, in some sense, an answer.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-copper" />
              <img src={radioImg} alt="Vintage tube radio with warm amber glow" className="relative w-full h-auto" loading="lazy" width={1280} height={896} />
            </div>
          </div>
        </div>
      </section>

      {/* Identity card */}
      <section className="bg-navy-deep text-primary-foreground py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">Identification</div>
              <h2 className="font-serif text-4xl lg:text-5xl">Professional identity.</h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                { icon: GraduationCap, k: "Status", v: "Junior, Class of 2027" },
                { icon: Beaker, k: "Major", v: "Chemical Engineering" },
                { icon: Briefcase, k: "Minor", v: "Business" },
                { icon: Rocket, k: "Goal", v: "Aerospace / Materials R&D" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="bg-navy-deep p-6 lg:p-8">
                  <Icon className="h-5 w-5 text-copper mb-4" />
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-light mb-2">{k}</div>
                  <div className="font-serif text-xl">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience + image */}
      <section className="py-24 lg:py-32 bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-3 -right-3 bottom-3 -left-3 bg-navy/5" />
              <img src={labImg} alt="Ethan Blair working in the chemical engineering lab" className="relative w-full h-auto" loading="lazy" width={1024} height={1280} />
              <div className="mt-3 font-mono text-[10px] tracking-[0.25em] uppercase text-slate">
                Fig. 01 — Chevron Teaching Lab, Spring 2026
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">Experience</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-10">Where the work happens.</h2>

            {[
              {
                role: "Technical Lead",
                org: "ChemE Car Team — CU Boulder",
                date: "2025 — Present",
                body: "Lead the chemistry subsystem for our AIChE competition vehicle, designing the redox-clock stop reaction and braking control. Coordinate a team of seven across propulsion, control, and safety reviews.",
              },
              {
                role: "Teaching Lab Assistant",
                org: "Chevron Teaching Laboratory",
                date: "2024 — Present",
                body: "Mentor undergraduate cohorts through the construction and operation of Continuous Stirred Tank Reactors (CSTRs). Calibrate flow controllers, validate residence-time distributions, and grade conversion analyses.",
              },
              {
                role: "Undergraduate Researcher",
                org: "Materials & RF Hardware Group",
                date: "2025 — Present",
                body: "Investigate the trade space between conducting polymers, 3D-printed lightweight antennas, and graphene assembled films for next-generation reconfigurable RF hardware.",
              },
            ].map((e) => (
              <div key={e.role} className="grid grid-cols-12 gap-4 py-6 border-t border-steel last:border-b">
                <div className="col-span-12 sm:col-span-3 font-mono text-xs tracking-wider uppercase text-slate">{e.date}</div>
                <div className="col-span-12 sm:col-span-9">
                  <h3 className="font-serif text-2xl text-navy">{e.role}</h3>
                  <div className="font-mono text-xs tracking-wider uppercase text-copper mb-3">{e.org}</div>
                  <p className="text-slate leading-relaxed">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-6">Trajectory</div>
          <p className="font-serif text-3xl lg:text-4xl leading-snug">
            "I want to spend the next decade where chemistry meets flight — designing the materials
            that survive launch, the hardware that adapts in orbit, and the systems that turn lab
            curiosities into aerospace standards."
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Blue Origin", "Honeywell", "NASA JPL", "Lockheed Martin", "Materials R&D"].map((t) => (
              <span key={t} className="font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-slate-light">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;