import SectionLabel from './SectionLabel'

interface SectionHeadingProps {
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const textAlign = centered ? 'text-left md:text-center items-start md:items-center' : 'text-left items-start'
  const textColor = light ? 'text-white' : 'text-[#1e2547]'
  const subtitleColor = light ? 'text-white/70' : 'text-[#4f5b7d]'

  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title]

  return (
    <div className={`flex flex-col gap-4 ${textAlign} ${className}`}>
      {label && <SectionLabel text={label} light={light} />}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line ${textColor}`}>
        {titleHighlight ? (
          <>
            {titleParts[0]}
            <span className="font-script text-[#2152cf]">
              {titleHighlight}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
