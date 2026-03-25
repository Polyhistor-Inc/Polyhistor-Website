import { Metadata } from "next";
import VersionViewPage from "@/components/legal/VersionViewPage";

interface PageProps {
  params: Promise<{ version: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { version } = await params;
  return {
    title: `EULA v${version} | Polyhistor`,
    description: `Archived version ${version} of the Polyhistor End User License Agreement.`,
  };
}

export default async function EULAVersion({ params }: PageProps) {
  const { version } = await params;
  return <VersionViewPage documentType="eula" title="EULA" version={version} />;
}
