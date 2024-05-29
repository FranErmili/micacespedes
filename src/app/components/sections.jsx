import { AcademicCapIcon, CalendarDaysIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image.js';
import { SectionsData } from '../content/content.js';

export default function Sections() {
    return (
        <div className=" relative overflow-hidden bg-white py-32 h-full flex flex-col gap-32">
            <div className="relative h-full">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16 h-full lg:max-h-[600px]">
                        <div className="h-full">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-redwood-500 to-redwood-600">
                                        <AcademicCapIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{SectionsData.Clases.name}</h2>
                                    <p className="mt-4 text-lg text-gray-500">{SectionsData.Clases.description}</p>
                                    <div className=" mt-6 flex items-center justify-start gap-x-6">
                                        <a
                                            href={SectionsData.Clases.href}
                                            className="rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:ring-1 hover:ring-redwood-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-20 "
                                        >
                                            Saber Más
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 h-full lg:max-h-[600px]">
                        <div className="relative h-full">
                            <Image
                                src={SectionsData.Clases.src}
                                alt={SectionsData.Clases.alt}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute top-0 left-0 h-full w-full object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-full">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 h-full">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16 h-full max-h-[600px] order-2">
                        <div className="h-full">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-redwood-500 to-redwood-600">
                                        <CalendarDaysIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{SectionsData.Eventos.name}</h2>
                                    <p className="mt-4 text-lg text-gray-500">{SectionsData.Eventos.description}</p>
                                    <div className=" mt-6 flex items-center justify-start gap-x-6">
                                        <a
                                            href={SectionsData.Eventos.href}
                                            className="rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:ring-1 hover:ring-redwood-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-20 "
                                        >
                                            Saber Más
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 h-full max-h-[600px] order-1">
                        <div className="relative h-full">
                            <Image
                                src={SectionsData.Eventos.src}
                                alt={SectionsData.Eventos.alt}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute top-0 left-0 h-full w-full object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-full">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 h-full">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16 h-full max-h-[600px]">
                        <div className="h-full">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-redwood-500 to-redwood-600">
                                        <HeartIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{SectionsData.Tratamientos.name}</h2>
                                    <p className="mt-4 text-lg text-gray-500">{SectionsData.Tratamientos.description}</p>
                                    <div className="mt-6 flex items-center justify-start gap-x-6">
                                        <a
                                            href={SectionsData.Tratamientos.href}
                                            className="rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:ring-1 hover:ring-redwood-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Saber Más
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 h-full max-h-[600px]">
                        <div className="relative h-full">
                            <Image
                                src={SectionsData.Tratamientos.src}
                                alt={SectionsData.Tratamientos.alt}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute top-0 left-0 h-full w-full object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
