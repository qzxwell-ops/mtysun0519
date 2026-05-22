import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Factory, Search, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { capabilities, dictionary, news, products, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "MTYSUN Auto Parts | Global Aftermarket Parts Supplier",
  "Modern aftermarket auto parts supplier with product catalog, quality control, multilingual service and distributor inquiries.",
  "/en"
);

export default function Home({ params }: { params: { locale: Locale } }) {
  const copy = dictionary[params.locale];
  const featured = products.filter((product) => product.featured);

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">
            <ShieldCheck size={17} />
            {copy.home.proof}
          </span>
          <h1>{copy.home.title}</h1>
          <p>{copy.home.subtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={`/${params.locale}/products`}>
              <Search size={18} />
              {copy.cta.viewProducts}
            </Link>
            <Link className="btn btn-dark" href={`/${params.locale}/contact`}>
              {copy.cta.inquiry}
              <ArrowRight size={18} />
            </Link>
            <Link className="btn" href="/catalogs/mtysun-product-catalog.pdf">
              <Download size={18} />
              {copy.cta.catalog}
            </Link>
          </div>
          <div className="hero-metrics" aria-label="Company metrics">
            <div className="metric">
              <strong>10+</strong>
              <span>Years online</span>
            </div>
            <div className="metric">
              <strong>6</strong>
              <span>Core categories</span>
            </div>
            <div className="metric">
              <strong>30+</strong>
              <span>Export markets</span>
            </div>
            <div className="metric">
              <strong>24h</strong>
              <span>Inquiry response goal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2>Designed for distributors who need fast matching and reliable supply.</h2>
              <p>
                The new MTYSUN site turns a dated brochure website into a product-led buying
                experience with search, clear categories, proof, and conversion paths.
              </p>
            </div>
            <Link className="btn" href={`/${params.locale}/about`}>
              Quality system
            </Link>
          </div>
          <div className="grid-3">
            {capabilities.slice(0, 6).map((item) => (
              <div className="card" key={item}>
                <CheckCircle2 color="#0e7490" />
                <h3>{item}</h3>
                <p>
                  Clear CMS fields make this content editable by marketing and sales teams without
                  developer help.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2>Featured product programs</h2>
              <p>
                Product pages support category, OEM number, vehicle application, downloadable
                materials and inquiry forms.
              </p>
            </div>
            <Link className="btn btn-primary" href={`/${params.locale}/products`}>
              Full catalog
            </Link>
          </div>
          <div className="grid-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} locale={params.locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <div>
            <span className="eyebrow" style={{ color: "#0e7490" }}>
              <Factory size={17} />
              Factory and quality proof
            </span>
            <h2>Replace old photos with buyer-ready visual proof.</h2>
            <p>
              Use fresh product photography, inspection scenes, packaging details, warehouse
              operations and team portraits. This makes the site feel current and helps overseas
              buyers trust the supplier before sending an inquiry.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 color="#0e7490" /> Product white-background images
              </li>
              <li>
                <CheckCircle2 color="#0e7490" /> Quality inspection and packaging photos
              </li>
              <li>
                <CheckCircle2 color="#0e7490" /> Short videos for factory and shipment proof
              </li>
            </ul>
          </div>
          <div className="image-panel" aria-label="Factory visual placeholder" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2>Latest updates</h2>
              <p>News pages become SEO content hubs for product education and buyer intent.</p>
            </div>
            <Link className="btn" href={`/${params.locale}/news`}>
              View news
            </Link>
          </div>
          <div className="grid-3">
            {news.map((item) => (
              <article className="card" key={item.id}>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
