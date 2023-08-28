"use client"
import React, { useState, ReactNode, Children } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import './styles.scss';

const CARDS = 10;
const MAX_VISIBILITY = 3;

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

export default function Eventscards() {
  return (
    <div className={" h-screen flex items-center justify-center"}>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card key={i} title={'Event ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        ))}
      </Carousel>
    </div>
  );
}
