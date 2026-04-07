import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-dim bg-surface-card backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-sm text-text-secondary">Open to opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Armenuhi{' '}
          <span className="bg-gradient-to-r from-accent via-blue to-green bg-clip-text text-transparent">
            Avanesyan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Cell therapy scientist & full-stack developer bridging
          <span className="text-text-primary font-medium"> biotech manufacturing </span>
          and
          <span className="text-text-primary font-medium"> modern software</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-text-muted mb-10"
        >
          10+ years in cell therapy PD &middot; Full-stack engineering &middot; AI/ML applications in biotech
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-xl text-sm font-medium hover:bg-accent/20 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-surface-card border border-border-dim text-text-secondary rounded-xl text-sm font-medium hover:text-text-primary hover:border-border-bright transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          {[
            { icon: GithubIcon, href: 'https://github.com/avaarm', label: 'GitHub' },
            { icon: Mail, href: 'mailto:avaarm95@gmail.com', label: 'Email', isLucide: true },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/armenuhi-avanesyan', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label, isLucide }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-2.5 rounded-xl border border-border-dim bg-surface-card text-text-muted hover:text-text-primary hover:border-border-bright transition-all"
              aria-label={label}
            >
              {isLucide ? <Icon size={18} /> : <Icon size={18} />}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-text-muted hover:text-text-secondary transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
