"use client";

import { legalDocumentRegistry } from "@/data/legal-versions";
import Link from "next/link";
import { notFound } from "next/navigation";

interface VersionViewPageProps {
  documentType: "eula" | "privacy-policy" | "terms-of-service";
  title: string;
  version: string;
}

export default function VersionViewPage({ documentType, title, version }: VersionViewPageProps) {
  const doc = legalDocumentRegistry.documents[documentType];
  const versionData = doc.versions.find((v) => v.version === version);

  if (!versionData) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href={`/${documentType}/versions`}
            className="text-sm text-[#a855f7] hover:underline"
          >
            ← Back to {title} Version History
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-white">
          {title} v{version}
        </h1>
        <p className="text-white/50 mb-8">
          Effective Date: {versionData.effectiveDate}
        </p>

        {versionData.summaryOfChanges.length > 0 && (
          <div className="mb-6 p-4 bg-[rgba(102,126,234,0.05)] border border-[rgba(102,126,234,0.15)] rounded-lg">
            <h2 className="font-semibold mb-2 text-white">Summary of Changes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
              {versionData.summaryOfChanges.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 text-center">
          <p className="text-white/50 text-sm mb-3">
            The full document content for version {version} is archived. View the current version for the complete text.
          </p>
          <Link
            href={`/${documentType}`}
            className="inline-flex items-center gap-1 text-sm text-[#a855f7] hover:underline"
          >
            View current {title} →
          </Link>
        </div>
      </div>
    </main>
  );
}
