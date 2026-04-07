import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-dim">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Armenuhi Avanesyan
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: GithubIcon, href: 'https://github.com/avaarm' },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/armenuhi-avanesyan' },
            { icon: Mail, href: 'mailto:avaarm95@gmail.com' },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-text-muted hover:text-text-secondary transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
