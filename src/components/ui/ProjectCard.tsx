import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white border-2 border-slate-200 border-b-[6px] border-b-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-lg flex flex-col h-full">
      {/* Image container */}
      <div className="aspect-[16/10] bg-[#0b0c10] flex items-center justify-center relative overflow-hidden border-b-2 border-slate-200">
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
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Category tag */}
        <div className="mb-2.5">
          <span className="inline-block bg-[#d9ff42] border border-[#c5e933] text-black text-[10px] font-extrabold rounded px-2 py-0.5 shadow-[1.5px_1.5px_0_rgba(0,0,0,0.08)]">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-[#2152cf] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="border-t border-slate-100 pt-3 mt-auto">
          <button className="flex items-center gap-1 text-[#2152cf] text-xs sm:text-sm font-extrabold hover:gap-2 transition-all duration-200 group/link cursor-pointer">
            Lihat Detail
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
