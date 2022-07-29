import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptionsDark from "./Config/particles-dark.json";
import particlesOptionsLight from "./Config/particles-light.json";
import { ISourceOptions } from "tsparticles-engine";
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import './App.css';


const App = () => {
  const [page, setPage] = useState<String | Number>('');

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles options={page === 'about' ? particlesOptionsDark as ISourceOptions : particlesOptionsLight as ISourceOptions} init={particlesInit} />
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        anchors= {['home', 'about', 'skills', 'works', 'contact']}
        sectionsColor = {['transparent', 'transparent', 'transparent', '#000']}
        navigation = {true}
        navigationPosition = {'right'}
        navigationTooltips = {['Home', 'About', 'Skills', 'Works', 'Contact']}
        showActiveTooltip = {true}
        slidesNavigation = {true}
        slidesNavPosition = {'bottom'}
        lazyLoading = {true}
        afterLoad= {function(origin:Item, destination:Item, direction:string){
          setPage(destination.anchor);
        }}
        
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section skill-section">
                <Skills />
              </div>
              <div className="section" style={{overflow: "scroll"}}>
                <Works />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
