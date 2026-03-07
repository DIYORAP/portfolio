import { useMemo, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: true,
      background: {
        color: { value: 'transparent' },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },
        color: {
          value: [
            'rgba(255, 255, 255, 0.15)',
            'rgba(100, 100, 120, 0.2)',
            'rgba(80, 80, 100, 0.18)',
          ],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.25,
          random: true,
        },
        size: {
          value: { min: 2, max: 4 },
          random: true,
        },
        links: {
          enable: true,
          distance: 120,
          color: 'rgba(255, 255, 255, 0.12)',
          opacity: 0.25,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="particles-canvas"
    />
  );
};

export default ParticlesBackground;
