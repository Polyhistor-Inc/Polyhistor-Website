interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "Is the app free to download?",
    answer:
      "Yes! The app is completely free to download and use for travelers. We want to make group travel as accessible and stress-free as possible.",
  },
  {
    question: "Which platforms is the app available on?",
    answer:
      "ThePolyhistor app is currently available globally on both the Apple App Store (iOS) and Google Play Store (Android).",
  },
  {
    question: "Do you charge per student?",
    answer:
      "For agencies using our Enterprise Solutions, we offer flexible licensing models. You can choose a per-trip fee (great for seasonal tours) or an annual agency-wide license for unlimited groups. Contact sales for a custom quote.",
  },
  {
    question: "Is this legal for school trips?",
    answer:
      "Absolutely. We are fully COPPA & FERPA compliant. All location data is encrypted, access-controlled, and automatically deleted after the trip. We provide audit logs for your liability records.",
  },
  {
    question: "How do I get 50 students on the app?",
    answer:
      "No manual sign-ups needed. You simply upload your roster or share a single 'Trip Code'. Students download the app, enter the code, and are instantly synced to your dashboard found.",
  },
  {
    question: "What if students don't have data?",
    answer:
      "Our 'Offline-First' architecture ensures the itinerary and maps work without a signal. Location tracking caches data and syncs as soon as a connection is restored.",
  },
];
