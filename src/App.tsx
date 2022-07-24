import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
      <div className="App">
        <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
        <ReactFullpage
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000}
          sectionsColor = {['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']}
          navigation = {true}
          navigationPosition = {'right'}
          navigationTooltips = {['Home', 'About Me', 'Skills', 'Contact']}
          showActiveTooltip = {true}
          slidesNavigation = {true}
          slidesNavPosition = {'bottom'}
          lazyLoading = {true}
          fixedElements = {'#header, .footer'} 
        
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div id="header">Header</div>
                <div className="section">
                <p>Home Page</p>
                </div>
                <div className="section">
                <p>About Me</p>
                </div>
                <div className="section">
                  <p>Skills</p>
                </div>
                <div className="section">
                  <p>Contact</p>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        </div>
    );
}

export default App;
