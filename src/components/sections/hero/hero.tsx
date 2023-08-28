"use client"
import styles from './Hero.module.css';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function Hero() {
    return (
        <>
            <div className={`hero ${styles.hero} h-screen flex items-center justify-center`}>
                <div>
                    <h1 className={"lg:text-7xl font-semibold sm:text-5xl md:text-5xl"} style={{color: "#414141"}}>
                    <Typewriter
                        words={['ACM','SIT']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={1000}
                    />
                    </h1>
                </div>
            </div>
        </>
    )
}
