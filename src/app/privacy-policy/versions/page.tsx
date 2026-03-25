import { Metadata } from "next";
import VersionHistoryPage from "@/components/legal/VersionHistoryPage";

export const metadata: Metadata = {
  title: "Privacy Policy Version History | Polyhistor",
  description: "View all versions of the Polyhistor Privacy Policy and track changes over time.",
};

export default function PrivacyPolicyVersions() {
  return <VersionHistoryPage documentType="privacy-policy" title="Privacy Policy" />;
}
