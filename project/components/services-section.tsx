import { Sun, Battery, Cable, Home, ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Sun,
    title: "Solar Installation",
    description: "Complete solar panel systems designed for your specific energy needs. From roof assessment to final installation, we handle everything.",
  },
  {
    number: "02",
    icon: Battery,
    title: "Backup Power Systems",
    description: "Reliable inverter and battery systems that keep your home or business running during outages. No more generator noise or fuel costs.",
  },
  {
    number: "03",
    icon: Cable,
    title: "Electrical Wiring & Setup",
    description: "Professional electrical installations, rewiring, and upgrades. Safe, compliant, and built to last for both residential and commercial properties.",
  },
  {
    number: "04",
    icon: Home,
    title: "Smart Home Integration",
    description: "Modern energy management systems that let you monitor and control your power usage from anywhere. Maximize efficiency and savings.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
            Complete energy solutions for modern living
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From small setups to full energy independence, we handle everything with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
