import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data'

const colorMap = {
  accent: { bg: 'bg-accent-dim', text: 'text-accent', border: 'border-accent/20' },
  rose: { bg: 'bg-rose-dim', text: 'text-rose', border: 'border-rose/20' },
  green: { bg: 'bg-green-dim', text: 'text-green', border: 'border-green/20' },
  blue: { bg: 'bg-blue-dim', text: 'text-blue', border: 'border-blue/20' },
  amber: { bg: 'bg-amber-dim', text: 'text-amber', border: 'border-amber/20' },
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Things I've built
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const colors = colorMap[project.color] || colorMap.accent
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-5 rounded-2xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright hover:bg-surface-hover transition-all duration-300"
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${colors.bg} ${colors.border} border mb-4`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.text} opacity-80`} style={{ backgroundColor: 'currentColor' }} />
                  <span className={`text-xs font-medium ${colors.text}`}>{project.tags[0]}</span>
                </div>

                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(1).map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs text-text-muted bg-surface-secondary rounded-md border border-border-dim">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border-dim">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                    >
                      <GithubIcon size={14} /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
