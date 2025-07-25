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
          number: { value: 120 },
          color: { value: ["#00f6ff", "#ff00c8", "#ffe600", "#00ff85", "#ff5e00", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 } },
          size: { value: { min: 1, max: 3.5 }, random: { enable: true, minimumValue: 1 } },
          move: { enable: true, speed: 0.6 },
        },
        manualParticles: [
          {
            position: { x: 10, y: 30 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%23ffe600'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%23bfa800' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce1" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 25, y: 60 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%2300f6ff'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%2300bfa8' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce2" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 40, y: 40 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%23ff00c8'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%23b800a8' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce3" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 55, y: 70 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%2300ff85'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%2300bfa8' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce4" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 70, y: 20 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%23ff5e00'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%23b84a00' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce5" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 85, y: 50 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%23ffffff'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%23cccccc' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce6" }
              },
              zIndex: { value: 1 }
            }
          },
          {
            position: { x: 95, y: 35 },
            options: {
              size: { value: 18 },
              shape: {
                type: "image",
                image: [
                  {
                    src: "data:image/svg+xml;utf8,<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='24' rx='12' ry='12' fill='%2300f6ff'/><ellipse cx='24' cy='24' rx='20' ry='6' fill='none' stroke='%2300bfa8' stroke-width='2'/></svg>",
                    width: 48,
                    height: 48
                  }
                ]
              },
              opacity: { value: 0.9 },
              move: {
                enable: true,
                speed: 0,
                path: { enable: true, generator: "fastBounce7" }
              },
              zIndex: { value: 1 }
            }
          }
        ],
        emitters: [
          {
            position: { x: 0, y: 100 },
            rate: { quantity: 1, delay: 2 },
            particles: {
              shape: { type: "rectangle" },
              size: { value: { width: 120, height: 4 } },
              color: { value: ["#fffbe6", "#ffe600"] },
              opacity: { value: 0.95 },
              move: {
                enable: true,
                speed: 40,
                direction: "top-right",
                straight: true,
                outModes: { default: "destroy" }
              },
              zIndex: { value: 2 }
            }
          },
          {
            position: { x: 0, y: 0 },
            rate: { quantity: 1, delay: 2 },
            particles: {
              shape: { type: "rectangle" },
              size: { value: { width: 120, height: 4 } },
              color: { value: ["#fffbe6", "#ffe600"] },
              opacity: { value: 0.95 },
              move: {
                enable: true,
                speed: 40,
                direction: "bottom-right",
                straight: true,
                outModes: { default: "destroy" }
              },
              zIndex: { value: 2 }
            }
          }
        ],
        background: { color: "#0d1117" },
        pathGenerators: {
          fastBounce1: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.01;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency)
              };
            }
          },
          fastBounce2: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.011;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 1)
              };
            }
          },
          fastBounce3: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.012;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 2)
              };
            }
          },
          fastBounce4: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.013;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 3)
              };
            }
          },
          fastBounce5: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.014;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 4)
              };
            }
          },
          fastBounce6: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.015;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 5)
              };
            }
          },
          fastBounce7: {
            generate: () => {
              const amplitude = 10;
              const frequency = 0.016;
              const now = Date.now();
              return {
                x: 0,
                y: amplitude * Math.sin(now * frequency + 6)
              };
            }
          }
        }
      }}
    />
  );
}
