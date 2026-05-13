"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowRight } from "lucide-react"

export const projects = [
  {
    id: 1,
    title: "Residential Solar Installation",
    location: "Lekki, Lagos",
    image: "/gallery/solar-residential.jpg",
    category: "Solar",
  },
  {
    id: 2,
    title: "Commercial Backup System",
    location: "Victoria Island, Lagos",
    image: "/gallery/backup-commercial.jpg",
    category: "Backup Power",
  },
  {
    id: 3,
    title: "Smart Home Integration",
    location: "Ikoyi, Lagos",
    image: "/gallery/smart-home.jpg",
    category: "Smart Tech",
  },
  {
    id: 4,
    title: "Full Solar + Battery Setup",
    location: "Ajah, Lagos",
    image: "/gallery/solar-battery.jpg",
    category: "Solar",
  },
  {
    id: 5,
    title: "Office Electrical Rewiring",
    location: "Ikeja, Lagos",
    image: "/gallery/electrical-office.jpg",
    category: "Electrical",
  },
  {
    id: 6,
    title: "Inverter Installation",
    location: "Yaba, Lagos",
    image: "/gallery/inverter-setup.jpg",
    category: "Backup Power",
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    setIsPaused(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % projects.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || lightboxOpen) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, lightboxOpen, nextSlide])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  const currentProject = projects[currentIndex]

  return (
    <>
      <section id="gallery" className="py-12 lg:py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
              Projects we are proud of
            </h2>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              See the quality of our installations across Lagos and beyond.
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="mt-8 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !lightboxOpen && setIsPaused(false)}
          >
            {/* Main Carousel */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl bg-muted">
              {/* Images */}
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              ))}

              {/* Click to Enlarge Button */}
              <button
                onClick={() => openLightbox(currentIndex)}
                className="absolute top-4 left-4 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                aria-label="Enlarge image"
              >
                <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Content Overlay */}
              <div 
                className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12 cursor-pointer"
                onClick={() => openLightbox(currentIndex)}
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                      {currentProject.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white">
                      {currentProject.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base">{currentProject.location}</p>
                  </div>

                  {/* Counter */}
                  <div className="text-white/60 text-sm font-medium">
                    <span className="text-white text-lg">{String(currentIndex + 1).padStart(2, "0")}</span>
                    <span className="mx-2">/</span>
                    <span>{String(projects.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Pause Indicator */}
              {isPaused && !lightboxOpen && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium">
                  Paused
                </div>
              )}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-accent" 
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Preview */}
            <div className="hidden lg:flex justify-center gap-2 mt-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goToSlide(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-background scale-105" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* View All Projects Link */}
          <div className="mt-6 text-center">
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              fill
              className="object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-3">
                {projects[lightboxIndex].category}
              </span>
              <h3 className="text-2xl font-serif font-medium text-white">
                {projects[lightboxIndex].title}
              </h3>
              <p className="text-white/70 mt-1">{projects[lightboxIndex].location}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            <span className="text-white">{lightboxIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{projects.length}</span>
          </div>
        </div>
      )}
    </>
  )
}
