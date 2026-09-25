import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaCodepen,
  FaCoffee,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaHeart,
  FaLinkedin,
  FaPatreon,
  FaYoutube,
} from "react-icons/fa";
import "./App.css";
import Main from "./Main";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

function App() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowGoTop(window.scrollY > 420);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="quizApp">
      <header className="siteHeader">
        <a className="brand" href="https://github.com/a2rp/react-quiz-app" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
          <span>Capital Quiz</span>
        </a>
        <span className="headerNote">Test your general knowledge</span>
      </header>
      <Main />
      <footer className="siteFooter">
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
        <nav aria-label="Links and support">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </footer>
      {showGoTop && <button className="goTopButton" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FaArrowUp /></button>}
    </div>
  );
}

export default App;