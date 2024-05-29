export default function VideoSection({ destacado, title, description, src }) {
    return (
        <div className=" bg-steel-blue-700 py-20 px-2 sm:px-6 md:px-12 lg:px-20">
            <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl sm:text-center">
                    <h3 className="text-base font-semibold leading-7 text-redwood-500">{destacado}</h3>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                        {description}
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-5xl max-h-xl px-6 lg:px-8">
                    <div className="aspect-w-4 aspect-h-3">
                        <iframe width="720" height="540"
                            src={src}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen 
                            className=" rounded-xl shadow-3xl ring-1 ring-gray-900/10">
                        </iframe>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}