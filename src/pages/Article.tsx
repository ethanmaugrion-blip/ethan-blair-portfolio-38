import heroImg from "@/assets/hero-polymer.jpg";
import infographicImg from "@/assets/popsci-hero.jpg";

const Article = () => {
  return (
    <article className="bg-bone">
      {/* Magazine masthead */}
      <header className="border-b-4 border-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10">
          <div className="flex items-center justify-between font-mono text-xs tracking-[0.2em] uppercase text-slate">
            <span className="border-t border-navy pt-1 px-4">04 / 21 / 2026</span>
            <span className="text-navy">Issue Nº 04 · Pop-Sci</span>
            <span className="border-t border-navy pt-1 px-4">Ethan Blair</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-navy text-center leading-none mt-6 tracking-tight">
            PLASTIC POWER
          </h1>
          <p className="text-center mt-6 font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-slate">
            Trading rigid copper for smart, shape-shifting polymers to catch the perfect signal.
          </p>
        </div>
        <div className="h-1 bg-copper" />
      </header>

      {/* Body — magazine 2-column */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        {/* Lead image */}
        <figure className="mb-10">
          <img src={heroImg} alt="Polymer antenna chip on circuit board with RF signal" className="w-full h-[400px] lg:h-[520px] object-cover" loading="lazy" width={1600} height={1024} />
        </figure>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl text-navy mb-3">The Invisible Bridge</h2>
              <p className="text-navy leading-relaxed">
                Have you ever quickly gone to google something just to find that your phone wasn't
                receiving service, somewhere you've been many times? We live in a world blanketed
                by invisible signals all caught by antennas. While we have used this technology for
                many years now, we still have been unable to conquer one major limitation: they are
                frozen in shape. In a world where we emphasize smaller and stronger devices, this
                has run us into a wall. An antenna is limited by its physical dimensions, which
                isolates which frequencies it can pick up.
              </p>
              <p className="text-navy leading-relaxed mt-4">
                However, imagine it had the ability to change, like a car with tires effortlessly
                changing between racing slicks and snow tires instantly. This reconfigurability is
                exactly what a team of researchers are trying to introduce. By pivoting away from
                class rigid metals towards high-tech plastics, they are creating hardware as
                flexible as the software it houses.
              </p>
            </section>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-copper pl-6 py-2 my-10">
              <p className="font-serif text-3xl lg:text-4xl text-navy italic leading-tight">
                "What if we could teach our hardware to change its mind as quickly as our software does?"
              </p>
              <footer className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-slate">
                — Dr. B. S. Garrett, lead researcher
              </footer>
            </blockquote>

            <section>
              <h2 className="font-serif text-2xl text-navy mb-3">Breaking the Metal Mold</h2>
              <p className="text-navy leading-relaxed">
                For decades, antennas have been made of rigid metals such as copper and gold.
                Selected for their high conductivity of electricity, they have always been good at
                their job. There is the limitation though, that they are physically stubborn. Once
                you attach an antenna and connect it to the circuit board, it commits to its
                specific niche. One landmark study in the journal <em>ACS Applied Electronic
                Materials</em> (2023), lead researcher B. S. Garrett asks the question, "What if we
                could teach our hardware to change its mind as quickly as our software does?" They
                found their answer through experimenting with Conductive Polymers.
              </p>
              <p className="text-navy leading-relaxed mt-4">
                In the article, "Conducting polymer switches permit the development of a
                frequency-reconfigurable antenna," Garrett and his colleagues at the University of
                Birmingham demonstrate how plastic-like materials can act as electronic switches.
                While initially this might seem backward considering we learned in elementary
                school that metal is a conductor and plastic an insulator, conducting polymers are
                a special class of materials that have the strength of plastic but the electrical
                "soul" of metal.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-navy mb-3">The Experiment: The "On-Off" Magic</h2>
              <p className="text-navy leading-relaxed">
                Proving this concept though required more than theory. The team had to do more:
                building a working prototype though would prove their idea. They built an antenna
                utilising these polymers as bridges between different sections of the device. This
                allowed the antenna to change frequency through Electrochemical Tuning.
              </p>
              <p className="text-navy leading-relaxed mt-4">
                With the application of tiny, low-power electrical pulses to the polymer, the
                researchers can change it from insulating to conducting a signal through the
                antenna. By turning "on" or "off" specific bridges, the antenna's length effectively
                changes. Since the length of an antenna dictates the frequency receives, this
                allows the device to jump between different bands of the wireless spectrum —
                shifting from 4G to 5G in a second.
              </p>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl text-navy mb-3">Precision and Performance</h2>
              <p className="text-navy leading-relaxed">
                While "plastic switches" sound like a lab experiment, Garrett's team had to prove
                they could handle the high-stakes world of modern telecommunications. In the past,
                flexible antennas often suffered from "signal loss," where energy leaked out and
                made the connection weak. However, this 2023 study used advanced microwave testing
                to prove that these conducting polymers could toggle back and forth without
                degrading the signal at all. By achieving an efficiency that rivals traditional
                copper within a much smaller physical footprint, Garrett transitioned this idea
                from a laboratory theory into a high-performance prototype for the next generation
                of mobile technology.
              </p>
            </section>

            {/* Comparison infographic */}
            <div className="bg-navy text-primary-foreground p-8 my-10">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-4">Infographic · Comparison</div>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <div className="bg-navy p-5">
                  <div className="font-mono text-xs tracking-wider uppercase text-slate-light mb-3">Traditional</div>
                  <h3 className="font-serif text-3xl mb-3">Metal Antenna</h3>
                  <ul className="space-y-2 text-sm text-slate-light">
                    <li>→ Fixed frequency band</li>
                    <li>→ Rigid copper / gold</li>
                    <li>→ Multiple per device</li>
                    <li>→ Heavy, space-hungry</li>
                  </ul>
                </div>
                <div className="bg-navy-deep p-5">
                  <div className="font-mono text-xs tracking-wider uppercase text-copper mb-3">Smart</div>
                  <h3 className="font-serif text-3xl mb-3">Polymer Antenna</h3>
                  <ul className="space-y-2 text-sm text-slate-light">
                    <li>→ Re-tunes via voltage</li>
                    <li>→ Lightweight conductive plastic</li>
                    <li>→ One does many jobs</li>
                    <li>→ Compact, energy-efficient</li>
                  </ul>
                </div>
              </div>
            </div>

            <figure>
              <img src={infographicImg} alt="Smart polymer antenna broadcasting to multiple device icons" className="w-full h-auto" loading="lazy" width={1280} height={1280} />
              <figcaption className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-slate">
                Fig. — A single smart antenna replaces the cluster of fixed-frequency hardware inside today's devices.
              </figcaption>
            </figure>

            <section>
              <h2 className="font-serif text-2xl text-navy mb-3">A Smarter Signal</h2>
              <p className="text-navy leading-relaxed">
                This shift from "stubborn" metal to "smart" polymers has massive implications for
                the device in your pocket. As we move toward 5G and 6G, engineers currently have
                to cram multiple separate antennas into one phone to catch different signals.
                Garrett's research suggests a future where a single "Master Antenna" tunes itself
                to any frequency on the fly.
              </p>
              <p className="text-navy leading-relaxed mt-4">
                For you, this means significantly better battery life and sleeker devices, as
                manufacturers swap out redundant metal parts for more battery space. Ultimately,
                these reconfigurable antennas could work perfectly in any country, eliminating the
                "no service" moments that occur when hardware can't adapt to local frequencies.
                Thanks to researchers like B.S. Garrett, the invisible bridge connecting us to the
                world is finally becoming as flexible as the software we use every day.
              </p>
            </section>

            <blockquote className="border-l-4 border-copper pl-6 py-2 mt-10">
              <p className="font-serif text-2xl text-navy italic leading-tight">
                "The invisible bridge connecting us to the world is finally becoming as flexible as the software we use every day."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Byline */}
        <div className="mt-20 pt-8 border-t border-navy flex flex-wrap gap-6 justify-between items-center">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate mb-1">Author</div>
            <div className="font-serif text-2xl text-navy">Ethan Blair</div>
            <div className="text-sm text-slate">CU Boulder · Chemical Engineering</div>
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate text-right">
            Filed under: Materials, RF Hardware, Science Communication
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;