import { NextRequest, NextResponse } from "next/server";

// In-memory store (replace with database in production)
const waitlistEntries = new Map<string, {
    email: string;
    createdAt: string;
}>();

let counter = 5047; // Starting counter based on existing waitlist

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        // Validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // Check for duplicate
        if (waitlistEntries.has(email)) {
            return NextResponse.json({
                success: true,
                message: "Already on the list!",
            });
        }

        // Store email
        counter++;
        waitlistEntries.set(email, {
            email,
            createdAt: new Date().toISOString(),
        });

        // In production: Send welcome email, track in PostHog, etc.
        console.log(`New waitlist signup: ${email}`);

        return NextResponse.json({
            success: true,
            message: "Welcome to the waitlist!",
        });
    } catch (error) {
        console.error("Waitlist API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    // Return stats
    return NextResponse.json({
        totalSignups: counter,
        recentSignups: Array.from(waitlistEntries.entries())
            .slice(-10)
            .map(([email, data]) => ({
                email: email.slice(0, 3) + "***@***",
                createdAt: data.createdAt,
            })),
    });
}
