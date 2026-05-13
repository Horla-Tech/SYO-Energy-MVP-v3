import { PageHeader } from "@/components/page-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { GallerySection } from "@/components/gallery-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <PageHeader />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
