import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../common/FadeIn'
import { LiveProjectButton } from '../common/LiveProjectButton'

const PROJECTS_DATA = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

function ProjectCard({ project, index, totalCards, progress, range, targetScale }) {
  const containerRef = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
      >
        {/* Top Row: Number, Category, Project Name, Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-1">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom Row: 2-Column Image Grid (40% / 60%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-6">
          {/* Left Column (40% width -> 5 cols): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5 shadow-md"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5 shadow-md"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>

          {/* Right Column (60% width -> 7 cols): 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[300px] md:min-h-full">
            <div className="w-full h-full min-h-[300px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5 shadow-md">
              <img
                src={project.col2Img}
                alt={`${project.name} main showcase`}
                loading="lazy"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalCards = PROJECTS_DATA.length

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 px-5 sm:px-8 md:px-10 z-10 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {PROJECTS_DATA.map((project, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03
            const range = [index * 0.25, 1]

            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
