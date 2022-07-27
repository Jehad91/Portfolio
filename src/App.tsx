import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import './App.css';

const App = () => {
  return (
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        // sectionsColor = {['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']}
        navigation = {true}
        navigationPosition = {'right'}
        navigationTooltips = {['Home', 'About Me', 'Skills', 'Contact']}
        showActiveTooltip = {true}
        slidesNavigation = {true}
        slidesNavPosition = {'bottom'}
        lazyLoading = {true}
      
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Skills />
              </div>
              <div className="section">
                <Works />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
  );
}

export default App;
