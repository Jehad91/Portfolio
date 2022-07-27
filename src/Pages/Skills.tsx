import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";

const Skills = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
      <h1>Skills</h1>
    </div>
  )
}

export default Skills;