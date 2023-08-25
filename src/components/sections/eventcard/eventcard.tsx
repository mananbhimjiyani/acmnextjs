import React, { useState, ReactNode } from "react";
import ReactDOM from "react-dom";
import {
    TiChevronLeftOutline,
    TiChevronRightOutline
} from "react-icons/ti";

const CARDS = 10;
const MAX_VISIBILITY = 3;

type CardProps = {
    title: string;
    content: string;
};

type CarouselProps = {
    children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, content }) => (
    <div className="card bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-3">{title}</h2>
        <p className="text-gray-500">{content}</p>
    </div>
);

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className="carousel relative w-96 h-96 perspective-3d transform-style-preserve-3d">
            {active > 0 && (
                <button className="nav left absolute top-1/2 transform -translate-x-full -translate-y-1/2 text-white text-5xl z-2 cursor-pointer select-none" onClick={() => setActive((i) => i - 1)}>
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className="card-container absolute w-full h-full transition-transform duration-300 ease-out"
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 3,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 3,
                        "--pointer-events": active === i ? "auto" : "none",
                        "opacity": Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                        "display": Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block"
                    } as React.CSSProperties}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className="nav right absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 text-white text-5xl z-2 cursor-pointer select-none" onClick={() => setActive((i) => i + 1)}>
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};

export default function EventCard() {
    return (
        <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 to-pink-400 font-montserrat">
            <Carousel>
                {[...new Array(CARDS)].map((_, i) => (
                    <Card
                        key={i}
                        title={"Card " + (i + 1)}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                ))}
            </Carousel>
        </div>
    )
}
