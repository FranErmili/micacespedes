import Hero from "../components/hero.jsx";
import { PageContent, ItemContent, HeroContent } from '../content/content.js';
import TratamientosCard from "../components/tratamientosCard.jsx";
import SesionesCard from "../components/sesionesCard.jsx";
   


export default function TratamientosPage() {
    const heroProps = {
        title: HeroContent.TratamientosHeroContent.title,
        description: HeroContent.TratamientosHeroContent.description,
        src: HeroContent.TratamientosHeroContent.src,
        alt: HeroContent.TratamientosHeroContent.alt,
    }

    const tratamientosPageData = {
        title: PageContent.TratamientosContent.title,
        subtitle: PageContent.TratamientosContent.subtitle,
    }

    return (
        <>
            <Hero {...heroProps}></Hero>
            <div className="relative  bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
                <div className="absolute inset-0">
                    <div className="h-1/3 sm:h-2/3" />
                </div>
                <div className="relative mx-auto max-w-7xl h-full">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{tratamientosPageData.title}</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                            {tratamientosPageData.subtitle}
                        </p>
                    </div>

                    <div className="mt-32 flex flex-col gap-20">    
                    <TratamientosCard></TratamientosCard>
                    <SesionesCard></SesionesCard>
                    </div>
                </div>
            </div>
        </>
    )
}
