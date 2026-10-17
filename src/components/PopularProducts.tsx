import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import type { Product } from "@/data/products";
import { productHref } from "@/lib/productUrl";

const PRIMARY = "#0E4A5F";

const fmt = (v: number) => v.toLocaleString("en-US");

// Picks products for the product page's side panel: the ones marked
// "Best Deals" in admin first, topped up with the newest products.
export function pickPopularProducts(all: Product[], excludeId: number, limit = 6): Product[] {
  const others = all.filter((p) => p.id !== excludeId);
  const flagged = others.filter((p) => p.bestDeals);
  const rest = others.filter((p) => !p.bestDeals);
  return [...flagged, ...rest].slice(0, limit);
}

export default function PopularProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <div className="delivery-card">
      <div className="delivery-card-head">
        <p>Popular Products</p>
      </div>
      <div style={{ padding: "0 16px 8px" }}>
        {products.map((p, idx) => (
          <Link
            key={p.id}
            href={productHref(p)}
            className="transition hover:opacity-80"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
              borderBottom: idx < products.length - 1 ? "1px solid #eef0f2" : "none",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 64,
                height: 64,
                flexShrink: 0,
                borderRadius: 6,
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                background: "#f9fafb",
              }}
            >
              <SafeImage sources={[p.image, ...(p.gallery || [])]} alt={p.name} fill className="object-contain" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1f2937",
                  lineHeight: 1.35,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.name}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: PRIMARY }}>৳{fmt(p.discountedPrice)}</span>
                {p.discount > 0 && (
                  <span style={{ fontSize: 12, color: "#9ca3af", textDecoration: "line-through" }}>
                    ৳{fmt(p.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
