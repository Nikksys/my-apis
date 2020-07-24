import React from 'react';
import './App.css';
import Fleche from './fleche.svg'
import Weather from './Weather'
import Chuck from './Chuck'
import Food from './Edamam'

function App() {
  
  document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    let menus = document.querySelectorAll("li a");
    let couleurs = ["#FF9200", "#FFAF45", "#FF772C", "#D27800", "#B39600"]
    
    menus.forEach((menu, index) => {
      let spanTitle = document.querySelector("h1 span");
      menu.addEventListener("mouseover", function(event) {
        spanTitle.style.color = couleurs[index];
        
        //replaced for css transition
        // setTimeout(function() {
        // spanTitle.style.color = couleurs[index];
        // }, 500);
      });    
    });  
  });
  
  // for one element
  // document.addEventListener("DOMContentLoaded", function() { 
  //   // this function runs when the DOM is ready, i.e. when the document has been parsed
  //   let menu1 = document.querySelector("li a:nth-child(1)");
  //   menu1.addEventListener("mouseover", function() {
  //     let spanTitle = document.querySelector("h1 span");
  //     spanTitle.style.color = "red";
  // 
  //     setTimeout(function() {
  //     spanTitle.style.color = "#FF9200";
  //     }, 100);    
  //   });
  // });
  
  return (
    <div className="App">
      <nav className="navbar flex-d">
        <h1>My <span className="title">API's</span> Selection</h1>
        <ul className="menu flex-d">
            <li><a href="#openWeather">API 1</a> <span>|</span></li>
            <li><a href="#theChuck">API 2</a> <span>|</span></li>
            <li><a href="#openfood">API 3</a> <span>|</span></li>
            <li><a href="#">API 4</a> <span>|</span></li>
            <li><a href="#">API 5</a> <span>|</span></li>
        </ul>  
      </nav>
      
      <div className="intro-text">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      
      <div className="section openweatherapi">
        <h3 id="openWeather" className="section-title">API I: OPEN WEATHER</h3>
        <p> <i>"Hey did you see the weather today?..."</i> This is the most commun sentence as an excuse to introduce ourself, and start a conversation. So what better API to introduce my selection.</p>
        <p><a href="https://openweathermap.org/" target="_blank">https://openweathermap.org/</a></p>
        <img className="la-fleche" src={Fleche} alt="fleche"/>
        <div className="api-section openWeather">
          <Weather />
        </div>
      </div>
      
      
      <div className="section chucknorrisapi">
        <h3 id="theChuck" className="section-title">API II: CHUCK NORRIS</h3>
        <p>Hey ! Unlike my first API selection, this one is totally useless... Well, yeah! Chuck Norris doesn't need a API, HE is our API !</p>
        <p><a href="http://www.icndb.com/api/" target="_blank">http://www.icndb.com/api/</a></p>
        <img className="la-fleche" src={Fleche} alt="fleche"/>
        <div className="api-section">
          <Chuck />
        </div>
      </div>
      
      <div className="section openfoodapi">
        <h3 id="openfood" className="section-title">API III: EDAMAM</h3>
        <p> Um, I don't know you but, programming makes me hungry! Why not pick a recipe !!!</p>
        <p><a href="https://developer.edamam.com/" target="_blank">https://developer.edamam.com/</a></p>
        <img className="la-fleche" src={Fleche} alt="fleche"/>
        <div className="api-section edamamBgnd">
          <Food/>
        </div>
      </div>
    </div> // closing wraping jsx
  );
}

export default App;
