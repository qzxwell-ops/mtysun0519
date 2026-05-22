import Link from "next/link";
import { ArrowLeft, Download, Mail } from "lucide-react";
import { products, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id, locale: "en" }));
}

export const metadata = pageMetadata(
  "Product Detail | MTYSUN",
  "MTYSUN product details with OEM number, vehicle application and inquiry path.",
  "/en/products"
);

export default function ProductDetail({ params }: { params: { locale: Locale; id: string } }) {
  const product = products.find((item) => item.id === params.id) ?? products[0];

  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <Link href={`/${params.locale}/products`}>
            <ArrowLeft size={16} /> Back to catalog
          </Link>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split">
          <div className="card">
            <span className="tag">{product.category}</span>
            <h2>Product information</h2>
            <div className="product-meta">
              <span>OEM number: {product.oem}</span>
              <span>Vehicle application: {product.vehicle}</span>
              <span>Status: {product.status}</span>
              <span>Packaging: Neutral, MTYSUN brand, private label</span>
              <span>Documents: spec sheet, photos, carton label, certificate</span>
            </div>
          </div>
          <div className="card">
            <h2>Distributor actions</h2>
            <p>
              Product pages should guide buyers to send an RFQ, download a catalog, or request
              sample confirmation.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link className="btn btn-primary" href={`/${params.locale}/contact`}>
                <Mail size={17} />
                Request quote
              </Link>
              <Link className="btn" href="/catalogs/mtysun-product-catalog.pdf">
                <Download size={17} />
                Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
