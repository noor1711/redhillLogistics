'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cYZSWDNVTqZiEHGRegAX71KQt5oqrx.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40 -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8 max-w-2xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-white">
                  Service Meets Excellence
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Experience Reliable Trucking Services with Red Hill Logistics.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            <div className="w-1 h-20 bg-accent rounded" />
            <p className="text-lg leading-relaxed max-w-3xl text-white/90">
              We are a leading trucking company delivering across Canada and USA. Our mission is to provide exceptional logistics services to our clients, ensuring timely delivery of goods. Our team is dedicated to ensuring that our clients receive the best service possible, and we are committed to continuously improving our operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team today for a free quote and let us handle your transportation needs.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
