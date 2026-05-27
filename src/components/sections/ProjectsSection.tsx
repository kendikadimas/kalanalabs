import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/lib/data'

export default function ProjectsSection() {
  return (
    <section id="project" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 md:mb-16">
          <SectionHeading
            title="Proyek yang "
            titleHighlight="Kami Kerjakan"
            subtitle="Setiap proyek adalah cerita sukses. Ini sebagian kecil dari apa yang telah kami bangun bersama klien kami."
            centered
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
