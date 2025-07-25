import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";
import personComputerLottie from "../assets/person-computer-lottie.json";
import personLaptopTopLeft from "../assets/coding in office.json";

export default function AnimatedBackground() {
  const init = async (engine) => await loadFull(engine);

  return (
    <>
      {/* Animated SVG Blobs */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {/* Blue Blob Top Left */}
        <svg style={{ position: 'absolute', top: '-120px', left: '-120px', width: '420px', height: '420px', opacity: 0.32, filter: 'blur(12px)', transform: 'rotate(-8deg)' }} viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="210" cy="210" rx="180" ry="140" fill="#00ffe7">
            <animate attributeName="rx" values="180;200;180" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="140;160;140" dur="7s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="60s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        {/* Indigo Blob Bottom Right */}
        <svg style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '340px', height: '340px', opacity: 0.22, filter: 'blur(14px)', transform: 'rotate(12deg)' }} viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="170" cy="170" rx="120" ry="90" fill="#3b82f6">
            <animate attributeName="rx" values="120;140;120" dur="9s" repeatCount="indefinite" />
            <animate attributeName="ry" values="90;110;90" dur="8s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 170 170" to="360 170 170" dur="80s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        {/* Pink Blob Center Left */}
        <svg style={{ position: 'absolute', top: '40%', left: '6%', width: '200px', height: '200px', opacity: 0.16, filter: 'blur(10px)', transform: 'rotate(-18deg)' }} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="100" rx="70" ry="60" fill="#ff00c8">
            <animate attributeName="rx" values="70;90;70" dur="10s" repeatCount="indefinite" />
            <animate attributeName="ry" values="60;80;60" dur="11s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="90s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        {/* Orange Blob Top Right */}
        <svg style={{ position: 'absolute', top: '-60px', right: '-80px', width: '180px', height: '180px', opacity: 0.13, filter: 'blur(10px)', transform: 'rotate(22deg)' }} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="70" ry="60" fill="#ffb347">
            <animate attributeName="rx" values="70;90;70" dur="13s" repeatCount="indefinite" />
            <animate attributeName="ry" values="60;80;60" dur="12s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="100s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        {/* Green Blob Bottom Left */}
        <svg style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '160px', height: '160px', opacity: 0.11, filter: 'blur(8px)', transform: 'rotate(-14deg)' }} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="80" rx="60" ry="50" fill="#00ff85">
            <animate attributeName="rx" values="60;80;60" dur="12s" repeatCount="indefinite" />
            <animate attributeName="ry" values="50;70;50" dur="13s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="110s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      {/* Floating/Parallax Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}>
        {/* Floating Circle 1 */}
        <div className="floating-shape floating-shape-1" />
        {/* Floating Triangle */}
        <svg className="floating-shape floating-shape-2" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="24,4 44,44 4,44" fill="#00ffe7" opacity="0.18" />
        </svg>
        {/* Floating Circle 2 */}
        <div className="floating-shape floating-shape-3" />
        {/* Floating Square */}
        <div className="floating-shape floating-shape-4" />
      </div>
      {/* Animated Lottie Person at Computer */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '280px',
        maxWidth: '50vw',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
      }}>
        <Lottie animationData={personComputerLottie} loop={true} autoPlay={true} />
      </div>
      {/* Animated Lottie Person at Laptop (Top Left) */}
      <div style={{
        position: 'fixed',
        top: '150px',
        left: '-40px',
        width: '520px',
        maxWidth: '80vw',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
      }}>
        <Lottie animationData={personLaptopTopLeft} loop={true} autoPlay={true} />
      </div>
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
    </>
  );
}
