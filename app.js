import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />
const showBackground = false;
const images = [];
for (const animal in animals) {
  images.push(<img key= {animal} className= 'animal' alt= {animal} src= {animals[animal].image} aria-label= {animal} role= 'button' onClick={displayFact} />)
}

const title = "";
const animalFacts = (
  <div>
   <h1> {title === "" ? 'Click an animal for a fun fact' : title}</h1>
   {showBackground && background}
   <div className ="animals">
   {images}
   </div>
   <p id="fact"></p>
   </div>
);

function displayFact(e) {
  const randomIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  document.getElementById("fact").innerHTML = animals[e.target.alt].facts[randomIndex];
}
ReactDOM.render(animalFacts, document.getElementById('root'));