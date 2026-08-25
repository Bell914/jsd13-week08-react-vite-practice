import React from 'react'
import { ContactButton } from '../common/ContactButton'
import { FadeIn } from '../common/FadeIn'
import { AnimatedText } from '../common/AnimatedText'

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

export function AboutSection({ onContactClick }) {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Images in Corners */}

      {/* 1. Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none w-[120px] sm:w-[160px] md:w-[210px]">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none w-[100px] sm:w-[140px] md:w-[180px]">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Decor"
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 3. Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none w-[120px] sm:w-[160px] md:w-[210px]">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decor"
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none w-[130px] sm:w-[170px] md:w-[220px]">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between Heading and Text Block */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph with Character-by-Character Scroll Reveal */}
        <div className="max-w-[560px] mx-auto px-4">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Spacing between Text Block and Contact Button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutSection
