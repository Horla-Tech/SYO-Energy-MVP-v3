"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter, ArrowRight } from "lucide-react"
import { projects } from "@/components/gallery-section"

const categories = ["All", "Solar", "Backup Power", "Electrical", "Smart Tech"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % filteredProjects.length)
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, filteredProjects.length])

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [lightboxOpen])

  return (
    <>
      <PageHeader />

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Portfolio</p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance leading-tight">
                  Real projects, real results
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Browse our portfolio of completed solar installations, backup power systems,
                  electrical work, and smart home integrations across Lagos and Nigeria.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 lg:justify-end">
                {[
                  { value: "76+", label: "Projects Completed" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "2+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-right">
                    <p className="text-4xl font-serif font-medium text-accent">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-xs text-muted-foreground shrink-0 mr-1">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-xs text-muted-foreground shrink-0">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="py-10 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-muted-foreground">No projects found in this category.</p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 text-accent text-sm font-medium hover:underline"
                >
                  View all projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Always-visible category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full group-hover:opacity-0 transition-opacity">
                        {project.category}
                      </span>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>

                    {/* Hover content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-base font-semibold text-white leading-tight">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-0.5">{project.location}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium">
                Want to see your project here?
              </h2>
              <p className="mt-4 text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
                Let us design and install a reliable energy system for your home or business.
                Join our growing list of satisfied clients across Lagos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Book Free Inspection
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href="https://wa.me/2348064263647?text=Hello%2C%20I%27m%20interested%20in%20your%20energy%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && filteredProjects[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-2">
                {filteredProjects[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-serif font-medium text-white">
                {filteredProjects[lightboxIndex].title}
              </h3>
              <p className="text-white/60 text-sm mt-1">{filteredProjects[lightboxIndex].location}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            <span className="text-white font-medium">{lightboxIndex + 1}</span>
            <span className="mx-1.5">/</span>
            <span>{filteredProjects.length}</span>
          </div>
        </div>
      )}
    </>
  )
}
