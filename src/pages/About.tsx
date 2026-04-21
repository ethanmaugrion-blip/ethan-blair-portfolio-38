import labImg from "@/assets/about-lab.jpg";
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
              A junior at CU Boulder,<br />learning by <em className="text-copper not-italic">building.</em>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-steel">
            <p className="text-lg text-slate leading-relaxed">
              I am a Chemical Engineering major with a Business minor at CU Boulder, graduating
              in May 2027. Most of what I have learned has happened outside of lectures: in the
              teaching lab, on the ChemE Car team, and during an R&D internship at Arkema.
            </p>
          </div>
        </div>
      </section>

      {/* At CU Boulder */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ At CU Boulder</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8">Two and a half years in.</h2>
          <div className="space-y-5 text-lg text-slate leading-relaxed max-w-3xl">
            <p>
              I started at CU Boulder in August 2023, drawn to Chemical Engineering because it sat
              at the intersection of physical chemistry, hands-on lab work, and process design. I
              picked up a Business minor along the way to round out the technical side with the
              vocabulary I would need in industry.
            </p>
            <p>
              Outside of coursework, most of my time goes to three things: building and
              maintaining reactors in the Chevron Teaching Lab, leading the chemistry subsystem
              for our ChemE Car competition vehicle, and working on photocurable resin chemistry,
              first in the Bryant Lab and then as an R&D intern at Arkema.
            </p>
            <p>
              The common thread is materials. I am most engaged when I am in front of a piece of
              hardware that does not quite work yet, figuring out why and what to change.
            </p>
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
                { icon: Beaker, k: "Major", v: "B.S. Chemical Engineering" },
                { icon: Briefcase, k: "Minor", v: "Business" },
                { icon: Rocket, k: "Goal", v: "Materials R&D / Aerospace" },
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
                role: "R&D Intern, 3DP Material Chemist",
                org: "Arkema",
                date: "May / Dec 2025",
                body: "Evaluated 100+ photocurable resin formulations for 405 nm 3D printing, designing and running curing and mechanical experiments to improve print accuracy and mechanical performance. Delivered results to industry partners including Meta and the U.S. Army.",
              },
              {
                role: "Research Assistant",
                org: "Bryant Lab, CU Boulder",
                date: "Jan / May 2025",
                body: "Tuned photoabsorber and monomer ratios across 15+ resin formulations to improve feature resolution. Ran 40+ UV-Vis and FTIR analyses to quantify polymer conversion, calibrated printers, and built working curves that improved print reliability by about 20%.",
              },
              {
                role: "Technical Lead, ChemE Car",
                org: "CU Boulder AIChE Chapter",
                date: "Aug 2024 / Present",
                body: "Lead the chemistry subsystem for our competition vehicle. Built P&IDs for multiple platforms, integrated a pneumatic motor with a turbidity-sensor control loop, and tested alternative reaction modules (CaO/H₂O, iodine clock). Contributed to a 3rd place regional finish.",
              },
              {
                role: "Teaching Lab Assistant",
                org: "Chevron ChemE Teaching Lab, CU Boulder",
                date: "Jan 2025 / Present",
                body: "Restored a pilot-scale CSTR and maintain 3+ other process systems for 60+ students each week. Provide troubleshooting support and have completed 10+ equipment repairs across two semesters.",
              },
              {
                role: "Course Assistant",
                org: "Chemistry 1 for Engineers, CU Boulder",
                date: "Jan 2025 / Present",
                body: "Lead weekly recitations of 20 students and support technical problem-solving during office hours. Help instructors refine course materials based on what students are getting stuck on.",
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
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-6">Skills & Tools</div>
          <p className="font-serif text-3xl lg:text-4xl leading-snug">
            After graduation, I am aiming for materials R&D or aerospace, anywhere I can keep
            working on the chemistry behind real hardware.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Excel / VBA", "MATLAB", "Aspen Plus", "ChemDraw", "Fusion 360", "Arduino", "English", "French"].map((t) => (
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