import Hero from "@/components/sections/hero/hero";
import Featuredon from "@/components/sections/featuredon/featuredon";
import Gallery from "@/components/sections/gallery/gallery";
import Navbar from "@/components/sections/navbar/navbar";
import {Abel} from "next/dist/compiled/@next/font/dist/google";
import Aboutus from "@/components/sections/aboutus/aboutus";
export default function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Featuredon/>
            <Gallery/>
            <Aboutus/>
        </>
    )
}
