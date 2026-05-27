import SectionHeading from '@/components/ui/SectionHeading'
import ProcessStepCard from '@/components/ui/ProcessStep'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  return (
    <section id="proses" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + description */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              title="Proses Transparan dari "
              titleHighlight="Hari Pertama"
              subtitle="Kami percaya kerja sama yang baik dimulai dari komunikasi yang jelas. Inilah bagaimana proyek berjalan bersama kami."
            />

            {/* Feature highlights */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                'Komunikasi aktif di setiap tahap',
                'Update progres mingguan',
                'Dokumentasi lengkap setiap deliverable',
                'Revisi terstruktur & transparan',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d9ff42] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#1e2547]"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#4f5b7d] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process steps */}
          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
