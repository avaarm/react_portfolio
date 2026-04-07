import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's connect
          </h3>
          <p className="text-text-secondary mb-10 max-w-lg mx-auto">
            Interested in collaborating on biotech software, cell therapy innovation,
            or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10"
        >
          {[
            { icon: Mail, label: 'Email', value: 'avaarm95@gmail.com', href: 'mailto:avaarm95@gmail.com' },
            { icon: MapPin, label: 'Location', value: 'Seattle, WA', href: null },
            { icon: GithubIcon, label: 'GitHub', value: 'avaarm', href: 'https://github.com/avaarm' },
            { icon: LinkedinIcon, label: 'LinkedIn', value: 'armenuhi-avanesyan', href: 'https://linkedin.com/in/armenuhi-avanesyan' },
          ].map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div'
            const linkProps = href
              ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {}
            return (
              <Wrapper
                key={label}
                {...linkProps}
                className="flex items-center gap-3 p-4 rounded-xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright transition-colors text-left"
              >
                <Icon size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-xs text-text-muted">{label}</p>
                  <p className="text-sm text-text-primary font-medium">{value}</p>
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="mailto:avaarm95@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent/20 text-accent rounded-xl text-sm font-medium hover:bg-accent/20 transition-all"
        >
          <Mail size={16} />
          Send me a message
        </motion.a>
      </div>
    </section>
  )
}
