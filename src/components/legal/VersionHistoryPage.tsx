"use client";

import { LegalDocumentVersion, DocumentVersionHistory, legalDocumentRegistry } from "@/data/legal-versions";
import Link from "next/link";
import { ArrowLeft, FileText, Clock, ChevronRight } from "lucide-react";

interface VersionHistoryPageProps {
  documentType: 'privacy-policy' | 'terms-of-service' | 'eula';
  title: string;
}

export default function VersionHistoryPage({ documentType, title }: VersionHistoryPageProps) {
  const history = legalDocumentRegistry.documents[documentType];
  
  // Reverse versions to show newest first
  const reversedVersions = [...history.versions].reverse();

  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href={`/${documentType}`} 
            className="inline-flex items-center text-brand-blue hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {title}
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-slate-900">
            {title} - Version History
          </h1>
          <p className="text-slate-500">
            View and compare all previous versions of this document
          </p>
        </div>

        {/* Current Version Badge */}
        <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-4 mb-8 flex items-center gap-3">
          <FileText className="w-6 h-6 text-brand-blue" />
          <div>
            <p className="font-semibold text-slate-900">Current Version: {history.currentVersion}</p>
            <p className="text-sm text-slate-600">
              Effective: {new Date(history.versions[history.versions.length - 1].effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Version List */}
        <div className="space-y-4">
          {reversedVersions.map((version, index) => {
            const isCurrent = version.version === history.currentVersion;
            const isFirst = index === reversedVersions.length - 1;
            
            return (
              <div 
                key={version.version}
                className={`border rounded-xl overflow-hidden ${
                  isCurrent ? 'border-brand-blue/30 bg-brand-blue/5' : 'border-slate-200 bg-white'
                }`}
              >
                <Link 
                  href={`/${documentType}/version/${version.version}`}
                  className="block hover:bg-slate-50 transition-colors"
                >
                  <div className="p-6">
                    {/* Version Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                          isCurrent ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          v{version.version}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            Version {version.version}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            Effective: {new Date(version.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                      {isCurrent && (
                        <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full">
                          CURRENT
                        </span>
                      )}
                      {isFirst && !isCurrent && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                          ORIGINAL
                        </span>
                      )}
                    </div>

                    {/* Changes Summary */}
                    <div className="ml-15 pl-16">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">What Changed:</h4>
                      <ul className="space-y-1">
                        {version.summaryOfChanges.map((change, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-brand-blue mt-1">•</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Button */}
                    <div className="mt-4 ml-15 pl-16 flex items-center text-brand-blue font-semibold text-sm">
                      View Full Document
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">About Version History</h3>
          <p className="text-sm text-slate-600">
            We maintain a complete history of all changes to our legal documents for transparency. 
            You can view any previous version to see exactly what terms were in effect at any given time. 
            The current version is marked and always applies to your use of the Service.
          </p>
        </div>
      </div>
    </main>
  );
}
