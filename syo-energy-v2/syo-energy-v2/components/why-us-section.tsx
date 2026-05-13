"use client"

import { useEffect, useState, useRef } from "react"
import { Shield, Clock, Wrench, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We use only premium components from trusted manufacturers with proper warranties.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Projects are completed on schedule without compromising quality.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our certified technicians bring years of experience to every installation.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "24/7 support and maintenance services to keep your system running optimally.",
  },
]

const stats = [
  { value: 76, suffix: "", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
]

function AnimatedCounter({ 
  value, 
  suffix, 
  duration = 2000 
}: { 
  value: number
  suffix: string
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
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * value))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(value)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
              Premium quality,
              <span className="block italic">not roadside work</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {"We're not just electricians. We're energy consultants who design systems that actually work for your specific needs and budget."}
            </p>

            {/* Stats with Counter Animation */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl lg:text-4xl font-serif font-medium">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-transparent hover:border-border transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
