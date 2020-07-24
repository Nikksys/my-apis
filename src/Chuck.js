import React, {useState} from 'react'
import Norrispic from './Norris.png'
import './Chuck.css'


function Chuck (){
  
  const [citation, setCitation] = useState("")
  
  
  const getCitation = () => {
    fetch("https://api.icndb.com/jokes/random")
     .then(reponse => reponse.json())
     .then(data => {
       setCitation(data.value.joke)
     })
     
     let pSound = new Audio("/chuckPunch.mp3") 
     pSound.play()
  }
  
  
  window.onload = getCitation
  
  let newCitation = citation.replace(/&quot;/g, '"')
  
  
  return (
    <div className="norrisSection">
      <div className="norrisPicNString">
        <img className="Norrispic" src={Norrispic}/>
        <p><i>{"'" + newCitation + "'"}</i></p>
      </div>
      <div className="kickDiv"><button onClick={() => getCitation()}>punch the button</button></div>
    </div>
  )
}

export default Chuck