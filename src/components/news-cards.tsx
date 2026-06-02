"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news, type NewsRecord } from "@/lib/site-data";

function readNews() {
  if (typeof window === "undefined") return news;
  const stored = window.localStorage.getItem("mtysun.news");
  if (!stored) return news;

  try {
    const parsed = JSON.parse(stored) as NewsRecord[];
    return parsed.map((item, index) => ({
      ...item,
      image: item.image || news[index % news.length]?.image || "/products/ford-brake-pad.png"
    }));
  } catch {
    return news;
  }
}

export function NewsCards({ locale, limit }: { locale: string; limit?: number }) {
  const [rows, setRows] = useState<NewsRecord[]>(news);

  useEffect(() => {
    setRows(readNews());
  }, []);

  return (
    <div className="grid-3">
      {rows.slice(0, limit).map((item) => (
        <article className="card news-card" key={item.id}>
          <div className="news-image-wrap">
            <img src={item.image} alt={item.title} className="news-image" />
          </div>
          <span className="tag">{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <p style={{ marginTop: 14 }}>{item.date}</p>
          <Link className="btn" href={`/${locale}/news/${item.id}`}>
            Read article <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function NewsArticle({
  id,
  locale,
  initial
}: {
  id: string;
  locale: string;
  initial: NewsRecord;
}) {
  const [article, setArticle] = useState(initial);

  useEffect(() => {
    const match = readNews().find((item) => item.id === id);
    if (match) setArticle(match);
  }, [id]);

  return (
    <>
      <section className="page-title">
        <div className="section-inner">
          <Link href={`/${locale}/news`}>
            Back to news
          </Link>
          <h1>{article.title}</h1>
          <p>
            {article.tag} | {article.date}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner" style={{ maxWidth: 920 }}>
          <div className="article-cover">
            <img src={article.image} alt={article.title} />
          </div>
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
    </>
  );
}
