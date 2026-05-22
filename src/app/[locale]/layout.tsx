import { SiteFooter, SiteHeader } from "@/components/site-header";
import { locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <div className="site-shell">
      <SiteHeader locale={params.locale} />
      {children}
      <SiteFooter locale={params.locale} />
    </div>
  );
}
