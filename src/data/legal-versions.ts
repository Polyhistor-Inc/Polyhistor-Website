/**
 * Legal Document Version History Data Structure
 * 
 * This module stores version history metadata for Polyhistor's legal documents:
 * - Privacy Policy
 * - Terms of Service
 * - End User License Agreement (EULA)
 * 
 * Full document content lives in the page components at:
 *   src/app/privacy-policy/page.tsx
 *   src/app/terms-of-service/page.tsx
 *   src/app/eula/page.tsx
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type DocumentType = 'privacy-policy' | 'terms-of-service' | 'eula';

export interface LegalDocumentVersion {
  version: string;
  effectiveDate: string;
  documentType: DocumentType;
  summaryOfChanges: string[];
}

export interface DocumentVersionHistory {
  documentType: DocumentType;
  title: string;
  versions: LegalDocumentVersion[];
  currentVersion: string;
}

export interface LegalDocumentRegistry {
  documents: Record<DocumentType, DocumentVersionHistory>;
  lastUpdated: string;
}

// ============================================================================
// VERSION HISTORY DATA
// ============================================================================

export const legalDocumentRegistry: LegalDocumentRegistry = {
  documents: {
    'privacy-policy': {
      documentType: 'privacy-policy',
      title: 'Privacy Policy',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'privacy-policy',
          summaryOfChanges: [
            'Initial version of Privacy Policy',
            'Established baseline data collection practices',
            'Defined encryption standards for direct messages',
            'Outlined third-party data sharing with infrastructure providers',
          ],
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'privacy-policy',
          summaryOfChanges: [
            'Added Phone Number collection under Section 1.A for SMS verification',
            'Added Gamification data collection (points, coin balances, leaderboard rankings, referral codes)',
            'Added explicit AWS S3 and Supabase mentions in Section 4 as storage providers',
            'Added new subsection about E2E Encryption in Section 5 - clarified DMs are E2E encrypted but Group Chat metadata is not',
            'Added new Section 11 about Apple App Tracking Transparency (ATT) - explained iOS ATT modal and tracking preferences',
            'Updated Quick Summary Box to reflect new data collection practices',
          ],
        },
      ],
    },
    'terms-of-service': {
      documentType: 'terms-of-service',
      title: 'Terms of Service',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'terms-of-service',
          summaryOfChanges: [
            'Initial version of Terms of Service',
            'Established user eligibility and account requirements',
            'Defined AI service disclaimers and navigation safety guidelines',
            'Outlined zero tolerance policy for user conduct',
          ],
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'terms-of-service',
          summaryOfChanges: [
            'Added new Section 8 "Gamification & Virtual Currency" - coins have no real-world value, cannot be exchanged for cash, not personal property, Polyhistor can modify/suspend/revoke at any time',
            'Added new Section 9 "Referral Program" - right to withhold rewards for spam/fraudulent referrals',
            'Added new Section 10 "Trip Expense Tracking" disclaimer - not financial/accounting/tax/legal advice, not liable for errors',
            'Added new Section 11 "Account Deletion" - users can delete from within app settings, data retention period explained after deletion',
            'Updated Table of Contents to include new sections',
          ],
        },
      ],
    },
    eula: {
      documentType: 'eula',
      title: 'End User License Agreement (EULA)',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'eula',
          summaryOfChanges: [
            'Initial version of End User License Agreement',
            'Defined scope of license for iOS and Android platforms',
            'Established user content policies and zero tolerance guidelines',
            'Included Apple-specific iOS terms and legal compliance requirements',
          ],
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'eula',
          summaryOfChanges: [
            'Added new Section 2 "Virtual Goods License" under Scope of License - virtual currency is licensed not sold, limited personal non-transferable revocable license',
            'Added new Section 6 "Service Availability & Network Reliance" - no 100% uptime guarantee, Live Tracking requires data/WiFi/GPS, not liable for interruptions or carrier charges',
            'Reinforced Section 5 "Distracted Driving" - explicitly stated user assumes all physical and legal liability if using app while driving',
            'Updated Table of Contents to reflect new section numbering',
          ],
        },
      ],
    },
  },
  lastUpdated: '2026-03-25T00:00:00.000Z',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function getCurrentVersion(documentType: DocumentType): LegalDocumentVersion | undefined {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory || docHistory.versions.length === 0) {
    return undefined;
  }
  return docHistory.versions[docHistory.versions.length - 1];
}

export function getVersion(documentType: DocumentType, version: string): LegalDocumentVersion | undefined {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory) {
    return undefined;
  }
  return docHistory.versions.find((v) => v.version === version);
}

export function getAllVersions(documentType: DocumentType): LegalDocumentVersion[] {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory) {
    return [];
  }
  return docHistory.versions;
}

export function getVersionHistory(documentType: DocumentType): DocumentVersionHistory | undefined {
  return legalDocumentRegistry.documents[documentType];
}

export function hasVersionHistory(documentType: DocumentType): boolean {
  const docHistory = legalDocumentRegistry.documents[documentType];
  return docHistory ? docHistory.versions.length > 1 : false;
}
