import { Metadata } from "next";
import VersionViewPage from "@/components/legal/VersionViewPage";

interface PageProps {
  params: Promise<{ version: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { version } = await params;
  return {
    title: `Privacy Policy v${version} | Polyhistor`,
    description: `Archived version ${version} of the Polyhistor Privacy Policy.`,
  };
}

export default async function PrivacyPolicyVersion({ params }: PageProps) {
  const { version } = await params;
  return <VersionViewPage documentType="privacy-policy" title="Privacy Policy" version={version} />;
}
