'use client'

import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import { NavigationData, LogoData } from '../content/content.js'
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white  backdrop-filter backdrop-blur bg-opacity-5">
            <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5">
                        <span className="sr-only">{LogoData.alt}</span>
                        <Image
                            src={LogoData.src}
                            alt={LogoData.alt}
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir Menú</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {NavigationData.map((item) => (
                        <Link key={item.name} href={item.href} className="py-1 px-2 text-md rounded-md font-semibold leading-6 text-gray-200 hover:text-gray-300 hover:shadow-lg transition">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white  backdrop-filter backdrop-blur bg-opacity-5 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5">
                            <span className="sr-only">{LogoData.alt}</span>
                            <Image
                                src={LogoData.src}
                                alt={LogoData.alt}
                                width={50}
                                height={50}
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Cerrar Menú</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {NavigationData.map((item) => (
                                    <Link 
                                    href={item.href} 
                                    key={item.name}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50/50">

                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}