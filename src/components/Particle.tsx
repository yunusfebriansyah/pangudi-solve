
import React, { useState, useEffect, useMemo } from "react";
import { Particles } from "@tsparticles/react";
import { 
  type Container, 
  type ISourceOptions, 
  MoveDirection, 
  OutMode 
} from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const Particle = React.memo(() => 
{
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  }

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "stars",
      background: {
        color: {
          value: "#09090b",
        },
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          speed: 1,
        },
        number: { value: 100 },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  )

  return (
    <div>
      {init && (
        <div className="particle-background">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        </div>
      )}
    </div>
  )
})

export default Particle