# MTYSUN Website Upgrade Implementation Plan

## 1. Product Scope

The new website should cover public marketing pages, product catalog, distributor inquiry flow,
content publishing, multilingual SEO, and CMS operations.

Core frontend pages:

- Home
- Product catalog
- Product detail
- News list
- News detail
- About and quality
- Contact and inquiry
- Download center
- Market landing pages

Core CMS modules:

- Product management
- Product categories
- OEM cross-reference
- Vehicle applications
- News and insights
- Media library
- SEO metadata
- Menus and footer
- Inquiry management
- User roles
- Publish workflow
- Content update plan

## 2. Recommended Production Stack

- Frontend: Next.js
- CMS: Directus or Strapi
- Database: PostgreSQL
- File storage: Alibaba OSS, Tencent COS, AWS S3 or Cloudflare R2
- CDN: Cloudflare or local China-friendly CDN
- Analytics: Google Analytics, Microsoft Clarity, Google Search Console, Bing Webmaster Tools
- Lead routing: email, WhatsApp link, HubSpot, Zoho CRM or enterprise WeChat

## 3. CMS Data Model

Product:

- name
- slug
- category
- OEM numbers
- vehicle applications
- short description
- detailed description
- specifications
- images
- downloads
- packaging options
- status
- SEO title
- SEO description
- language versions

Article:

- title
- slug
- category
- author
- publish date
- cover image
- excerpt
- body
- related products
- SEO title
- SEO description

Inquiry:

- buyer name
- company
- email
- WhatsApp
- market
- product interest
- OEM number
- message
- source page
- status
- assigned sales owner
- follow-up notes

Media:

- file
- alt text
- caption
- usage page
- language
- copyright owner
- status

## 4. SEO Checklist

- Static or server-rendered pages
- Clean multilingual URLs
- Canonical URLs
- `hreflang` alternatives
- XML sitemap
- Robots rules
- Open Graph metadata
- Product schema
- Organization schema
- Breadcrumb schema
- Optimized image alt text
- Internal links from articles to products
- 301 redirects from old `index.asp` URLs

## 5. 90-Day Content Upgrade Plan

Weeks 1-2:

- Audit current website pages
- List old pages to keep, rewrite, merge or delete
- Create product category map
- Build photo and video shooting list
- Create multilingual glossary for product names and OEM terms

Weeks 3-6:

- Rewrite homepage, about, quality and contact pages
- Create 30-50 priority product pages
- Create top category landing pages
- Publish 8-12 buyer-focused articles
- Upload certificates, catalogs and download files

Weeks 7-12:

- Publish 3-4 content pieces per week
- Add country or region landing pages
- Track product keyword ranking
- Track inquiry conversion by source page
- Add FAQ based on real sales questions

## 6. Suggested Shooting List

- Factory exterior and reception
- Production or assembly process
- Quality inspection desk
- Measuring tools and inspection reports
- Packaging line
- Carton and label details
- Warehouse shelves
- Export shipment preparation
- Product white-background photos
- Team portraits for sales and quality
- Short video clips for homepage and social media

## 7. Launch Checklist

- Import initial products
- Import articles
- Configure redirects
- Connect inquiry email
- Add analytics
- Compress images
- Check mobile layout
- Check page speed
- Submit sitemap
- Verify Search Console
