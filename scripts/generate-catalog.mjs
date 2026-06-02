import fs from "fs";
import path from "path";

const products = [
  {
    name: "Ceramic Brake Pad Set MT-8801",
    category: "Brake System",
    vehicle: "Toyota / Honda / Nissan",
    oem: "04465-0K290",
    status: "Published",
    description:
      "Low-noise ceramic brake pad set for daily replacement programs and distributor stock planning."
  },
  {
    name: "Front Lower Control Arm MT-4210",
    category: "Suspension",
    vehicle: "Ford / Chevrolet",
    oem: "CK620065",
    status: "Published",
    description:
      "Heavy-duty stamped control arm with bushings installed, designed for export aftermarket channels."
  },
  {
    name: "Oxygen Sensor MT-1128",
    category: "Electrical",
    vehicle: "Hyundai / Kia",
    oem: "39210-2B000",
    status: "Draft",
    description: "Direct-fit sensor for emission repair demand with barcode-ready packaging options."
  },
  {
    name: "Water Pump Assembly MT-3022",
    category: "Cooling System",
    vehicle: "Volkswagen / Audi",
    oem: "06H121026",
    status: "Published",
    description:
      "Aluminum water pump assembly with tested seal performance and stable batch availability."
  }
];

const outDir = path.join(process.cwd(), "public", "catalogs");
const outFile = path.join(outDir, "mtysun-product-catalog.pdf");

fs.mkdirSync(outDir, { recursive: true });

function esc(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const lines = [
  "MTYSUN Auto Parts Product Catalog",
  "Global aftermarket replacement parts supplier",
  "",
  "Core Product Programs",
  ...products.flatMap((product, index) => [
    "",
    `${index + 1}. ${product.name}`,
    `Category: ${product.category}`,
    `Vehicle: ${product.vehicle}`,
    `OEM: ${product.oem}`,
    `Status: ${product.status}`,
    `Description: ${product.description}`
  ]),
  "",
  "Contact",
  "Email: sales@mtysun.com",
  "Website: https://www.mtysun.com",
  "Services: RFQ, sample request, catalog download, private label packaging"
];

const objects = [];
function addObject(body) {
  objects.push(body);
  return objects.length;
}

const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
const pagesId = addObject("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
const pageId = addObject(
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>"
);
const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

let y = 800;
const content = ["BT"];
content.push("/F2 22 Tf");
content.push(`50 ${y} Td (${esc(lines[0])}) Tj`);
y -= 28;
content.push("/F1 10 Tf");
for (const line of lines.slice(1)) {
  if (y < 50) break;
  if (!line) {
    y -= 12;
    continue;
  }
  const font = line.match(/^\d+\.|Core Product Programs|Contact/) ? "/F2 11 Tf" : "/F1 9 Tf";
  content.push(font);
  content.push(`50 ${y} Td (${esc(line.slice(0, 105))}) Tj`);
  content.push(`-50 -${y} Td`);
  y -= 16;
}
content.push("ET");

const stream = content.join("\n");
const streamId = addObject(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

fs.writeFileSync(outFile, pdf);
console.log(outFile);
