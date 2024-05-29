import Image from "next/image"

export default function Hero( {title, description, src, alt} ) {
    return (
        <div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 h-screen">
          <Image
            src={src}
            alt={alt}
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            className="absolute inset-0 -z-10 h-full w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 m-auto max-w-3xl text-xl leading-8 text-gray-300">
                 {description}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
