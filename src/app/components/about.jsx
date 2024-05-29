import { AboutData } from "../content/content.js";

export default function About() {
  return (
    <div className="mb-32 bg-gradient-to-r from-toast-600 to-toast-800 grid lg:grid-cols-2 items-center justify-center max-h[640px]">
      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[100%] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${AboutData.src})`,
            backgroundPosition: 'center',
          }}

        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
      </div>
      <div className="px-6 py-10 sm:px-12 lg:py-8 xl:px-16 xl:py-12">
        <h2 className="text-center text-base font-semibold leading-7 text-redwood-400">Sobre mí</h2>
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Soy Mica Cespedes</p>
        <p className="mt-6 text-base leading-7 text-gray-200">{AboutData.p1}</p>
        <p className="mt-6 text-base leading-7 text-gray-200">{AboutData.p2}</p>
        <p className="mt-6 text-base leading-7 text-gray-200">{AboutData.p3}</p>
      </div>
    </div>
  );
}