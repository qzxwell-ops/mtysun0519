import Link from "next/link";
import { Globe2, Mail, MapPin, Search, ShieldCheck } from "lucide-react";
import { dictionary, type Locale } from "@/lib/site-data";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>Global aftermarket auto parts supplier</span>
          <span>sales@mtysun.com | WhatsApp: +86 000 0000 0000</span>
        </div>
      </div>
      <header className="nav">
        <div className="nav-inner">
          <Link className="logo" href={`/${locale}`} aria-label="MTYSUN home">
            <span className="logo-mark">M</span>
            <span>
              MTYSUN
              <br />
              <small>Auto Parts</small>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href={`/${locale}/products`}>{copy.nav.products}</Link>
            <Link href={`/${locale}/about`}>{copy.nav.quality}</Link>
            <Link href={`/${locale}/news`}>{copy.nav.news}</Link>
            <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
            <Link href={`/${locale}/contact`}>{copy.nav.contact}</Link>
          </nav>
          <div className="nav-actions">
            <Link className="btn" href={locale === "en" ? "/zh" : "/en"} aria-label="Switch language">
              <Globe2 size={17} />
            </Link>
            <Link className="btn" href="/admin" aria-label="Admin">
              <ShieldCheck size={17} />
            </Link>
            <Link className="btn btn-primary" href={`/${locale}/contact`}>
              <Mail size={17} />
              {copy.cta.inquiry}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-grid">
          <div>
            <h3>MTYSUN Auto Parts</h3>
            <p>
              Modernized global website, CMS and SEO structure for distributor-focused aftermarket
              product growth.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <Link href={`/${locale}/products`}>Brake System</Link>
            <Link href={`/${locale}/products`}>Suspension</Link>
            <Link href={`/${locale}/products`}>Engine Parts</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href={`/${locale}/about`}>Quality</Link>
            <Link href={`/${locale}/news`}>News</Link>
            <Link href={`/${locale}/contact`}>Contact</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <MapPin size={15} /> China export office
            </p>
            <p>
              <Mail size={15} /> sales@mtysun.com
            </p>
            <p>
              <Search size={15} /> OEM number search ready
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
