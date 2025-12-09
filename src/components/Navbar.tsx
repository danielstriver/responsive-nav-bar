import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <h1>
        <span>Daniel.</span>
      </h1>
      <ul className={isMenuOpen ? "show-menu" : "hide-menu"}>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
      <div className="btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
