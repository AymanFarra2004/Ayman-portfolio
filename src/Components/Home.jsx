import './Home.css';
import myImage from '../assets/my-image0.png';
import whiteShape from '../assets/black-shape.svg';
import React from 'react';
/* import { useEffect, useState } from 'react'; */


/* function Typewriter({ text, speed = 150 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1>
      {displayedText}
      
    </h1>
  );
}

function AnimatedGradientText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#ff6ec4", "#7873f5", "#42e695", "#fbc7d4", "#ffd700"]; // قائمة الألوان للتدرج

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // Color Animation
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1500); // يغير اللون كل 500ms
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <h1 style={{ color: colors[colorIndex], transition: "color 0.5s linear" }}>
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
} */

function Home() {
  return (
    <div id="home">
      <main>
        <div className="text">
          <h1>Welcome</h1>
          <p>Hi, I'm Ayman AlFarra, a Front-End Web Developer diving into
            Back-End. Welcome to my portfolio – explore my projects, skills, and
            what I can build for you!</p>
        </div>
        <div className="my-image">
          <img src={myImage} alt="my image" />
        </div>
        <div className="home-shape1">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="home-shape2">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="home-shape3">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="home-shape4">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="home-shape5">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="home-shape6">
          <img src={whiteShape} alt="white shape" />
        </div>
        <div className="shadow1"></div>
        <div className="shadow2"></div>
      </main>
    </div>
  );
}

export default Home;
