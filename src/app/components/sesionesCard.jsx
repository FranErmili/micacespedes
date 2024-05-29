import Image from "next/image";
import { ItemContent } from "../content/content";

export default function SesionesCard() {
    return (
        <div className="mx-auto bg-white max-w-8xl px-6 lg:p-8 border-b border-gray-300 shadow-xl rounded-xl">
            <div className="mx-auto max-w-2xl items-start sm:gap-y-12 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
                    <div className="lg:order-2">
                        <p className="text-base font-semibold leading-7 text-redwood-600">{ItemContent.TratamientosItemData[1].destacado}</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ItemContent.TratamientosItemData[1].title}</h1>
                        <dl className="max-w-xl mt-4  border-t border-gray-900/10 pt-10">
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <div className="max-w-xl">
                                    <p className="mt-6 text-gray-900">{ItemContent.TratamientosItemData[1].description.p1}</p>
                                    <p className="mt-8 text-gray-900">{ItemContent.TratamientosItemData[1].description.p2}</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-end justify-start gap-x-6 w-full">
                                <a
                                    href=''
                                    className=" w-full rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm transition hover:ring-1 hover:ring-redwood-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-20 "
                                >
                                    Saber Más
                                </a>
                            </div>
                        </dl>
                    </div>

                    <div className="lg:order-1 mt-10 item-center relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border border-gray-400">
                        <Image
                            src={ItemContent.TratamientosItemData[1].src}
                            alt={ItemContent.TratamientosItemData[1].alt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="absolute inset-0 h-full w-full shadow-xl"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}