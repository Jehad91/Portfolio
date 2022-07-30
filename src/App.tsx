import React, { useCallback, useState, Suspense, lazy } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptionsDark from "./Config/particles-dark.json";
import particlesOptionsLight from "./Config/particles-light.json";
import particlesOptionsAmoung from "./Config/particles-amoung.json";
import { ISourceOptions } from "tsparticles-engine";
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import Loading from './Components/Loading';
import './App.css';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Skills = lazy(() => import('./Pages/Skills'));
const Works = lazy(() => import('./Pages/Works'));
const Contact = lazy(() => import('./Pages/Contact'));

const App = () => {
  const [page, setPage] = useState<String | Number>('');

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles options={
        ((page === 'about') && particlesOptionsDark as ISourceOptions) ||
        ((page === 'skills') && particlesOptionsLight as ISourceOptions) ||
        ((page === 'works') && particlesOptionsAmoung as ISourceOptions) ||
        particlesOptionsDark as ISourceOptions} init={particlesInit}
      />
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        anchors= {['home', 'about', 'skills', 'works', 'contact']}
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
                <Suspense fallback={<Loading/>}>
                  <Home />
                </Suspense>
              </div>
              <div className="section">
                <Suspense fallback={<Loading/>}>
                  <About />
                </Suspense>
              </div>
              <div className="section skill-section">
                <Suspense fallback={<Loading/>}>
                  <Skills />
                </Suspense>
              </div>
              <div className="section" style={{overflow: "scroll"}}>
                <Suspense fallback={<Loading/>}>
                  <Works />
                </Suspense>
              </div>
              <div className="section">
                <Suspense fallback={<Loading/>}>
                  <Contact />
                </Suspense>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
