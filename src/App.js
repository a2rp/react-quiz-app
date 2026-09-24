import "./App.css";
import Main from "./Main";

const links = [
  ["Portfolio", "https://www.ashishranjan.net/", "↗"], ["GitHub", "https://github.com/a2rp", "GH"], ["CodePen", "https://codepen.io/ash1198", "CP"], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", "in"], ["Facebook", "https://www.facebook.com/theash.ashish/", "f"], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", "▶"], ["Email", "mailto:ash.ranjan09@gmail.com", "@"], ["Support", "https://a2rp-donation-page.netlify.app/", "♥"], ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", "☕"], ["Patreon", "https://www.patreon.com/a2rp", "P"],
];

function App() {
  return (
    <div className="quizApp">
      <header className="siteHeader">
        <a className="brand" href="https://github.com/a2rp/react-quiz-app" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
          <span>Capital Quiz</span>
        </a>
        <span className="headerNote">Test your general knowledge</span>
      </header>
      <Main />
      <footer className="siteFooter">
        <p>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
        <nav aria-label="Links and support">{links.map(([label, href, icon]) => <a key={label} href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{icon}</a>)}</nav>
      </footer>
    </div>
  );
}

export default App;