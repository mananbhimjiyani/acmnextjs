'use client'

import React, {useState, useRef, useEffect} from 'react'
import Image, {StaticImageData} from 'next/image'
import {Transition} from '@headlessui/react'

interface team {
    img: StaticImageData
    quote: string
    name: string
    role: string
}

export default function TeamsSlider({teams}: { teams: team[] }) {
    const teamsRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<number>(0)
    const [autorotate, setAutorotate] = useState<boolean>(true)
    const autorotateTiming: number = 7000

    useEffect(() => {
        if (!autorotate) return
        const interval = setInterval(() => {
            setActive(active + 1 === teams.length ? 0 : active => active + 1)
        }, autorotateTiming)
        return () => clearInterval(interval)
    }, [active, autorotate])

    const heightFix = () => {
        if (teamsRef.current && teamsRef.current.parentElement) teamsRef.current.parentElement.style.height = `${teamsRef.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (

        <div className={"h-screen flex flex-col items-center justify-center relative"}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-sub-heading mb-4">
                Team
            </h1>
            <div className="w-full max-w-3xl mx-auto text-center">
                {/* team image */}
                <div className="relative h-32">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/25 before:via-white/5 before:via-25% before:to-white/0 before:to-75% before:rounded-full before:-z-10">
                        <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,white_20%,white)]">

                            {teams.map((team, index) => (
                                <Transition
                                    key={index}
                                    show={active === index}
                                    className="absolute inset-0 h-full -z-10"
                                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                    enterFrom="opacity-0 -rotate-[60deg]"
                                    enterTo="opacity-100 rotate-0"
                                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                    leaveFrom="opacity-100 rotate-0"
                                    leaveTo="opacity-0 rotate-[60deg]"
                                >
                                    <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                                           src={team.img} width={56} height={56} alt={team.name}/>
                                </Transition>
                            ))}

                        </div>
                    </div>
                </div>
                {/* Text */}
                <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
                    <div className="relative flex flex-col" ref={teamsRef}>

                        {teams.map((team, index) => (
                            <Transition
                                key={index}
                                show={active === index}
                                enter="transition ease-in-out duration-500 delay-200 order-first"
                                enterFrom="opacity-0 -translate-x-4"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition ease-out duration-300 delay-300 absolute"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-4"
                                beforeEnter={() => heightFix()}
                            >
                                <div
                                    className="text-2xl font-bold text-white before:content-['\201C'] after:content-['\201D']">{team.quote}</div>
                            </Transition>
                        ))}

                    </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-wrap justify-center -m-1.5">

                    {teams.map((team, index) => (
                        <button
                            key={index}
                            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index ? 'bg-gray-800 text-white shadow-gray-950/10' : 'bg-white hover:bg-gray-100 text-gray-800'}`}
                            onClick={() => {
                                setActive(index);
                                setAutorotate(false);
                            }}
                        >
                            <span>{team.name}</span> <span
                            className={`${active === index ? 'text-gray-200' : 'text-gray-300'}`}>-</span>
                            <span>{team.role}</span>
                        </button>
                    ))}

                </div>
            </div>
        </div>
    )
}
