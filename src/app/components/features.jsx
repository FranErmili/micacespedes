import Image from "next/image"

export default function Features() {
    return (
        <div className="bg[#F7DCB9] py-8 lg:py-16">
            <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">La mejor forma de encontrar tu bienestar.</h2>
                <div className="flex justify-around">
                    <div className="">

                    </div>
                    {/* <div className="flex items-center justify-center rounded-xl border border-redwood-500 px-4 py-2">
                        <Image
                            src="/icon/loto.svg"
                            alt="loto"
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className="flex items-center justify-center rounded-xl border border-redwood-500 px-4 py-2">
                        <Image
                            src="/icon/yoga.svg"
                            alt="Yoga"
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className="flex items-center justify-center rounded-xl border border-redwood-500 px-4 py-2">
                        <Image
                            src="/icon/ojo.svg"
                            alt="Ojo"
                            width={128}
                            height={128}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
