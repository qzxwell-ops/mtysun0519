import { Award, CheckCircle2, ClipboardCheck, Factory } from "lucide-react";
import { capabilities } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About MTYSUN | Quality and Export Capability",
  "MTYSUN company profile, export capability, factory proof, inspection process and quality system.",
  "/en/about"
);

export default function AboutPage() {
  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <h1>About and quality</h1>
          <p>Make company proof visible, current and useful for overseas buyers.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div>
            <span className="eyebrow" style={{ color: "#0e7490" }}>
              <Factory size={17} />
              Supplier proof
            </span>
            <h2>From old brochure pages to a trust-building company profile.</h2>
            <p>
              The upgraded website should show real factory scenes, inspection process, warehouse
              capability, certificates, export documents and team contacts. Buyers need proof before
              they ask for price.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <Award />
              <h3>Certificates</h3>
              <p>Editable certificates, expiry dates and downloadable files.</p>
            </div>
            <div className="card">
              <ClipboardCheck />
              <h3>Inspection</h3>
              <p>Incoming, production, packaging and shipment checks.</p>
            </div>
            <div className="card">
              <CheckCircle2 />
              <h3>Export</h3>
              <p>Documents, labels, cartons and market-ready service.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="section-inner grid-3">
          {capabilities.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>Managed in CMS with localized copy, image gallery and SEO metadata.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
