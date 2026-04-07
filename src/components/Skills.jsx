import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { techSkills, biotechSkills } from '../data'

function SkillGroup({ title, skills, inView, delayOffset = 0 }) {
  return (
    <div>
      <h4 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">{title}</h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: delayOffset + i * 0.08 }}
              className="p-4 rounded-xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={16} className="text-accent" />
                <h5 className="text-sm font-semibold text-text-primary">{skill.category}</h5>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-xs text-text-secondary bg-surface-secondary rounded-md border border-border-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Technical expertise
          </h3>
        </motion.div>

        <div className="space-y-10">
          <SkillGroup title="Software Engineering" skills={techSkills} inView={inView} delayOffset={0.1} />
          <SkillGroup title="Biotech & Clinical" skills={biotechSkills} inView={inView} delayOffset={0.3} />
        </div>
      </div>
    </section>
  )
}
