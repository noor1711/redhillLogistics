'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-accent-foreground mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
                R
              </div>
              <span>Red Hill Logistics</span>
            </div>
            <p className="text-accent-foreground/80">
              Professional trucking and freight transportation services across Canada and USA.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col text-accent-foreground/80 text-sm">
                  <span>(437) 771-5011</span>
                  <span>(647) 928-0072</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:dispatch@redhillgroup.ca" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  dispatch@redhillgroup.ca
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/80">14 Crosswood Lane, Brampton, ON, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/70 text-sm">
              &copy; {currentYear} Red Hill Logistics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#privacy" className="text-accent-foreground/70 hover:text-accent-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-accent-foreground/70 hover:text-accent-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
