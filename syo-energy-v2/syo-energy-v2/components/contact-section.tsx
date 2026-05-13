"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle, Calendar, Video, X } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function ContactSection() {
  const [callPopupOpen, setCallPopupOpen] = useState(false)

  const whatsappLink = "https://wa.me/2348064263647?text=Hello%2C%20I%27m%20interested%20in%20your%20energy%20solutions"
  const calendlyCallUrl = "https://calendly.com/yussufsanni19/on-call-consultation"
  const calendlySiteUrl = "https://calendly.com/yussufsanni19/30min"

  const openCallPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyCallUrl })
    }
  }

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />

      <section id="contact" className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Get In Touch</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
              Ready to fix your power problems?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              Book a free consultation or site inspection. No obligation, no pressure. Just honest advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column - Quick Contact Options */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              
              <div className="space-y-3">
                {/* Call Consultation - Popup */}
                <button
                  onClick={openCallPopup}
                  className="w-full flex items-center gap-3 p-4 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Book a Call</p>
                    <p className="text-xs opacity-80">Free virtual consultation</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* WhatsApp */}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Chat on WhatsApp</p>
                    <p className="text-xs opacity-80">Get instant responses</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Phone */}
                <a 
                  href="tel:+2348064263647"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Call Us Directly</p>
                    <p className="text-xs text-muted-foreground">080 6426 3647</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Email */}
                <a 
                  href="mailto:yussufsanni19@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Email Us</p>
                    <p className="text-xs text-muted-foreground">yussufsanni19@gmail.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Right Column - Embedded Calendly for Site Inspection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-accent" />
                <h3 className="text-lg font-semibold">Book Free Site Inspection</h3>
              </div>
              
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <iframe
                  src={`${calendlySiteUrl}?hide_gdpr_banner=1&background_color=faf9f6&text_color=1a1a1a&primary_color=d97706`}
                  width="100%"
                  height="580"
                  frameBorder="0"
                  title="Schedule a site inspection"
                  className="min-h-[580px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
