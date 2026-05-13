"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Clock, CheckCircle, Zap, Target, Heart, ArrowRight } from "lucide-react"

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * value))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(value)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 76, suffix: "", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
]

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We use only premium equipment from trusted brands, ensuring your system lasts for decades.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Every installation is designed specifically for your property, energy needs, and budget.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We build relationships, not just systems. Our support continues long after installation.",
  },
  {
    icon: Zap,
    title: "Energy Experts",
    description: "Certified engineers who stay updated on the latest energy technologies and best practices.",
  },
]

const milestones = [
  { year: "2022", title: "Company Founded", description: "Started with a mission to bring reliable power to Nigerian homes." },
  { year: "2023", title: "50+ Projects", description: "Reached our first major milestone of completed installations." },
  { year: "2024", title: "Smart Integration", description: "Expanded services to include smart home energy management." },
  { year: "2025", title: "Growing Strong", description: "Now serving clients across Lagos and expanding nationwide." },
]

const team = [
  {
    name: "Yussuf Sanni",
    role: "Founder & Lead Engineer",
    description: "Certified electrical engineer with passion for renewable energy solutions.",
  },
  {
    name: "Installation Team",
    role: "Certified Technicians",
    description: "Experienced professionals trained in solar, backup, and smart systems.",
  },
  {
    name: "Support Team",
    role: "Customer Success",
    description: "Dedicated to ensuring your system performs perfectly, always.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider">About SYO Energy</p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance leading-tight">
                  Powering Nigerian homes with reliable energy
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  SYO Energy Solutions was founded with a simple mission: to free Nigerian homes and
                  businesses from the frustration of unreliable power. We believe everyone deserves
                  stable, clean, and affordable electricity.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our team combines technical expertise with genuine care for our clients. We take the
                  time to understand your needs, design the right solution, and ensure everything works
                  perfectly before we leave.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/gallery">View Our Work</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/gallery/solar-residential.jpg"
                    alt="SYO Energy team at work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-4 -left-4 bg-background rounded-xl border border-border shadow-lg p-4">
                  <p className="text-2xl font-serif font-medium">76+</p>
                  <p className="text-sm text-muted-foreground">Projects delivered</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent rounded-xl shadow-lg p-4">
                  <p className="text-2xl font-serif font-medium text-accent-foreground">98%</p>
                  <p className="text-sm text-accent-foreground/80">Client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-serif font-medium text-accent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Values</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                What drives us every day
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                These principles guide every project we take on, from consultation to completion.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Journey</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                Growing with purpose
              </h2>
              <p className="mt-4 text-primary-foreground/60 leading-relaxed">
                From a bold idea to a trusted energy partner — here&apos;s how we got here.
              </p>
            </div>

            <div className="mt-12 relative">
              {/* Connecting line on desktop */}
              <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-primary-foreground/10" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/8 transition-colors">
                    <span className="text-4xl font-serif font-medium text-accent">{milestone.year}</span>
                    <div className="mt-1 w-2 h-2 rounded-full bg-accent" />
                    <h3 className="mt-3 font-semibold">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/gallery/inverter-setup.jpg"
                  alt="Professional installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              </div>

              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider">Why SYO Energy</p>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                  The difference is in the details
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We don&apos;t just install systems — we build long-term partnerships with our clients, ensuring their energy solution evolves with their needs.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Certified engineers with hands-on experience",
                    "Premium equipment from trusted global brands",
                    "Custom designs tailored to your property",
                    "Transparent pricing with no hidden fees",
                    "Warranty coverage and ongoing maintenance",
                    "24/7 customer support when you need it",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium">
                Ready to experience reliable power?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Book a free consultation and let us design the perfect energy solution for your home or business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Free Inspection</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/2348064263647" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
