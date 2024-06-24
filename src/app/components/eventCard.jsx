export default function EventCard({ id, fechaInicio, fechaFin, título, ubicación }) {
    return (
        <article key={id} className=" justify-between border border-gray-200 rounded-2xl hover:shadow-lg transition-all">

            {/* <div className="relative w-full">
                <img src={imageUrl} alt={title} className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div> */}
            <div className="p-4">
                
                <div className="">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {/* <a href={href}>
                            <span className="absolute inset-0" />
                            {title}
                        </a> */}
                        {título}
                    </h3>
                    {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p> */}
                </div>

                <div className="mt-2 flex items-center gap-x-4 text-xs">
                    <time dateTime={fechaFin} className="text-gray-500">
                        {fechaInicio} - {fechaFin}
                    </time>
                    <div
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {ubicación}
                    </div>
                </div>

                <div className="mt-6 flex items-end justify-start gap-x-6 w-full">
                    <a
                        href=""
                        className=" w-full rounded-md bg-gradient-to-r from-redwood-500 to-redwood-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm transition hover:ring-1 hover:ring-redwood-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-20 "
                    >
                        Inscribirme
                    </a>
                </div>
            </div>
        </article>
    )
}