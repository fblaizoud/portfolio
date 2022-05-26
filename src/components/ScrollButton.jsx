import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll-button">
      <a
        href="#home"
        style={scrollPosition > 20 ? { display: "block" } : { display: "none" }}
      >
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
};

export default ScrollButton;
