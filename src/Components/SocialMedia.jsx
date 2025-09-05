import GithubLogo from '../assets/github.svg';
import LinkedinLogo from '../assets/linkedin-logo.svg';
import KhmsatLogo from '../assets/khamsat-logo.svg';
import UpworkLogo from '../assets/upwork-logo.svg';
import FreelancerLogo from '../assets/freelancer-logo.svg';
import './SocialMedia.css';

function SocialMedia() {
  return (
    <section id="social-media">
      <a
        href="https://github.com/AymanFarra2004"
        className="github"
        target="_blank"
      >
        Github:
        <img src={GithubLogo} alt="gitHub logo" />
      </a>
      <a
        href="www.linkedin.com/in/aymanalfarra2004"
        className="linkedin"
        target="_blank"
      >
        Linkedin:
        <img src={LinkedinLogo} alt="linkedin logo" />
      </a>
      <a
        href="https://khamsat.com/user/ayman_alfarra"
        className="khamsat"
        target="_blank"
      >
        Khamsat:
        <img src={KhmsatLogo} alt="Khamsat logo" />
      </a>
      <a
        href="https://www.freelancer.com/u/AymanAlFarra"
        className="upwork"
        target="_blank"
      >
        Upwork:
        <img src={UpworkLogo} alt="upwork logo" />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~0106e4c314902565aa?mp_source=share"
        className="freelancer"
        target="_blank"
      >
        Freelancer:
        <img src={FreelancerLogo} alt="freelancer logo" />
      </a>
    </section>
  );
}

export default SocialMedia;
