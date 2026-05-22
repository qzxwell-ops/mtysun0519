import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact MTYSUN | Request Auto Parts Quote",
  "Contact MTYSUN for product quotation, catalog download, sample request and distributor cooperation.",
  "/en/contact"
);

export default function ContactPage() {
  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <h1>Contact MTYSUN</h1>
          <p>Turn traffic into RFQ, catalog download, sample request and cooperation leads.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner contact-grid">
          <div className="card">
            <h2>Sales office</h2>
            <p>
              <MapPin size={16} /> China export office
            </p>
            <p>
              <Mail size={16} /> sales@mtysun.com
            </p>
            <p>
              <Phone size={16} /> +86 000 0000 0000
            </p>
            <p>
              <MessageSquare size={16} /> WhatsApp / WeChat supported
            </p>
          </div>
          <form className="card form">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email / WhatsApp" />
            <input className="input" placeholder="Product / OEM number" />
            <select className="input" defaultValue="quote">
              <option value="quote">Request quote</option>
              <option value="catalog">Download catalog</option>
              <option value="sample">Request sample</option>
              <option value="cooperation">Distributor cooperation</option>
            </select>
            <textarea className="input textarea" placeholder="Message" />
            <button className="btn btn-primary" type="button">
              Submit inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
