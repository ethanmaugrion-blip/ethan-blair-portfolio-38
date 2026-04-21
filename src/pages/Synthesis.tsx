import grapheneImg from "@/assets/graphene-film.jpg";

const Synthesis = () => {
  return (
    <article className="bg-bone">
      {/* Header */}
      <header className="border-b border-steel">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-20">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">03 — Research Synthesis</div>
          <h1 className="font-serif text-4xl lg:text-6xl text-navy leading-[1.05]">
            Dancing Material Integration in Next-Generation Radio Hardware
          </h1>
          <div className="mt-8 grid sm:grid-cols-3 gap-px bg-steel border border-steel">
            {[
              { k: "Author", v: "Ethan Blair" },
              { k: "Discipline", v: "Materials · RF Engineering" },
              { k: "Format", v: "Literature Synthesis · APA 7" },
            ].map((m) => (
              <div key={m.k} className="bg-bone p-5">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate mb-1">{m.k}</div>
                <div className="font-serif text-base text-navy">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-12 gap-12">
        {/* Sticky TOC */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-24">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">Contents</div>
            <ol className="space-y-3 font-mono text-xs text-slate">
              <li><a href="#abstract" className="hover:text-navy">01 · Abstract</a></li>
              <li><a href="#methodology" className="hover:text-navy">02 · Methodology</a></li>
              <li><a href="#constraint" className="hover:text-navy">03 · Constraint Analysis</a></li>
              <li><a href="#industrial" className="hover:text-navy">04 · Industrial Implications</a></li>
              <li><a href="#references" className="hover:text-navy">05 · References</a></li>
            </ol>
          </div>
        </aside>

        <div className="lg:col-span-9 prose-academic">
          {/* Abstract */}
          <section id="abstract" className="mb-16">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ 01 · Abstract</div>
            <p className="font-serif text-2xl text-navy leading-snug border-l-2 border-copper pl-6">
              Recent research has shown that shifting components from standard metal bases to be
              polymer or carbon-based can result in more desirable attributes such as dynamic tuning,
              weight reduction, and thermal protection.
            </p>
          </section>

          {/* Methodology */}
          <section id="methodology" className="mb-16">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ 02 · Methodology</div>
            <h2 className="font-serif text-3xl text-navy mb-5">A three-paper triangulation.</h2>
            <p className="text-lg text-navy leading-relaxed mb-5">
              While Garrett (2023) addressed internal switching speed as an obstacle,
              Murillo-Ríos and García-Guzmán (2025) emphasized how manufacturing precision —
              specifically in the realm of surface roughness — was the primary constraint in signal
              integrity for their lightweight designs. Garrett (2023) proved that redox-active
              conducting polymers have the unique capability of acting as frequency-reconfigurable
              switches.
            </p>
            <p className="text-lg text-navy leading-relaxed">
              This breakthrough allowed antennas to change states of operation through
              electrochemical oxidation. Though this removes the need for mechanical parts, the
              20-second transition time proves to be a bottleneck in the process as a result of
              ion transport kinetics.
            </p>
          </section>

          {/* Image break */}
          <figure className="my-16 -mx-6 lg:mx-0">
            <img src={grapheneImg} alt="Macro view of graphene assembled film hexagonal lattice" className="w-full h-auto" loading="lazy" width={1280} height={896} />
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.25em] uppercase text-slate">
              Fig. 02 — Hexagonal carbon lattice characteristic of graphene assembled films (GAF).
            </figcaption>
          </figure>

          {/* Constraint Analysis */}
          <section id="constraint" className="mb-16">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ 03 · Constraint Analysis</div>
            <h2 className="font-serif text-3xl text-navy mb-5">Mass, kinetics, and thermal load.</h2>
            <p className="text-lg text-navy leading-relaxed mb-5">
              Alongside the focus on polymers, Murillo-Ríos and García-Guzmán (2025) achieved a
              mass reduction of 83% compared to steel using high-resolution polymer 3D printing
              and silver plating to create lightweight antennas. To further support this emerging
              multi-material landscape, Zhang and Liu (2024) propose using Graphene Assembled Films
              (GAF) to combat heat dissipation issues, specifically due to graphene's far superior
              thermal conductivity in comparison to copper.
            </p>

            {/* Comparison table */}
            <div className="my-10 border border-steel">
              <div className="grid grid-cols-4 bg-navy text-primary-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
                <div className="p-4">Constraint</div>
                <div className="p-4 border-l border-white/10">Garrett (2023)</div>
                <div className="p-4 border-l border-white/10">Murillo-Ríos (2025)</div>
                <div className="p-4 border-l border-white/10">Zhang & Liu (2024)</div>
              </div>
              {[
                ["Material", "Conducting polymer", "3D-printed polymer + Ag", "Graphene assembled film"],
                ["Primary constraint", "Switching speed (~20 s)", "Surface roughness", "Thermal dissipation"],
                ["Performance gain", "Frequency reconfigurability", "83% mass reduction", "EMI shielding + cooling"],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 border-t border-steel text-sm">
                  {row.map((cell, j) => (
                    <div key={j} className={`p-4 ${j === 0 ? "font-mono text-xs tracking-wider uppercase text-slate" : "text-navy"} ${j !== 0 ? "border-l border-steel" : ""}`}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Industrial Implications */}
          <section id="industrial" className="mb-16">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ 04 · Industrial Implications</div>
            <h2 className="font-serif text-3xl text-navy mb-5">Toward a multi-material standard.</h2>
            <p className="text-lg text-navy leading-relaxed mb-5">
              Zhang and Liu (2024) additionally observed that films such as these can provide dual
              functionality by offering electromagnetic interference shielding to protect sensitive
              radio components from external noise. Working in conjunction, these studies show that
              what lies ahead in the world of radio hardware is strongly rooted in a multi-material
              approach, significantly supported by polymer reconfigurability and graphene-based
              films ensuring thermal and signal integrity.
            </p>
            <p className="text-lg text-navy leading-relaxed">
              For aerospace, this means lighter payloads with adaptive RF ground links. For
              consumer telecom, it forecasts a single "master antenna" that replaces the redundant
              metal components currently competing for space inside every smartphone.
            </p>
          </section>

          {/* References */}
          <section id="references" className="pt-10 border-t border-steel">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">§ 05 · References</div>
            <h2 className="font-serif text-3xl text-navy mb-8">References</h2>
            <ol className="space-y-6">
              {[
                { authors: "Garrett, B. S.", year: "(2023).", title: "Conducting polymer switches permit the development of a frequency-reconfigurable antenna.", journal: "ACS Applied Electronic Materials, 5(3),", pages: "1542–1553.", doi: "https://doi.org/10.1021/acsaelm.2c01742" },
                { authors: "Murillo-Ríos, J. P., & García-Guzmán, J.", year: "(2025).", title: "3D-printed high-precision lightweight K-band corrugated horn antenna with chemical silver plating.", journal: "Preprints.org.", pages: "", doi: "https://doi.org/10.20944/preprints202503.0331.v1" },
                { authors: "Zhang, X., & Liu, H.", year: "(2024).", title: "Graphene assembled films for radio frequency and microwave technology.", journal: "Accounts of Materials Research, 5(2),", pages: "112–128.", doi: "https://doi.org/10.1021/accountsmr.3c00185" },
              ].map((r) => (
                <li key={r.title} className="text-navy leading-relaxed pl-8 -indent-8">
                  <span className="font-semibold">{r.authors}</span> {r.year}{" "}
                  {r.title} <em>{r.journal}</em> {r.pages}{" "}
                  <a href={r.doi} target="_blank" rel="noreferrer" className="text-copper underline-offset-2 hover:underline break-all">
                    {r.doi}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Synthesis;