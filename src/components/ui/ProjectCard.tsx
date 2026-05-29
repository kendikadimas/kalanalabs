import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-[#e4e8f2] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#2152cf]/10 hover:-translate-y-1">
      {/* Image container */}
      <div className="aspect-[3/2] bg-[#0b0c10] flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2152cf]/5 to-[#d9ff42]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-[#8a96b8] text-sm font-medium">[ Tambahkan Gambar ]</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category tag */}
        <span className="inline-block bg-[#d9ff42]/20 text-[#1e2547] text-xs font-semibold rounded-full px-3 py-1 mb-4">
          {project.category}
        </span>

        <h3 className="text-lg font-bold text-[#1e2547] mb-2 group-hover:text-[#2152cf] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[#4f5b7d] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#f1f3f9] text-[#4f5b7d] px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <button className="flex items-center gap-1 text-[#2152cf] text-sm font-semibold hover:gap-2 transition-all duration-200 group/link cursor-pointer">
          Lihat Detail
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </button>
      </div>
    </div>
  )
}
