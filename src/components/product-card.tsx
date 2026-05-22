import { ArrowRight, PackageSearch } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category: string;
  vehicle: string;
  oem: string;
  description: string;
};

export function ProductCard({ product, locale }: { product: Product; locale: string }) {
  return (
    <article className="card product-card">
      <div>
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span>Vehicle: {product.vehicle}</span>
          <span>OEM: {product.oem}</span>
        </div>
      </div>
      <Link className="btn" href={`/${locale}/products/${product.id}`}>
        <PackageSearch size={17} />
        Details
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
