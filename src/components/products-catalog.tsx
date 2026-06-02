"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type ProductRecord } from "@/lib/site-data";

function readProducts() {
  const stored = window.localStorage.getItem("mtysun.products");
  if (!stored) return products;

  try {
    const parsed = JSON.parse(stored) as ProductRecord[];
    return parsed.map((item, index) => ({
      ...item,
      image: item.image || products[index % products.length]?.image || "/products/ford-brake-pad.png"
    }));
  } catch {
    return products;
  }
}

export function ProductsCatalog({ locale }: { locale: string }) {
  const [rows, setRows] = useState<ProductRecord[]>(products);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [applied, setApplied] = useState({ keyword: "", category: "", status: "" });

  useEffect(() => {
    setRows(readProducts());
  }, []);

  const filtered = useMemo(() => {
    return rows.filter((product) => {
      const text = `${product.name} ${product.category} ${product.vehicle} ${product.oem} ${product.description}`
        .toLowerCase();
      const matchesKeyword = !applied.keyword || text.includes(applied.keyword.toLowerCase());
      const matchesCategory = !applied.category || product.category === applied.category;
      const matchesStatus = !applied.status || product.status === applied.status;

      return matchesKeyword && matchesCategory && matchesStatus;
    });
  }, [rows, applied]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApplied({ keyword, category, status });
  }

  function reset() {
    setKeyword("");
    setCategory("");
    setStatus("");
    setApplied({ keyword: "", category: "", status: "" });
  }

  return (
    <>
      <form className="filters product-search" onSubmit={submit}>
        <input
          className="input"
          placeholder="Search product, OEM or vehicle"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <select className="input" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="input" value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">All statuses</option>
          <option>Published</option>
          <option>Review</option>
          <option>Draft</option>
        </select>
        <div className="search-actions">
          <button className="btn btn-primary" type="submit">
            <Search size={17} />
            Search
          </button>
          <button className="btn" type="button" onClick={reset}>
            <RotateCcw size={17} />
            Reset
          </button>
        </div>
      </form>
      <p className="result-count">{filtered.length} products found</p>
      {filtered.length > 0 ? (
        <div className="grid-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="card">
          <h3>No matching products</h3>
          <p>Try another OEM number, category, vehicle application, or clear the filters.</p>
        </div>
      )}
    </>
  );
}
