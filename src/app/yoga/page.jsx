import Hero from "../components/hero.jsx";
import { PageContent, HeroContent, ClasesVideoData } from '../content/content.js';
import VideoSection from "../components/videoSection.jsx";
import Image from "next/image.js";
import PracticasYoga from "../components/practicasYoga.jsx";

export default function ClasesPage() {
    const heroProps = {
        title: HeroContent.ClasesHeroContent.title,
        description: HeroContent.ClasesHeroContent.description,
        src: HeroContent.ClasesHeroContent.src,
        alt: HeroContent.ClasesHeroContent.alt,
    }

    const clasesPageData = {
        title: PageContent.ClasesContent.title,
        subtitle: PageContent.ClasesContent.subtitle,
    }

    return (
        <>
            <Hero {...heroProps}></Hero>
            <div className="relative bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
                <div className="relative mx-auto max-w-7xl h-full">
                    <PracticasYoga></PracticasYoga>
                    <div className="mt-24 overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-center justify-center p-4">
                                <div className="flex justify-center lg:col-span-2">
                                    <div className="relative hover:ring rounded-2xl ring-toast-300 transition min-w-[38rem] w-full max-w-[42rem] h-[400px]">
                                        <Image
                                            src="/img/clases-4.jpg"
                                            alt="Clases de Yoga"
                                            layout="fill"
                                            objectFit="cover"
                                            className="aspect-[7/4] rounded-2xl bg-gray-50 border border-gray-400"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl" />
                                    </div>
                                </div>
                                <div className="flex justify-center lg:col-span-1">
                                    <div className="relative hover:ring rounded-2xl ring-toast-300 transition min-w-[20rem] max-w-[28rem] h-[600px] ">
                                        <Image
                                            src="/img/clases-3.jpeg"
                                            alt="Yoga con Mica Céspedes"
                                            layout="fill"
                                            objectFit="cover"
                                            className="aspect-[3/4] rounded-2xl bg-gray-50 border border-gray-400"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 lg:mt-0 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center justify-center p-4 ">
                                <div className=" lg:w-full lg:max-w-lg p-8 flex flex-col justify-center px-8 border border-gray-300 shadow-lg hover:ring rounded-2xl ring-toast-300 transition">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{clasesPageData.title}</h2>
                                    <p className="mt-6 text-xl leading-8 text-gray-600">
                                        {clasesPageData.subtitle}
                                    </p>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        4 clases grabadas con mucho amor para que las realices cuando vos quieras, no se borran.
                                        Por favor utilizar el material con consciencia no esta permitido compartir ni duplicarlo. Confío
                                        en tu consciencia…
                                    </p>
                                    <div className=" mt-6 flex items-center justify-start gap-x-6">
                                        <a
                                            href=''
                                            className="rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:ring-1 hover:ring-redwood-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-20 "
                                        >
                                            Saber Más
                                        </a>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative hover:ring rounded-2xl ring-toast-300 transition w-[32rem] max-w-none h-[300px]">
                                        <Image
                                            src="/img/clases-1.JPG"
                                            alt="Bienestar y salud con yoga"
                                            layout="fill"
                                            objectFit="cover"
                                            className="aspect-[5/3] rounded-2xl bg-gray-50 border border-gray-400"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl" />
                                    </div>

                                </div>
                            </div>
                            <div className="mt-6 lg:mt-0 flex items-center justify-end p-4 ">
                                <div className="relative hover:ring rounded-2xl ring-toast-300 transition w-[56rem] max-w-[42rem]  lg:max-w-[56rem] h-[500px]">
                                    <Image
                                        src="/img/clases-2.JPG"
                                        alt="El yoga cómo método de transformación"
                                        layout="fill"
                                        objectFit="cover"
                                        className="aspect-[7/4] flex-none rounded-2xl bg-gray-50"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoSection
                destacado={ClasesVideoData.destacado}
                title={ClasesVideoData.title}
                description={ClasesVideoData.description}
                src={ClasesVideoData.src}>
            </VideoSection>
        </>
    )
}
