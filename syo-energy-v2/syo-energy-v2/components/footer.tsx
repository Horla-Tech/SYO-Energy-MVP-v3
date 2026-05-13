import Link from "next/link"
import { Zap, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const services = [
  { name: "Solar Installation", href: "/services#solar" },
  { name: "Backup Power Systems", href: "/services#backup" },
  { name: "Electrical Wiring", href: "/services#electrical" },
  { name: "Smart Home Integration", href: "/services#smart" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent">
                <Zap className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">SYO Energy</span>
            </Link>
            <p className="mt-4 text-primary-foreground/60 text-sm leading-relaxed">
              Premium solar and backup power solutions for Nigerian homes and businesses.
              No fuel. No noise. Just stable, smart energy.
            </p>
            <a
              href="https://wa.me/2348064263647?text=Hello%2C%20I%27m%20interested%20in%20your%20energy%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+2348064263647"
                  className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  080 6426 3647
                </a>
              </li>
              <li>
                <a
                  href="mailto:yussufsanni19@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  yussufsanni19@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} SYO Energy Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
            <Link href="#" className="hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
