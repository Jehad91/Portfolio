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
import Logo from './Components/Logo';
import CV from './Components/CV';
import SocialLinks from './Components/SocialLinks';
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

  const pages = [<Home/>, <About/>, <Skills/>, <Works/>, <Contact/>];

  return (
    <>
      <Particles options={
        ((page === 'about') && particlesOptionsDark as ISourceOptions) ||
        ((page === 'skills') && particlesOptionsLight as ISourceOptions) ||
        ((page === 'works') && particlesOptionsAmoung as ISourceOptions) ||
        particlesOptionsDark as ISourceOptions} init={particlesInit}
      />
      <Logo />
      <CV color={((page === 'home') || (page === 'skills')) ? "#000" : "#fcf6f4"} />
      <SocialLinks  color={((page === 'skills')) ? "#000" : "#fcf6f4"}  />
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        scrollOverflow= {false}
        scrollBar= {false}
        anchors= {['home', 'about', 'skills', 'works', 'contact']}
        sectionsColor={['transparent', 'transparent', 'transparent', 'transparent', '#000']}
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
              {pages.map((page, index) => {
                return (
                  <div
                    key={index}
                    className="section"
                    style={{overflow: (page === <Works/>) ? "scroll" : "auto"}}
                  >
                    <Suspense fallback={<Loading/>}>
                      {page}
                    </Suspense>
                  </div>
                )
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
