import { Link } from 'react-scroll';
import Image from "next/image";

export default function Navbar() {
    const navHeight = 80;
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black bg-opacity-75">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a className="text-white text-2xl font-bold hover:text-white hover:cursor-pointer">
                    <Image src={"https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png"} alt={"Logo"} width={"80"} height={"80"} />
                </a>
                <div className="space-x-4">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        Home
                    </Link>
                    <Link
                        to="featuredon"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        Featured
                    </Link>
                    <Link
                        to="gallery"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="aboutus"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        About Us
                    </Link>
                    <Link
                        to="team"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        Team
                    </Link>
                    <Link
                        to="contactus"
                        smooth={true}
                        duration={500}
                        className="text-white hover:cursor-pointer"
                        offset={-navHeight}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
