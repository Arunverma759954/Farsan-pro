"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-950 text-white pt-28 pb-16">

      {/* Enhanced Top Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-24 md:h-32"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C360,140 720,0 1080,90 1260,130 1440,100 1440,100 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-14">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Farsan Healthy Snacks" width={64} height={64} />
              <div>
                <h2 className="text-2xl font-bold">
                  FARSAN<span className="text-red-500">G</span>
                </h2>
                <p className="text-green-200 text-sm">Healthy Snacks</p>
              </div>
            </Link>

            <p className="text-green-200 text-sm leading-relaxed">
              Freshly prepared farsan snacks made with premium ingredients,
              delivering authentic taste and quality you can trust.
            </p>

            <p className="mt-6 text-green-300 text-xs">
              © {new Date().getFullYear()} Farsan Gold. All rights reserved.
            </p>
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col sm:flex-row gap-16">

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm text-green-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-green-200">
                <li className="flex items-center gap-2">
                  <Phone size={16} /> 01-234-567-890
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> info@farsangold.com
                </li>
              </ul>

              {/* Social */}
              <div className="flex gap-4 mt-6">
                <a className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition" href="#">
                  <Facebook size={18} />
                </a>
                <a className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition" href="#">
                  <Instagram size={18} />
                </a>
                <a className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition" href="#">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
