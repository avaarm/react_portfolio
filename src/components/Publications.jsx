import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { BookOpen, Mic, FileText } from 'lucide-react'
import { publications } from '../data'

const typeIcons = {
  'Seminar': Mic,
  'Poster Abstract': FileText,
  'Oral Abstract': Mic,
}

export default function Publications() {
  const [ref, inView] = useInView()

  return (
    <section id="publications" className="py-24 px-6 bg-surface-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Publications</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Research & presentations
          </h3>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, i) => {
            const Icon = typeIcons[pub.type] || BookOpen
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent-dim border border-accent/10 shrink-0 mt-0.5">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary leading-snug mb-1.5">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-text-secondary mb-2">{pub.venue}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs text-accent bg-accent-dim rounded-md border border-accent/10">
                        {pub.type}
                      </span>
                      <span className="text-xs text-text-muted">{pub.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
