import './Projects.css';
import React from 'react';
import PeacokImage from '../assets/peacok.png';
import NewsWebsite from '../assets/e-news.png';
import DesktopImage from '../assets/desktop-program.png';
import PeacokE1Image from '../assets/peacok-e1.png';
import PeacokE2Image from '../assets/peacok-e2.png';
import PeacokE3Image from '../assets/peacok-e3.png';
import PeacokA1Image from '../assets/peacok-a1.png';
import PeacokA2Image from '../assets/peacok-a2.png';
import PeacokA3Image from '../assets/peacok-a3.png';

function Projects() {
  const [visible, setVisibality] = React.useState(false);

  function handleVisibality() {
    setVisibality(!visible);
    document.body.classList.toggle('no-scroll');
    console.log(visible);
  }
  return (
    <main id="projects">
      <h1>Best Projects</h1>
      <div className="projects-flexBox">
        <article className={`project1 project ${visible ? 'block' : 'hidden'}`}>
          <h2>
            Company Portfolio <br />
            (Front-end)
          </h2>
          <a href="https://aymanfarra2004.github.io/peacock_project/">
            Peacok Company Website
          </a>
          <img
            src={PeacokImage}
            alt="peacok image"
            onClick={handleVisibality}
          />
          <div
            className={`peacok-project-overview ${visible ? 'block' : 'hidden'}`}
          >
            <button className="close-btn" onClick={handleVisibality}>
              ✖
            </button>
            <div className='wrapper' onClick={handleVisibality}></div>
            <div className="peacok-english">
              <img className="peacok-e1" src={PeacokE1Image} />
              <img className="peacok-e2" src={PeacokE2Image} />
              <img className="peacok-e3" src={PeacokE3Image} />
            </div>
            <div className="peacok-arabic">
              <img className="peacok-a1" src={PeacokA1Image} />
              <img className="peacok-a2" src={PeacokA2Image} />
              <img className="peacok-a3" src={PeacokA3Image} />
            </div>
          </div>
        </article>
        <article className={`project2 project ${visible ? 'block' : 'hidden'}`}>
          <h2>
            e-news Website <br />
            (Full-Stack)
          </h2>
          <a href="https://github.com/AymanFarra2004/silmple_e-news_website">
            e-news Website
          </a>
          <img src={NewsWebsite} alt="News Website image" />
        </article>
        <article className={`project2 project ${visible ? 'block' : 'hidden'}`}>
          <h2>
            Data Base project with Java GUI <br />
            (Desktop Program)
          </h2>
          <a href="https://github.com/AymanFarra2004/db-simple-project">
            Desktop Program
          </a>
          <img src={DesktopImage} alt="News Website image" />
        </article>
      </div>
    </main>
  );
}

export default Projects;
