import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Edamam.css'


function Food (){
  const [recipe, setRecipe] = useState([])
  
  useEffect( () =>{
    getRecipe()
  }, [])
  
  
  const getRecipe = () => {
    axios.get(`https://api.edamam.com/search?q=chicken&app_id=${'5b3145f6'}&app_key=${'3d294bba29305aeaf21b4af859fb0004'}`)
     .then(reponse => setRecipe(reponse.data.hits))
    
  //   fetch(`https://api.edamam.com/search?q=chicken&app_id=${'5b3145f6'}&app_key=${'3d294bba29305aeaf21b4af859fb0004'}`)
  //    .then(res => res.json())
  //    .then(data => setRecipe(data.hits))
   }
  
  
  
  
  console.log(recipe)
  return (
    <div className="foodCell">
      <div className="SearchBar">
        <form>
          <input type="text" placeholder="Search a recipe"/>
          <button type="submit">Search</button>
        </form>
      </div>
      
      <div className="foodLeft">
        <h3>"Lorem ipsum dolor sit amet, consectetur"</h3>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>    
    </div>
  )
}

export default Food