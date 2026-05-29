'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/lib/data'

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      // Check initial scroll bounds
      handleScroll()
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      // Scroll by 1 card slot width (on mobile scroll 85% of screen, on desktop scroll ~520px)
      const scrollAmount = direction === 'left' ? -clientWidth * 0.85 : clientWidth * 0.85
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="project" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#2152cf]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionHeading
              title="Proyek yang "
              titleHighlight="Kami Kerjakan"
              subtitle="Setiap proyek adalah cerita sukses. Ini sebagian kecil dari apa yang telah kami bangun bersama klien kami."
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-[#e4e8f2] flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#2152cf] border-[#2152cf] hover:bg-[#2152cf] hover:text-white shadow-sm'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed border-transparent'
              }`}
              aria-label="Projek Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-[#e4e8f2] flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#2152cf] border-[#2152cf] hover:bg-[#2152cf] hover:text-white shadow-sm'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed border-transparent'
              }`}
              aria-label="Projek Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[500px] shrink-0 snap-start snap-always"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
