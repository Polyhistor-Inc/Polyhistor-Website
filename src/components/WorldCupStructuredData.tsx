"use client";

export default function WorldCupStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Event",
                "@id": "https://thepolyhistor.com/worldcup#fifa-world-cup-2026",
                "name": "FIFA World Cup 2026",
                "description": "The 2026 FIFA World Cup will be the 23rd FIFA World Cup, jointly hosted by the United States, Canada, and Mexico.",
                "startDate": "2026-06-11",
                "endDate": "2026-07-19",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": [
                    {
                        "@type": "Place",
                        "name": "MetLife Stadium",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "East Rutherford",
                            "addressRegion": "NJ",
                            "addressCountry": "USA"
                        }
                    },
                    {
                        "@type": "Place",
                        "name": "SoFi Stadium",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Inglewood",
                            "addressRegion": "CA",
                            "addressCountry": "USA"
                        }
                    }
                ],
                "image": "https://thepolyhistor.com/worldcup-og.png",
                "performer": {
                    "@type": "SportsTeam",
                    "name": "32 National Teams"
                },
                "organizer": {
                    "@type": "Organization",
                    "name": "FIFA",
                    "url": "https://www.fifa.com"
                }
            },
            {
                "@type": "Product",
                "@id": "https://thepolyhistor.com/worldcup#fan-pack",
                "name": "Polyhistor World Cup Fan Pack",
                "description": "The all-in-one app for stadium navigation, expense splitting, and squad coordination during the FIFA World Cup 2026. Features offline maps, team themes, group expansion up to 50 people, and AI-powered meetup coordination.",
                "brand": {
                    "@type": "Brand",
                    "name": "Polyhistor"
                },
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Basic Fan Pack",
                        "price": "6.99",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/PreOrder",
                        "description": "Essential features: Stadium Map Markers, Team Color Themes, Group Expansion (50), Match Countdown Widget"
                    },
                    {
                        "@type": "Offer",
                        "name": "Premium Fan Pack",
                        "price": "9.99",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/PreOrder",
                        "description": "Complete experience: All Basic features + Offline Map Downloads, Expense Calculator, Referral Rewards"
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "featureList": [
                    "Stadium Map Markers",
                    "Team Color Themes (32 teams)",
                    "Group Expansion (8 to 50 people)",
                    "Match Countdown Widget",
                    "Offline Map Downloads",
                    "Expense Calculator (room-by-room)",
                    "Referral Rewards Program",
                    "Halftime Meetup AI",
                    "Last Ping SOS",
                    "Practice Area Locators",
                    "Seat-Finder View",
                    "Bandwagon Pivot",
                    "Cultural Hubs & Fan Zones",
                    "FIFA Events Tracker",
                    "Merch Finders",
                    "Host City Itineraries",
                    "Transit & Commuting Info",
                    "Concourse Run Splitter",
                    "Live Match Updates"
                ],
                "category": "Mobile Application",
                "applicationCategory": "TravelApplication",
                "operatingSystem": "iOS, Android",
                "offersShippingDetails": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 0,
                        "unitCode": "DAY"
                    },
                    "shippingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 0,
                        "unitCode": "DAY"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the Polyhistor World Cup Fan Pack?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The World Cup Fan Pack is a premium feature bundle for Polyhistor, designed specifically for FIFA World Cup 2026 attendees. It includes 19 exclusive features for stadium navigation, expense splitting, squad coordination, and team customization. Available as Basic ($6.99) and Premium ($9.99) tiers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When will the World Cup Fan Pack be available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Fan Pack will launch as a free update to existing Polyhistor users just before the FIFA World Cup 2026 kickoff on June 11, 2026. Early bird pricing is available now for those who join the waitlist."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I use the app offline at stadiums?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! The Premium Fan Pack includes offline map downloads up to 50MB per city. Download host city maps before you travel and navigate stadiums, find Fan Fests, and locate your squad even when cell networks are jammed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many people can I add to my group?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "With the World Cup Fan Pack, you can expand your group from the standard 8 members up to 50 people. Perfect for bringing the entire fan club or coordinating with multiple friend groups."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the app work in all 16 host cities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely! The Fan Pack includes premade itineraries and offline maps for all 16 host cities: New York/New Jersey, Los Angeles, Dallas, Miami, Atlanta, Seattle, San Francisco, Boston, Philadelphia, Houston, Kansas City, Guadalajara, Mexico City, Monterrey, Toronto, and Vancouver."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I customize the app with my team's colors?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! Choose from 32 national team color schemes to customize your app UI. Rep Brazil's yellow and green, Argentina's blue and white, Germany's black and gold, or any other participating nation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does the expense calculator work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Premium Fan Pack includes advanced expense splitting with receipt scanning. Split Airbnb costs by room (not equally), track group expenses, and settle up instantly. Perfect for World Cup group trips with multiple rooms and varying budgets."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my location shared with other users?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You have full control over your location sharing. Share your real-time location with your squad, enable 'Last Ping SOS' to broadcast your final location if battery drops below 5%, or go invisible anytime. Privacy and safety are built-in."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Use Polyhistor for World Cup 2026",
                "description": "Step-by-step guide to getting the most out of Polyhistor during the FIFA World Cup",
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Download Polyhistor",
                        "text": "Download the free Polyhistor app from the App Store or Google Play. Create your account and set up your profile."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Get the Fan Pack",
                        "text": "Purchase the World Cup Fan Pack ($6.99 Basic or $9.99 Premium) when it becomes available. Premium includes offline maps and expense splitting."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Choose Your Team Theme",
                        "text": "Select from 32 national team color schemes to customize your app UI. Show your team pride!"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Download Offline Maps",
                        "text": "Before traveling, download offline maps for your host cities (up to 50MB each). Works even without cell service."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Create or Join a Squad",
                        "text": "Invite up to 50 friends to your group. Share real-time locations, coordinate meetups, and stay connected throughout the tournament."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Navigate to Stadiums",
                        "text": "Use the stadium map markers to find entry points, Fan Fests, partner bars, and your squad members inside the venue."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Split Expenses",
                        "text": "Scan receipts and split costs fairly among your group. Split Airbnb by room, track food runs, and settle up instantly."
                    }
                ],
                "tool": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "Polyhistor",
                        "applicationCategory": "TravelApplication",
                        "operatingSystem": "iOS, Android"
                    }
                ],
                "supply": [
                    {
                        "@type": "MobilePhone",
                        "name": "Smartphone with GPS"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Internet connection (for initial setup)",
                        "value": "WiFi or mobile data"
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
