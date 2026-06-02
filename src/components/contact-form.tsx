"use client";

import { FormEvent, useState } from "react";

type InquiryRecord = {
  id: string;
  name: string;
  market: string;
  interest: string;
  status: "New" | "Assigned" | "Quoted" | "Follow-up" | "Won" | "Lost";
};

function readInquiries() {
  const stored = window.localStorage.getItem("mtysun.inquiries");
  if (!stored) return [];

  try {
    return JSON.parse(stored) as InquiryRecord[];
  } catch {
    return [];
  }
}

export function ContactForm() {
  const [confirmation, setConfirmation] = useState<InquiryRecord | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const type = String(data.get("type") ?? "quote");
    const note = String(data.get("message") ?? "").trim();

    const inquiry: InquiryRecord = {
      id: `RFQ-${Date.now().toString().slice(-6)}`,
      name: name || "Website visitor",
      market: contact || "Website form",
      interest: `${type.toUpperCase()} | ${product || "General inquiry"}${note ? ` | ${note}` : ""}`,
      status: "New"
    };

    window.localStorage.setItem("mtysun.inquiries", JSON.stringify([inquiry, ...readInquiries()]));
    window.dispatchEvent(new CustomEvent("mtysun:inquiries-updated", { detail: inquiry }));
    form.reset();
    setConfirmation(inquiry);

    if (type === "catalog") {
      window.setTimeout(() => {
        window.open("/catalogs/mtysun-product-catalog.pdf", "_blank", "noopener,noreferrer");
      }, 300);
    }
  }

  return (
    <form className="card form" onSubmit={submit}>
      <input className="input" name="name" placeholder="Name" required />
      <input className="input" name="contact" placeholder="Email / WhatsApp" required />
      <input className="input" name="product" placeholder="Product / OEM number" />
      <select className="input" name="type" defaultValue="quote">
        <option value="quote">Request quote</option>
        <option value="catalog">Download catalog</option>
        <option value="sample">Request sample</option>
        <option value="cooperation">Distributor cooperation</option>
      </select>
      <textarea className="input textarea" name="message" placeholder="Message" />
      {confirmation && (
        <div className="form-success">
          <strong>Request received. RFQ No.: {confirmation.id}</strong>
          <span>
            Our sales team will review your request and reply by email or WhatsApp. You can continue
            browsing products or download the catalog while waiting.
          </span>
          <a className="btn" href="/catalogs/mtysun-product-catalog.pdf" target="_blank">
            Download catalog
          </a>
        </div>
      )}
      <button className="btn btn-primary" type="submit">
        Submit inquiry
      </button>
    </form>
  );
}
