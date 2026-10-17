import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const revalidate = 60;

export const metadata: Metadata = { title: "Flash Sale - Khilgaon Mart" };

export default function FlashSalePage() {
  return <CollectionPage title="Flash Sale" comingSoon="ফ্ল্যাশ সেল শীঘ্রই আসছে।" />;
}
