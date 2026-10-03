import Section, { Reveal } from './Section'
import { publications } from '../data'

export default function Publications() {
  return (
    <Section id="publications" index="05" label="Publications" title="Research and presentations.">
      <ul className="border-t border-line">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.05}>
            <li className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-10 py-6 border-b border-line">
              <p className="font-mono text-xs text-ink-muted pt-1">
                <span className="text-accent">{pub.type}</span>
                <span className="block mt-1">{pub.role}</span>
              </p>
              <div>
                <h3 className="text-base md:text-lg font-medium text-ink leading-snug max-w-3xl">{pub.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{pub.venue}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
