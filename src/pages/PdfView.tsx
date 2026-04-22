import { useEffect } from "react";

interface PdfViewProps {
  src: string;
  title: string;
  eyebrow: string;
}

const PdfView = ({ src, title, eyebrow }: PdfViewProps) => {
  useEffect(() => {
    document.title = `${title} · Ethan Blair`;
  }, [title]);

  return (
    <section className="bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper mb-3">{eyebrow}</div>
          <h1 className="font-serif text-3xl lg:text-4xl text-navy">{title}</h1>
        </div>
        <a
          href={src}
          download
          className="font-mono text-[11px] tracking-[0.2em] uppercase border border-navy text-navy px-4 py-2 hover:bg-navy hover:text-primary-foreground transition"
        >
          Download PDF
        </a>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <object data={src} type="application/pdf" className="w-full h-[85vh] border border-steel bg-background">
          <iframe src={src} title={title} className="w-full h-[85vh] border-0" />
        </object>
      </div>
    </section>
  );
};

export default PdfView;