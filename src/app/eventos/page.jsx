import Hero from "../components/hero.jsx";
import EventCard from "../components/eventCard.jsx";
import { PageContent, HeroContent, EventsData } from '../content/content.js';

export default function EventosPage() {
    const heroProps = {
        title: HeroContent.EventosHeroContent.title,
        description: HeroContent.EventosHeroContent.description,
        src: HeroContent.EventosHeroContent.src,
        alt: HeroContent.EventosHeroContent.alt,
    }

    const eventosPageData = {
        title: PageContent.EventosContent.title,
        subtitle: PageContent.EventosContent.subtitle,
    }

    return (
        <>
            <Hero {...heroProps}></Hero>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{eventosPageData.title}</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {eventosPageData.subtitle}
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {EventsData.map((item) => (
                            <EventCard key={item.id} {...item}></EventCard>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
