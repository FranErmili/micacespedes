'use client'

import Hero from './components/hero'
import About from './components/about'
import Sections from './components/sections'
import VideoSection from './components/videoSection'
import Cta from './components/cta'
import { HeroContent, HomeVideoData, HomeBannerData } from './content/content'
import Features from './components/features'
import Image from 'next/image'


export default function Home() {
  const heroProps = {
    title: HeroContent.HomeHeroContent.title,
    description: HeroContent.HomeHeroContent.description,
    src: HeroContent.HomeHeroContent.src,
    alt: HeroContent.HomeHeroContent.alt,
  }

  return (
    <div className="bg-white">
      <main>
        <Hero {...heroProps}></Hero>
        <Features></Features>
        <About></About>
        <Sections></Sections>
        <VideoSection
          destacado={HomeVideoData.destacado}
          title={HomeVideoData.title}
          description={HomeVideoData.description}
          src={HomeVideoData.src}>
        </VideoSection>
        <Cta
          title={HomeBannerData.title}
          description={HomeBannerData.description}
          href={HomeBannerData.href}
          src={HomeBannerData.src}
          alt={HomeBannerData.alt}
          buttonText={HomeBannerData.buttonText}
        ></Cta>
      </main>
    </div>
  )
}
