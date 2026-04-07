import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-6 bg-surface-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Professional journey
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-dim hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-surface hidden md:block" />

                <div className="p-5 rounded-2xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base font-semibold text-text-primary">{exp.role}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-sm text-accent">
                          <Briefcase size={13} /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted bg-surface-secondary px-3 py-1 rounded-full border border-border-dim whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
