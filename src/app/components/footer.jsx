import { NavigationData, LogoData, Social, FooternNavigation } from '../content/content.js'
import Image from 'next/image.js'
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-toast-300 to-toast-500" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-6">
            <Image
              src={LogoData.src}
              alt={LogoData.alt}
              width={50}
              height={50}
            />
            <p className="text-sm leading-6 text-gray-600">
              Construyendo el camino del bienestar.
            </p>
            <div className="flex space-x-6 flex-wrap items-center justify-center sm:justify-start">
              {Social.map((item) => (
                <a key={item.name} href={item.href} className="text-white hover:text-gray-500 transition">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-8 xl:mt-0">
            <div>
              <ul role="list" className="mt-6 space-y-4">
                {NavigationData.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 font-semibold text-gray-700 hover:text-gray-900 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:flex">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  {FooternNavigation.slice(0, 4).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden sm:flex">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  {FooternNavigation.slice(5, 8).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-12 flex justify-between flex-col gap-2 md:flex-row">
          <p className="text-xs leading-5 text-gray-600">&copy; 2024 Micaela Cespedes. All rights reserved.</p>
          <p className="text-xs leading-5 text-gray-600">&copy; Desarrollado por Francisco Ermili</p>
        </div>
      </div>
    </footer >
  )
}
