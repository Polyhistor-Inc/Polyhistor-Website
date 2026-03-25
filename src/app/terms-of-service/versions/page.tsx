import { Metadata } from "next";
import VersionHistoryPage from "@/components/legal/VersionHistoryPage";

export const metadata: Metadata = {
  title: "Terms of Service Version History | Polyhistor",
  description: "View all versions of the Polyhistor Terms of Service and track changes over time.",
};

export default function TermsOfServiceVersions() {
  return <VersionHistoryPage documentType="terms-of-service" title="Terms of Service" />;
}
