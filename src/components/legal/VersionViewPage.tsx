"use client";

import { getVersion, legalDocumentRegistry, DocumentType } from "@/data/legal-versions";
import Link from "next/link";
import { ArrowLeft, FileText, AlertCircle } from "lucide-react";

interface VersionViewPageProps {
  documentType: DocumentType;
  title: string;
  version: string;
}

export default function VersionViewPage({ documentType, title, version }: VersionViewPageProps) {
  const versionData = getVersion(documentType, version);
  const history = legalDocumentRegistry.documents[documentType];
  const isCurrent = version === history.currentVersion;

  if (!versionData) {
    return (
      <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
        <div className="max-w-4xl mx-auto text-center">
          <AlertCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Version Not Found</h1>
          <p className="text-slate-600 mb-6">
            The version you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link 
            href={`/${documentType}/versions`}
            className="text-brand-blue hover:underline"
          >
            ← Back to Version History
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href={`/${documentType}/versions`} 
            className="inline-flex items-center text-brand-blue hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Version History
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-slate-900">
                {title}
              </h1>
              <p className="text-slate-500">
                Version {versionData.version} — Effective {new Date(versionData.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            {isCurrent ? (
              <span className="px-4 py-2 bg-brand-blue text-white font-bold rounded-full text-sm">
                CURRENT VERSION
              </span>
            ) : (
              <span className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-full text-sm">
                ARCHIVED
              </span>
            )}
          </div>
        </div>

        {/* Archived Version Warning */}
        {!isCurrent && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900">This is an archived version</p>
              <p className="text-sm text-amber-700 mt-1">
                You&apos;re viewing a previous version of this document. For the current terms, please see{' '}
                <Link href={`/${documentType}`} className="underline font-semibold">
                  Version {history.currentVersion}
                </Link>.
              </p>
            </div>
          </div>
        )}

        {/* Changes Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Summary of Changes
          </h3>
          <ul className="space-y-2">
            {versionData.summaryOfChanges.map((change, i) => (
              <li key={i} className="text-slate-700 flex items-start gap-2">
                <span className="text-brand-blue mt-1 flex-shrink-0">•</span>
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Document Content Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> This is a read-only archive of the legal document as it appeared on{' '}
            {new Date(versionData.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            The content below is preserved exactly as it was published in version {versionData.version}.
          </p>
        </div>

        {/* Placeholder for document content */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Document Content (Version {versionData.version})
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            The full content of this legal document version is preserved in our archive. 
            For the actual legal text, please refer to the current version or contact legal@thepolyhistor.com for archived versions.
          </p>
          {isCurrent ? (
            <Link 
              href={`/${documentType}`}
              className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              View Current Version →
            </Link>
          ) : (
            <Link 
              href={`/${documentType}`}
              className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              View Current Version (v{history.currentVersion}) →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
