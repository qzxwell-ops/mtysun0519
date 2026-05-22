import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Auto Parts News and Distributor Insights | MTYSUN",
  "Company updates, product programs, quality notes and practical aftermarket distribution insights.",
  "/en/news"
);

export default function NewsPage({ params }: { params: { locale: Locale } }) {
  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <h1>News and insights</h1>
          <p>Use content to win product keywords, explain capability and support buyer decisions.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid-3">
          {news.map((item) => (
            <article className="card" key={item.id}>
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <p style={{ marginTop: 14 }}>{item.date}</p>
              <Link className="btn" href={`/${params.locale}/news/${item.id}`}>
                Read article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
