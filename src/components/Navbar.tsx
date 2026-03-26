"use client";

import { useModal } from "@/context/ModalContext";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const { openModal } = useModal();

  const features = [
    { name: "Friend Map", href: "#friend-map" },
    { name: "Expense Splitting", href: "#expense-splitting" },
    { name: "Itinerary Voting", href: "#itinerary-voting" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for sticky nav transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-200"
      }`}
    >
      {/* World Cup Banner - Only show when not scrolled */}
      {!isScrolled && (
        <div className="hidden md:block bg-gradient-to-r from-fifa-blue via-fifa-blue/95 to-fifa-blue border-b border-fifa-gold/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <Link href="/worldcup" className="flex items-center gap-3 group">
                <div className="flex items-center gap-2">
                  <span className="text-fifa-red">⚽</span>
                  <span className="text-xs font-bold text-fifa-white uppercase tracking-wider">
                    FIFA WORLD CUP 2026
                  </span>
                </div>
                <div className="w-px h-4 bg-fifa-white/30" />
                <p className="text-xs text-fifa-white/90">
                  <span className="font-semibold text-fifa-gold">New:</span> World Cup Fan Pack coming soon!
                </p>
              </Link>
              <Link
                href="/worldcup"
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-fifa-gold hover:bg-fifa-gold/90 text-fifa-blue text-xs font-bold rounded-full transition-all group"
              >
                Learn More
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${!isScrolled ? 'h-20' : 'h-16'}`}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/polyhistor-logo.svg"
              alt="Polyhistor"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* World Cup Link */}
            <Link
              href="/worldcup"
              className="flex items-center gap-2 text-sm font-bold text-fifa-gold hover:text-fifa-blue transition-colors"
            >
              <span className="text-fifa-red">⚽</span> World Cup
            </Link>

            {/* Features Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {featuresOpen && (
                <div
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#community" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Community
            </Link>

            <Link
              href="/enterprise"
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue px-4 py-2 rounded-full border border-slate-200 hover:border-brand-blue transition-all"
            >
              For Agencies
            </Link>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="https://apps.apple.com/us/app/polyhistor/id6759064328"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              Download App
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {/* World Cup Link */}
            <Link
              href="/worldcup"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-fifa-gold font-bold py-2 hover:text-fifa-blue"
            >
              <span className="text-fifa-red">⚽</span> World Cup Fan Pack
            </Link>

            {/* Features Submenu */}
            <div>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center justify-between w-full text-slate-700 font-medium py-2"
              >
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>
              {featuresOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-600 py-2 hover:text-brand-blue"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#community"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium py-2 hover:text-brand-blue"
            >
              Community
            </Link>

            <Link
              href="/enterprise"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-semibold py-2 px-4 rounded-lg border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-center"
            >
              For Agencies
            </Link>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="https://apps.apple.com/us/app/polyhistor/id6759064328"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-bold hover:shadow-lg"
              >
                <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Download App
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
