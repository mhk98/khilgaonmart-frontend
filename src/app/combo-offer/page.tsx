import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";

export const revalidate = 60;

export const metadata: Metadata = { title: "Combo Offer - Khilgaon Mart" };

export default function ComboOfferPage() {
  return <CollectionPage title="Combo Offer" comingSoon="কম্বো অফার শীঘ্রই আসছে।" />;
}
