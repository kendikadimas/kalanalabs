import SectionHeading from '@/components/ui/SectionHeading'
import ProcessStepCard from '@/components/ui/ProcessStep'
import Button from '@/components/ui/Button'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  return (
    <section id="proses" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + description */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              title="4 Langkah Mudah Memulai "
              titleHighlight="Proyek Anda"
              subtitle="Ingin mulai membangun proyek Anda? Hubungi kami langsung dengan klik tombol WhatsApp di bawah. Kami akan memandu Anda secara transparan dari briefing kebutuhan hingga serah terima melalui 4 langkah praktis berikut."
            />

            {/* Feature highlights */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                'Alur kerja adaptif & fleksibel',
                'Diskusi & konsultasi berkala',
                'Revisi solutif sesuai kesepakatan',
                'Dukungan penuh setelah proyek rilis',
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

            {/* CTA Button */}
            <div className="mt-10">
              <Button
                href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20untuk%20mulai%20berkonsultasi%20proyek."
                variant="primary"
                size="md"
                className="shadow-lg shadow-[#2152cf]/10"
              >
                Mulai Konsultasi Proyek
              </Button>
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
