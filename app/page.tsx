'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Truck, MapPin, Clock, Shield } from 'lucide-react'

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
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
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

      {/* Features Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading service with over 20 years of experience in freight transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: 'Modern Fleet',
                description: 'Well-maintained trucks equipped with latest technology',
              },
              {
                icon: MapPin,
                title: 'Wide Coverage',
                description: 'Nationwide delivery network serving all major routes',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                description: '99% on-time delivery rate with real-time tracking',
              },
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Complete coverage and insurance for all shipments',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transportation solutions for all your freight needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Long-Haul Transport',
                description: 'Cross-country freight delivery with experienced drivers and GPS tracking.',
              },
              {
                title: 'Regional Delivery',
                description: 'Fast and efficient regional distribution for time-sensitive shipments.',
              },
              {
                title: 'Full Truckload (FTL)',
                description: 'Dedicated truck service for large shipments with flexible routing.',
              },
              {
                title: 'Less Than Truckload (LTL)',
                description: 'Cost-effective shipping for smaller freight loads and partial shipments.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
            ))}
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
