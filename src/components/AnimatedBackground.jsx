import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  const init = async (engine) => await loadFull(engine);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 250 },
          color: { value: "#00f6ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 1.6 },
          move: { enable: true, speed: 0.5 },
        },
        background: { color: "#0d1117" }
      }}
    />
  );
}
