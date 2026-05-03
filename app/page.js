'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.page}>

      {/* Center Lime Glow */}
      <div className={styles.centerGlow} />

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoLight}>Med</span>
          <span className={styles.logoAccent}>Save</span>
          <span className={styles.logoDot} />
        </div>

        <button
          className={styles.btnPrimary}
          onClick={() => router.push('/home')}
        >
          Get Started
        </button>
      </nav>
      
{/* HERO SECTION */}
      <section className={styles.hero}>

        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Your personal health companion
        </div>

        
       {/* Floating Pill Cluster */}
<div className={styles.pillCluster}>

  {/* Main Big Pill - Center */}
  <svg className={styles.pillMain} width="100" height="44" viewBox="0 0 100 44">
    <defs>
      <linearGradient id="pillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2FF7A"/>
        <stop offset="50%" stopColor="#C8E66B"/>
        <stop offset="100%" stopColor="#8FAF2A"/>
      </linearGradient>
      <linearGradient id="glossGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.35"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="100" height="44" rx="22" fill="url(#pillGrad1)"/>
    <rect x="50" y="0" width="50" height="44" rx="22" fill="#8FAF2A"/>
    <line x1="50" y1="0" x2="50" y2="44" stroke="#080808" strokeWidth="1.5" opacity="0.15"/>
    {/* Gloss highlight */}
    <rect x="4" y="4" width="92" height="18" rx="10" fill="url(#glossGrad1)"/>
  </svg>

  {/* Top Right Pill */}
  <svg className={styles.pillSmall} width="56" height="24" viewBox="0 0 56 24">
    <defs>
      <linearGradient id="pillGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A3A10"/>
        <stop offset="100%" stopColor="#1A2210"/>
      </linearGradient>
      <linearGradient id="glossGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="56" height="24" rx="12" fill="url(#pillGrad2)"/>
    <rect x="28" y="0" width="28" height="24" rx="12" fill="#C8E66B" opacity="0.7"/>
    <rect x="2" y="2" width="52" height="10" rx="6" fill="url(#glossGrad2)"/>
  </svg>

  {/* Bottom Left Pill */}
  <svg className={styles.pillTiny} width="48" height="20" viewBox="0 0 48 20">
    <defs>
      <linearGradient id="pillGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C8E66B" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#8FAF2A" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="48" height="20" rx="10" fill="#1A2210"/>
    <rect x="24" y="0" width="24" height="20" rx="10" fill="url(#pillGrad3)"/>
    <rect x="2" y="2" width="44" height="8" rx="5" fill="white" opacity="0.08"/>
  </svg>

  {/* Extra small pill - Top Left */}
  <svg className={styles.pillExtra} width="30" height="14" viewBox="0 0 30 14">
    <rect x="0" y="0" width="30" height="14" rx="7" fill="#C8E66B" opacity="0.5"/>
    <rect x="15" y="0" width="15" height="14" rx="7" fill="#8FAF2A" opacity="0.6"/>
    <rect x="1" y="1" width="28" height="6" rx="4" fill="white" opacity="0.15"/>
  </svg>

</div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Medicine tracking,<br />
          <span className={styles.headingAccent}>simplified.</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          Never miss a dose. Manage prescriptions,
          set reminders, and stay on top of your health.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaRow}>
          <button
            className={styles.btnPrimaryLg}
            onClick={() => router.push('/home')}
          >
            Start Now
          </button>
          <button className={styles.btnOutline}>
            Learn More
          </button>
        </div>

      </section>

    </div>
  )
}