import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { news, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return news.map((item) => ({ id: item.id, locale: "en" }));
}

export default function ArticlePage({ params }: { params: { locale: Locale; id: string } }) {
  const article = news.find((item) => item.id === params.id) ?? news[0];

  return (
    <main>
      <section className="page-title">
        <div className="section-inner">
          <Link href={`/${params.locale}/news`}>
            <ArrowLeft size={16} /> Back to news
          </Link>
          <h1>{article.title}</h1>
          <p>
            {article.tag} | {article.date}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <p style={{ color: "#334155", fontSize: 19, lineHeight: 1.8 }}>{article.excerpt}</p>
          <div className="card">
            <h2>Suggested CMS article structure</h2>
            <p>
              Start with buyer pain point, explain product or capability, add photos, include FAQ,
              add related products, then finish with a direct inquiry call to action.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
