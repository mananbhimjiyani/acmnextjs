"use client"
import React, {useState, ReactNode, Children, useEffect} from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import './styles.scss';
import Image from 'next/image';
import jsonData from './eventData.json';
import {Button} from "@mui/material-next";
import { useRouter } from 'next/navigation'

const MAX_VISIBILITY = 3;

interface CardProps {
    id?: number;
    src: string;
    alt: string;
    height: number;
    width: number;
    title: string;
    content: string;
    url: string;
    registration: string;
}
const Card: React.FC<CardProps> = ({ id,src, alt, height, width, title, content ,url,registration}) => {
    const router = useRouter();
    const handleClick = () => {
       router.push(url);
    };
    return (
        <div className='card'>
            <Image src={src} alt={alt} height={height} width={width} />
            <h2>{title}</h2>
            <p>{content}</p>
            {registration==="True" &&(<Button
                color="primary"
                disabled={false}
                size="small"
                variant="outlined"
                onClick={handleClick}
            >Register Here</Button>)}
            {registration==="False" &&(<Button
                color="primary"
                disabled={true}
                size="small"
                variant="outlined"
                onClick={handleClick}
            >Register Here</Button>)}
        </div>
    );
};
interface CarouselProps {
    children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({children}) => {
    const [active, setActive] = useState(2);
    const count = Children.count(children);

    return (
        <div className='carousel'>
            {active > 0 && (
                <button className='nav left' onClick={() => setActive(i => i - 1)}>
                    <TiChevronLeftOutline/>
                </button>
            )}
            {Children.map(children, (child, i) => (
                <div
                    className='card-container'
                    style={{
                        ...{
                            '--active': (i === active ? 1 : 0),
                            '--offset': ((active - i) / 3),
                            '--direction': (Math.sign(active - i)),
                            '--abs-offset': (Math.abs(active - i) / 3),
                        } as React.CSSProperties,
                        'pointerEvents': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}
                    key={i}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className='nav right' onClick={() => setActive(i => i + 1)}>
                    <TiChevronRightOutline/>
                </button>
            )}
        </div>
    );
};

export default function Eventscards() {
    const [cardsData, setCardsData] = useState<CardProps[]>([]);

    useEffect(() => {
        // Set your JSON data to the state
        setCardsData(jsonData);
    }, []);

    return (
        <div className={"flex flex-col items-center justify-center relative h-screen"}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-sub-heading mb-4">
                Events Registration
            </h1>
            <Carousel>
                {cardsData.map((card, i) => (
                    <Card
                        key={card.id}
                        src={card.src}
                        alt={card.alt}
                        height={card.height}
                        width={card.width}
                        title={card.title}
                        content={card.content}
                        url={card.url}
                        registration={card.registration}
                    />
                ))}
            </Carousel>
        </div>
    );
}
