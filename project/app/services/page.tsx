"use client"

import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sun, Battery, Cable, Smartphone, CheckCircle, ArrowRight, Phone } from "lucide-react"

const services = [
  {
    id: "solar",
    icon: Sun,
    title: "Solar Installation",
    tagline: "Harness the power of the sun",
    description:
      "Complete solar panel installation for residential and commercial properties. We handle everything from site assessment to final commissioning, using only high-efficiency panels from trusted brands.",
    features: [
      "High-efficiency monocrystalline panels",
      "Professional roof or ground mounting",
      "Inverter installation and configuration",
      "Net metering setup where available",
      "System monitoring integration",
      "Full warranty coverage",
    ],
    image: "/gallery/solar-residential.jpg",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "backup",
    icon: Battery,
    title: "Backup Power Systems",
    tagline: "Never be in the dark again",
    description:
      "Reliable inverter and battery systems that keep your home or business running during outages. Say goodbye to generators forever — our systems are silent, clean, and always ready.",
    features: [
      "Premium lithium or tubular batteries",
      "Pure sine wave inverters",
      "Automatic changeover systems",
      "Load management optimization",
      "Expandable configurations",
      "Remote monitoring options",
    ],
    image: "/gallery/backup-commercial.jpg",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "electrical",
    icon: Cable,
    title: "Electrical Wiring",
    tagline: "Safe and efficient power distribution",
    description:
      "Professional electrical installation and rewiring services. We ensure your property meets safety standards with clean, organized wiring that is built to last and compliant with local codes.",
    features: [
      "New building wiring",
      "Rewiring and upgrades",
      "Distribution board installation",
      "Safety inspections",
      "Earthing and surge protection",
      "Compliance certification",
    ],
    image: "/gallery/electrical-office.jpg",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    id: "smart",
    icon: Smartphone,
    title: "Smart Home Integration",
    tagline: "Control your energy intelligently",
    description:
      "Modern energy management systems that give you complete control. Monitor consumption, automate devices, and optimize usage from your phone — anywhere, anytime.",
    features: [
      "Energy monitoring dashboards",
      "Smart switches and outlets",
      "Automated load scheduling",
      "Mobile app control",
      "Voice assistant integration",
      "Usage analytics and reports",
    ],
    image: "/gallery/smart-home.jpg",
    color: "from-purple-500/20 to-violet-500/10",
  },
]

const process = [
  { step: "01", title: "Consultation", description: "We discuss your energy needs and assess your property — completely free." },
  { step: "02", title: "Custom Design", description: "We create a tailored system design with detailed proposal and pricing." },
  { step: "03", title: "Installation", description: "Our certified team installs your system with minimal disruption." },
  { step: "04", title: "Ongoing Support", description: "We provide maintenance, monitoring, and 24/7 support." },
]

const faqs = [
  {
    q: "How long does installation take?",
    a: "Most residential solar installations take 1–2 days. Backup systems can often be done in a single day. We'll give you a precise timeline during consultation.",
  },
  {
    q: "Do you offer financing options?",
    a: "Yes, we work with financing partners to make our systems accessible. Ask us about payment plans during your free consultation.",
  },
  {
    q: "What warranty do you provide?",
    a: "We provide manufacturer warranties on all equipment (typically 5–25 years on panels) plus our own workmanship warranty on installation.",
  },
  {
    q: "Can I expand my system later?",
    a: "Absolutely. We design all systems to be modular and expandable. You can add more panels, batteries, or smart features as your needs grow.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance leading-tight">
                Complete energy solutions for every need
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                From solar panels to smart home systems, we provide end-to-end energy solutions
                designed, installed, and maintained by our certified expert team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 mb-5">
                    <service.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{service.tagline}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button asChild>
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+2348064263647">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">How It Works</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                Simple steps to reliable power
              </h2>
              <p className="mt-4 text-primary-foreground/60 leading-relaxed">
                We make the process easy so you can focus on enjoying stable energy.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, i) => (
                <div key={item.step} className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-primary-foreground/10 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                  )}
                  <span className="text-5xl font-serif font-medium text-accent/60">{item.step}</span>
                  <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">FAQ</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-medium">Common questions</h2>
            </div>
            <div className="divide-y divide-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Book a free consultation and our experts will assess your property and recommend the best solution for your situation and budget.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Free Consultation</Link>
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
