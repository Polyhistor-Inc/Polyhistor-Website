"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-6 block">
                            <NextImage
                                src="/polyhistor-logo.svg"
                                alt="Polyhistor"
                                width={250}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-slate-600 max-w-md mb-6 font-medium">
                            Never lose your friends (or your money) again. Group travel made simple for Gen Z travelers.
                        </p>

                        {/* Live Stats */}
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div>
                                <p className="text-2xl font-bold text-viral-red">100+</p>
                                <p className="text-sm text-slate-500">Active Travelers</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-viral-purple">2</p>
                                <p className="text-sm text-slate-500">Pilot Programs</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-brand-blue">15+</p>
                                <p className="text-sm text-slate-500">Countries Explored</p>
                            </div>
                        </div>


                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li>
                                <Link href="/#features" className="hover:text-viral-red transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/enterprise" className="hover:text-brand-blue transition-colors">
                                    For Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="/#community" className="hover:text-viral-purple transition-colors">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href="https://apps.apple.com/us/app/polyhistor/id6759064328" className="flex items-center gap-2 hover:text-viral-purple transition-colors">
                                    <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                    </svg>
                                    App Store
                                </Link>
                            </li>
                            <li>
                                <Link href="https://play.google.com/store/apps/details?id=com.thepolyhistor.app" className="flex items-center gap-2 hover:text-viral-red transition-colors">
                                    <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                    </svg>
                                    Google Play
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-viral-red transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-viral-red transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-viral-red transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-viral-red transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/eula" className="hover:text-viral-red transition-colors">
                                    EULA
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © 2026 Polyhistor Inc. All rights reserved. Made with ❤️ for travelers.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <a
                                href="https://x.com/polyhistor_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-viral-red transition-colors"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/thepolyhistor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-brand-blue transition-colors"
                                aria-label="Visit Polyhistor on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://instagram.com/polyhistorapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-viral-purple transition-colors"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}