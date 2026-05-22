"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  FileText,
  Image,
  Inbox,
  LayoutDashboard,
  LogOut,
  Package,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Users
} from "lucide-react";
import { contentPlan, news, products, seoPages } from "@/lib/site-data";

const modules = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "news", label: "News", icon: FileText },
  { id: "media", label: "Media", icon: Image },
  { id: "seo", label: "SEO", icon: Search },
  { id: "inquiries", label: "Inquiries", icon: Inbox },
  { id: "users", label: "Users", icon: Users },
  { id: "plan", label: "Content Plan", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings }
];

const inquiries = [
  {
    id: "RFQ-2026-001",
    name: "Global Parts LLC",
    market: "United States",
    interest: "Brake pads / OEM 04465",
    status: "New"
  },
  {
    id: "RFQ-2026-002",
    name: "Auto Norte",
    market: "Mexico",
    interest: "Suspension program",
    status: "Quoted"
  },
  {
    id: "RFQ-2026-003",
    name: "Korea Parts Hub",
    market: "South Korea",
    interest: "Oxygen sensor sample",
    status: "Follow-up"
  }
];

export function AdminConsole() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState("dashboard");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      `${product.name} ${product.category} ${product.vehicle} ${product.oem}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  if (!loggedIn) {
    return (
      <main className="admin-shell" style={{ gridTemplateColumns: "1fr" }}>
        <section className="section">
          <div className="section-inner" style={{ maxWidth: 460 }}>
            <div className="card">
              <ShieldCheck color="#d6242f" />
              <h1>MTYSUN CMS</h1>
              <p>Manage products, news, SEO, inquiries, media and publishing workflow.</p>
              <div className="form" style={{ marginTop: 20 }}>
                <input className="input" defaultValue="admin@mtysun.com" />
                <input className="input" type="password" defaultValue="Mtysun2026" />
                <button className="btn btn-primary" type="button" onClick={() => setLoggedIn(true)}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <aside className="admin-side">
        <h2>MTYSUN CMS</h2>
        <p style={{ color: "#9ca3af" }}>Advanced website control center</p>
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <button
              className={active === module.id ? "active" : ""}
              key={module.id}
              type="button"
              onClick={() => setActive(module.id)}
            >
              <Icon size={17} />
              {module.label}
            </button>
          );
        })}
        <button type="button" onClick={() => setLoggedIn(false)}>
          <LogOut size={17} />
          Sign out
        </button>
      </aside>
      <section className="admin-main">
        <div className="admin-top">
          <div>
            <h1>{modules.find((module) => module.id === active)?.label}</h1>
            <p>Role: Admin | Workflow: Draft, Review, Published</p>
          </div>
          <button className="btn btn-primary" type="button">
            <Plus size={17} />
            New item
          </button>
        </div>
        {active === "dashboard" && <Dashboard />}
        {active === "products" && (
          <ProductsAdmin query={query} setQuery={setQuery} products={filteredProducts} />
        )}
        {active === "news" && <NewsAdmin />}
        {active === "media" && <MediaAdmin />}
        {active === "seo" && <SeoAdmin />}
        {active === "inquiries" && <InquiryAdmin />}
        {active === "users" && <UsersAdmin />}
        {active === "plan" && <PlanAdmin />}
        {active === "settings" && <SettingsAdmin />}
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <>
      <div className="admin-grid">
        <div className="card">
          <h3>{products.length}</h3>
          <p>Products</p>
        </div>
        <div className="card">
          <h3>{news.length}</h3>
          <p>Articles</p>
        </div>
        <div className="card">
          <h3>{inquiries.length}</h3>
          <p>Inquiries</p>
        </div>
        <div className="card">
          <h3>92</h3>
          <p>SEO score target</p>
        </div>
      </div>
      <div className="card" style={{ marginTop: 18 }}>
        <h2>Editorial queue</h2>
        <p>
          This dashboard should connect to analytics, search console, inquiry forms and publishing
          approvals in production.
        </p>
      </div>
    </>
  );
}

function ProductsAdmin({
  query,
  setQuery,
  products: rows
}: {
  query: string;
  setQuery: (value: string) => void;
  products: typeof products;
}) {
  return (
    <>
      <input
        className="input"
        placeholder="Search product, category, OEM or vehicle"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        style={{ marginBottom: 16 }}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>OEM</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.oem}</td>
              <td>{product.vehicle}</td>
              <td>
                <span className={product.status === "Draft" ? "status status-draft" : "status"}>
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function NewsAdmin() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Tag</th>
          <th>Date</th>
          <th>SEO</th>
        </tr>
      </thead>
      <tbody>
        {news.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.tag}</td>
            <td>{item.date}</td>
            <td>
              <span className="status">Ready</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MediaAdmin() {
  const media = ["Product white background", "Factory inspection", "Packaging detail", "Team portrait"];
  return (
    <div className="grid-4">
      {media.map((item) => (
        <div className="card" key={item}>
          <Image />
          <h3>{item}</h3>
          <p>Alt text, caption, market language and file status are managed here.</p>
        </div>
      ))}
    </div>
  );
}

function SeoAdmin() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Path</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {seoPages.map((page) => (
          <tr key={page.path}>
            <td>{page.path}</td>
            <td>{page.title}</td>
            <td>{page.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function InquiryAdmin() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Buyer</th>
          <th>Market</th>
          <th>Interest</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {inquiries.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.market}</td>
            <td>{item.interest}</td>
            <td>
              <span className="status">{item.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function UsersAdmin() {
  return (
    <div className="grid-3">
      {["Admin", "Editor", "Sales"].map((role) => (
        <div className="card" key={role}>
          <Users />
          <h3>{role}</h3>
          <p>Permission scope: create, edit, review, publish, export or reply to inquiries.</p>
        </div>
      ))}
    </div>
  );
}

function PlanAdmin() {
  return (
    <div className="grid-3">
      {contentPlan.map((phase) => (
        <div className="card" key={phase.phase}>
          <span className="tag">{phase.phase}</span>
          <h3>{phase.title}</h3>
          {phase.actions.map((action) => (
            <p key={action}>- {action}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

function SettingsAdmin() {
  return (
    <div className="grid-3">
      {["Languages", "Menus", "Integrations"].map((item) => (
        <div className="card" key={item}>
          <Settings />
          <h3>{item}</h3>
          <p>Configure website behavior, publishing rules and third-party tools.</p>
        </div>
      ))}
    </div>
  );
}
