"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation"; // Hook to get the current pathname
import {
  ClerkProvider,

} from "@clerk/nextjs";
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); // Get the current pathname

  // Helper function to determine if the link is active
  const isActive = (path: string) =>
    pathname === path
      ? "border-b-2 border-white"
      : "opacity-75 hover:opacity-100";

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header Section */}
          <header className="fixed top-0 w-full bg-gradient-to-r from-cyan-700 to-cyan-900 text-white shadow-md z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
              {/* Logo */}
              <div className="text-2xl font-bold">
                <Link href="/" className={`hover:underline ${isActive("/")}`}>
                  <img src="/logo.png" alt="logo" className="h-10" />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-10 mr-96  font-medium">
                <Link
                  href="/"
                  className={`transition-all duration-200 ${isActive("/")}`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`transition-all duration-200 ${isActive(
                    "/about"
                  )}`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={`transition-all duration-200 ${isActive(
                    "/services"
                  )}`}
                >
                 Services
                </Link>
                <Link
                  href="/contact"
                  className={`transition-all duration-200 ${isActive(
                    "/contact"
                  )}`}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          {/* Main Content Section */}
          <main className="mt-[70px] min-h-screen">{children}</main>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-gray-200 py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
              {/* Brand and Tagline */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">AI-Solution</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Transforming Ideas into AI Innovations
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.708H9.692v-3.628h3.128V8.413c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.309h3.588l-.467 3.628h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.836 9.836 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.2a9.864 9.864 0 0 1-3.127 1.194 4.917 4.917 0 0 0-8.379 4.482A13.934 13.934 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.86 4.9 4.9 0 0 1 .964 9.11v.06a4.918 4.918 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.085 4.918 4.918 0 0 0 4.6 3.419A9.868 9.868 0 0 1 0 19.54a13.905 13.905 0 0 0 7.548 2.212c9.056 0 14.01-7.513 14.01-14.01 0-.213-.004-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.851-3.037-1.851 0-2.135 1.445-2.135 2.937v5.669h-3.555V9h3.414v1.561h.05c.477-.899 1.637-1.85 3.367-1.85 3.602 0 4.268 2.372 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.789 20.452H3.882V9h2.907v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.771v20.456C0 23.229.792 24 1.771 24h20.456C23.229 24 24 23.229 24 22.225V1.771C24 .771 23.229 0 22.225 0z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} AI-Solution. All rights reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
