import Section, { Reveal } from './Section'
import { techSkills, biotechSkills } from '../data'

function Group({ title, skills, delay }) {
  return (
    <Reveal delay={delay}>
      <h3 className="font-mono text-xs text-ink-muted tracking-wider mb-4">{title}</h3>
      <div className="rounded-2xl border border-line bg-surface-raised divide-y divide-line">
        {skills.map(({ category, icon: Icon, items }) => (
          <div key={category} className="p-5 sm:p-6 grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-6">
            <p className="flex items-center gap-2.5 text-sm font-medium text-ink">
              <Icon size={16} className="text-accent shrink-0" />
              {category}
            </p>
            <p className="text-sm text-ink-soft leading-relaxed">{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="Two toolkits, one practice.">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-6">
        <Group title="Biotech & clinical" skills={biotechSkills} delay={0} />
        <Group title="Software engineering" skills={techSkills} delay={0.08} />
      </div>
    </Section>
  )
}
