import { ProductCard } from "@/components/product-card";
import { categories, products, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Auto Parts Catalog | MTYSUN",
  "Search MTYSUN product categories, OEM numbers, vehicle applications and export-ready aftermarket parts.",
  "/en/products"
);

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <h1>Product catalog</h1>
          <p>Search by category, OEM number, vehicle application and product program.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="filters">
            <input className="input" placeholder="Search product, OEM or vehicle" />
            <select className="input" defaultValue="">
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <select className="input" defaultValue="">
              <option value="">All statuses</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
          <div className="grid-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} locale={params.locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
