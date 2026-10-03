import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import Section, { Reveal } from './Section'
import { projects } from '../data'

function Links({ project }) {
  if (!project.repo && !project.live) return null
  return (
    <div className="flex items-center gap-5 mt-6">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink transition-colors"
        >
          Live site <ArrowUpRight size={15} />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          <GithubIcon size={14} /> Source
        </a>
      )}
    </div>
  )
}

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mt-5 font-mono text-xs text-ink-muted">
      {tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  )
}

function Featured({ project }) {
  return (
    <Reveal className="rounded-2xl border border-line bg-surface-raised overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <div className="p-6 sm:p-8 md:p-10 flex flex-col">
          <p className="font-mono text-xs text-accent tracking-wider">Featured · {project.kind}</p>
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-4 text-ink-soft leading-relaxed">{project.description}</p>
          <Tags tags={project.tags} />
          <Links project={project} />
        </div>

        <div className="relative min-w-0 border-t lg:border-t-0 lg:border-l border-line bg-surface">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
          <div className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 sm:px-8 py-8 md:py-10 [scrollbar-width:thin]">
            {project.screenshots.map(shot => (
              <img
                key={shot.src}
                src={import.meta.env.BASE_URL + shot.src}
                alt={shot.alt}
                loading="lazy"
                width="480"
                height="1043"
                className="w-36 sm:w-40 md:w-44 h-auto shrink-0 snap-start rounded-[1.25rem] border border-line-strong shadow-2xl shadow-black/50"
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Card({ project, delay }) {
  return (
    <Reveal delay={delay} className="group flex flex-col p-6 sm:p-7 rounded-2xl border border-line bg-surface-raised hover:border-line-strong hover:bg-surface-hover transition-colors">
      <p className="font-mono text-xs text-ink-muted tracking-wider">{project.kind}</p>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">{project.description}</p>
      <Tags tags={project.tags} />
      <Links project={project} />
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <Section
      id="projects"
      index="02"
      label="Projects"
      title="Things I've built."
      intro="Apps and tools that sit between biotech operations and everyday software."
    >
      <div className="space-y-5">
        {featured.map(p => <Featured key={p.title} project={p} />)}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((p, i) => <Card key={p.title} project={p} delay={i * 0.06} />)}
        </div>
      </div>
    </Section>
  )
}
