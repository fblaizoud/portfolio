import Particles from "particlesjs";
import React, { useEffect } from "react";

const BackgroundParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      color: ["#03dac6", "#ff0266", "#000000"],
      connectParticles: true,
      speed: 1,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: ["#faebd7", "#03dac6", "#ff0266"],
            maxParticles: 200,
            connectParticles: false,
          },
        },
      ],
    });
  }, []);

  return <canvas className="background" />;
};

export default BackgroundParticles;
