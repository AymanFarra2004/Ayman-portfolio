import './About.css';
import Devider from '../assets/home-about devider.svg';
import JavaLogo from '../assets/java-logo.svg';
import PythonLogo from '../assets/python-logo.svg';
import JsLogo from '../assets/js-logo.svg';
import PHPLogo from '../assets/php-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import HtmlLogo from '../assets/html-5-logo.svg';
import CSSLogo from '../assets/css-3-logo.svg';
import MySqlLogo from '../assets/mysql-logo.svg';
import OracleSqlLogo from '../assets/oracle-sql-logo.svg';
import OSLogo from '../assets/computer.svg';
import Automata from '../assets/game-of-life.svg';
import CA from '../assets/information-architecture.svg';
import GitLogo from '../assets/git-logo.svg';
import GitHubLogo from '../assets/github.svg';
import VSCodeLogo from '../assets/vs-code.svg';

function About() {
  return (
    <main id="about">
      {/* <img className='devider' src={Devider} /> */}
      {/* <div className='devider'></div> */}
      <article className="text">
        <h1>
          Hi, I'm Ayman, a 21-year-old Computer Engineering student in my fourth
          year
        </h1>
        <h2>
          I’m passionate about technology and love turning ideas into real
          projects. My goal is to grow as a <br />
          Full-Stack Developer and build applications that make a real
          difference
        </h2>
      </article>

      <article className="tech-stack">
        <h1>My Tech Stack</h1>
        <div className="cards">
          <div className="programming-languages">
            <h2>Programming Languages</h2>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
            <div className="icons">
              <img src={JavaLogo} alt="Java Logo" className="java-logo icon" />
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="python-logo icon"
              />
              <img
                src={JsLogo}
                alt="JavaScript Logo"
                className="js-logo icon"
              />
              <img src={PHPLogo} alt="php Logo" className="php-logo icon" />
            </div>
          </div>
          <div className="frameWorks">
            <h2>Web Development / Frameworks</h2>
            <ul>
              <li>React</li>
              <li>Html&CSS</li>
            </ul>
            <div className="icons">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="react-logo icon"
              />
              <img src={HtmlLogo} alt="Html Logo" className="html-logo icon" />
              <img src={CSSLogo} alt="CSS Logo" className="css-logo icon" />
            </div>
          </div>
          <div className="back-end">
            <h2>Databases / Backend</h2>
            <ul>
              <li>MySql</li>
              <li>Oracle Sql</li>
              <li>PHP backend development</li>
            </ul>
            <div className="icons">
              <img
                src={MySqlLogo}
                alt="MySql Logo"
                className="mysql-logo icon"
              />
              <img
                src={OracleSqlLogo}
                alt="oracleSql Logo"
                className="oraclesql-logo icon"
              />
              <img src={PHPLogo} alt="php Logo" className="php-logo icon" />
            </div>
          </div>
          <div className="fundamentals">
            <h2>Computer Science Fundamentals</h2>
            <ul>
              <li>Operating Systems</li>
              <li>Automata</li>
              <li>Computer Architecture</li>
              <li>Algorithms & Data Structures</li>
            </ul>
            <div className="icons">
              <img src={OSLogo} alt="os Logo" className="os-logo icon" />
              <img
                src={Automata}
                alt="Automata icon"
                className="automata-icon icon"
              />
              <img
                src={CA}
                alt="Computer Architecture icon"
                className="ca-icon icon"
              />
            </div>
          </div>
          <div className="tools">
            <h2>
              Tools & <br />
              Other Skills
            </h2>
            <ul>
              <li>Git / GitHub</li>
              <li>VS Code</li>
            </ul>
            <div className="icons">
              <img src={GitLogo} alt="git Logo" className="git-logo icon" />
              <img
                src={GitHubLogo}
                alt="github Logo"
                className="github-logo icon"
              />
              <img
                src={VSCodeLogo}
                alt="vs code Logo"
                className="vsCode-logo icon"
              />
            </div>
          </div>
        </div>
      </article>
      <div className="shadow1"></div>
      <div className="shadow2"></div>
    </main>
  );
}

export default About;
