"use client"

import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Phone, Mail, MapPin, MessageCircle, Video,
  Clock, Calendar, CheckCircle, ArrowRight
} from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quickest way to reach us",
    value: "Start a chat now",
    href: "https://wa.me/2348064263647?text=Hello%2C%20I%27m%20interested%20in%20your%20energy%20solutions",
    action: "Open WhatsApp",
    highlight: true,
    badge: "Fastest response",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "080 6426 3647",
    href: "tel:+2348064263647",
    action: "Call Now",
    highlight: false,
    badge: null,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries",
    value: "yussufsanni19@gmail.com",
    href: "mailto:yussufsanni19@gmail.com",
    action: "Send Email",
    highlight: false,
    badge: null,
  },
]

const reasons = [
  "Free site inspection and consultation",
  "No-obligation custom proposal",
  "Transparent pricing, no hidden fees",
  "Certified and insured engineers",
]

export default function ContactPage() {
  const openCallPopup = () => {
    window.open(
      "https://calendly.com/yussufsanni19/on-call-consultation",
      "calendly-popup",
      "width=600,height=700,scrollbars=yes"
    )
  }

  return (
    <>
      <PageHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider">Get In Touch</p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance leading-tight">
                  Ready to fix your power problems?
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Get in touch for a free consultation. No obligation, no pressure — just honest
                  advice about the best energy solution for your home or business.
                </p>
                <div className="mt-7 space-y-2.5">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group ${
                      method.highlight
                        ? "bg-[#25D366] border-[#25D366] hover:bg-[#22c55e] text-white"
                        : "bg-card border-border hover:border-accent/40 hover:shadow-sm"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      method.highlight ? "bg-white/20" : "bg-accent/10"
                    }`}>
                      <method.icon className={`w-5 h-5 ${method.highlight ? "text-white" : "text-accent"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold ${method.highlight ? "text-white" : ""}`}>{method.title}</h3>
                        {method.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                            {method.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${method.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                        {method.description}
                      </p>
                      <p className={`text-sm font-medium mt-0.5 truncate ${method.highlight ? "text-white" : ""}`}>
                        {method.value}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform ${
                      method.highlight ? "text-white/70" : "text-muted-foreground"
                    }`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Schedule</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-medium">Book a consultation</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Choose how you&apos;d like to connect with our team.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Virtual Call */}
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-accent/40 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Virtual Consultation</h3>
                    <p className="text-sm text-muted-foreground">Free 30-minute call</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Discuss your energy needs with our experts from anywhere. Get personalized
                  recommendations and a rough pricing estimate.
                </p>
                <Button onClick={openCallPopup} className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">When we&apos;re available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((slot) => (
                    <div key={slot.day} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{slot.day}</span>
                      <span className={`text-sm font-medium ${slot.hours === "Closed" ? "text-muted-foreground" : ""}`}>
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  Emergency support available 24/7 for existing customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Calendly */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-accent mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">On-Site Inspection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium">Book a Free Site Visit</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Our team will visit your property, assess your needs, and provide a detailed proposal — all at no cost.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <iframe
                src="https://calendly.com/yussufsanni19/30min?hide_gdpr_banner=1&background_color=faf9f6&text_color=1a1a1a&primary_color=d97706"
                width="100%"
                height="580"
                frameBorder="0"
                title="Schedule a site inspection"
                className="min-h-[580px]"
              />
            </div>
          </div>
        </section>

        {/* Location Banner */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent font-medium">Based in Lagos, Nigeria</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-medium">Serving clients across Nigeria</h2>
                <p className="mt-1 text-primary-foreground/60 text-sm">We travel to you — wherever you are.</p>
              </div>
              <Button variant="secondary" asChild>
                <a href="https://wa.me/2348064263647" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
