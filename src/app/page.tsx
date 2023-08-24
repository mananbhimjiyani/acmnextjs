import Hero from "@/components/sections/hero/hero";
import Featuredon from "@/components/sections/featuredon/featuredon";
import Gallery from "@/components/sections/gallery/gallery";
import Navbar from "@/components/sections/navbar/navbar";
import {Abel} from "next/dist/compiled/@next/font/dist/google";
import Aboutus from "@/components/sections/aboutus/aboutus";
import TeamsSlider from "@/components/sections/team/team";
const team = [
    {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Manan Bhimjiyani',
        role: 'Web Development'
    },
    {
        img: TestimonialImg01,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Malvika Bhadoria',
        role: 'Web Development'
    },
    {
        img: TestimonialImg01,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Megha Beria',
        role: 'Web Development'
    },
    {
        img: TestimonialImg01,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Megha Beria',
        role: 'Web Development'
    }
]
export default function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Featuredon/>
            <Gallery/>
            <Aboutus/>
            <TeamsSlider teams={team}/>
        </>
    )
}
