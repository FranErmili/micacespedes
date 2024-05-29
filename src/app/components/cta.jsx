import Image from "next/image"
export default function Cta({ src, alt, description, title, buttonText, href }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-gradient-to-r from-toast-500 to-toast-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">{title}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-200">
                {description}
              </p>
              <a
                href={href}
                className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-base font-medium text-redwood-600 shadow hover:ring-1 hover:ring-redwood-400 hover:bg-gray-100 border-transparent"
              >
                {buttonText}
              </a>
            </div>
          </div>
          <div className="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
            <div className="">
              <Image
                className=" relative transform rounded-md "
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
