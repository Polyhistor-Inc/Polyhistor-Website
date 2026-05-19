"use client";

import { legalDocumentRegistry } from "@/data/legal-versions";
import { useState } from "react";

interface VersionHistoryPageProps {
  documentType: "eula" | "privacy-policy" | "terms-of-service";
  title: string;
}

export default function VersionHistoryPage({ documentType, title }: VersionHistoryPageProps) {
  const doc = legalDocumentRegistry.documents[documentType];
  const [selectedVersion, setSelectedVersion] = useState(doc.versions[doc.versions.length - 1]);

  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">{title} Version History</h1>
        <p className="text-white/50 mb-8">
          Current version: <strong className="text-white">{doc.currentVersion}</strong> (Effective: {doc.versions[doc.versions.length - 1].effectiveDate})
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 sticky top-24">
              <h2 className="font-semibold mb-4 text-white">Versions</h2>
              <div className="space-y-2">
                {[...doc.versions].reverse().map((version) => (
                  <button
                    key={version.version}
                    onClick={() => setSelectedVersion(version)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      selectedVersion.version === version.version
                        ? "bg-[rgba(102,126,234,0.1)] text-[#a855f7] font-medium"
                        : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                    }`}
                  >
                    <div className="font-medium">v{version.version}</div>
                    <div className="text-xs text-white/30">{version.effectiveDate}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Version {selectedVersion.version}</h2>
                <span className="text-sm text-white/40">Effective: {selectedVersion.effectiveDate}</span>
              </div>

              {selectedVersion.summaryOfChanges.length > 0 && (
                <div className="mb-6 p-4 bg-[rgba(102,126,234,0.05)] border border-[rgba(102,126,234,0.15)] rounded-lg">
                  <h3 className="font-semibold mb-2 text-white">Summary of Changes</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
                    {selectedVersion.summaryOfChanges.map((change, i) => (
                      <li key={i}>{change}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prose prose-invert max-w-none">
                <p className="text-white/50">View the full document content for this version.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
