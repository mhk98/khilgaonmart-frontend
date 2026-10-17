import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const revalidate = 60;

export const metadata: Metadata = { title: "Get Coupon - Khilgaon Mart" };

export default function CouponsPage() {
  return (
    <CollectionPage
      title="Get Coupon"
      comingSoon="নতুন কুপন শীঘ্রই আসছে। কুপন কোড থাকলে চেকআউটে ব্যবহার করুন।"
    />
  );
}
