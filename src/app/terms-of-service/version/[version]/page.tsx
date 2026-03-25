import { Metadata } from "next";
import VersionViewPage from "@/components/legal/VersionViewPage";

interface PageProps {
  params: Promise<{ version: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { version } = await params;
  return {
    title: `Terms of Service v${version} | Polyhistor`,
    description: `Archived version ${version} of the Polyhistor Terms of Service.`,
  };
}

export default async function TermsOfServiceVersion({ params }: PageProps) {
  const { version } = await params;
  return <VersionViewPage documentType="terms-of-service" title="Terms of Service" version={version} />;
}
