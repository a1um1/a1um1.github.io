import { useEffect, useState } from "react";
import GitHubIcon from "../icons/github";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setIsAtTop(window.scrollY === 0);
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className={isAtTop ? "" : "small"}>
      <div className="container">
        <h1>a1um1_</h1>
        <a
          href="https://github.com/a1um1"
          target="_blank"
          rel="noopener noreferrer"
          className="button ghost icon"
        >
          <GitHubIcon />
          <span>Github</span>
        </a>
      </div>
    </nav>
  );
}
