const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We visit your property, assess your energy needs, and understand your goals. No obligation, no pressure.",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description: "Receive a detailed proposal with system specifications, pricing, and timeline tailored to your needs.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Our certified team handles everything from permits to final setup. Clean, efficient, and on schedule.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We stay with you after installation. Enjoy warranty coverage, maintenance, and 24/7 support.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">How It Works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
            From consultation to power-on
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/70 leading-relaxed">
            A simple, transparent process designed to get you reliable power as quickly as possible.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-primary-foreground/20" />
              )}
              
              <div className="relative text-center lg:text-left">
                <span className="inline-block text-4xl lg:text-5xl font-serif font-medium text-accent/80">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-primary-foreground/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
