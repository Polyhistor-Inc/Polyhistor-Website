import { Metadata } from "next";
import VersionHistoryPage from "@/components/legal/VersionHistoryPage";

export const metadata: Metadata = {
  title: "EULA Version History | Polyhistor",
  description: "View all versions of the Polyhistor End User License Agreement and track changes over time.",
};

export default function EULAVersions() {
  return <VersionHistoryPage documentType="eula" title="EULA" />;
}
