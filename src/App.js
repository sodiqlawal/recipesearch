import React from 'react';
// import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'
import './App.css';

// const url = "https://www.food2fork.com/api/search?key=9bad5db5fb2576e805a4b46a7cfd9ff0";
  

class App extends React.Component{
  constructor(){
    super();
    this.state={
    recipes: [],
    details_id: 35382
  }
}

  // async getRecipes() {
  //   try{
  //   const recipe = await fetch(url);
  //   const recipeState = await recipe.json();
  //   // console.log(recipeState)
  //   this.setState({
  //     recipes: recipeState.recipes
  //   })
  // }catch (error){
  //   console.log(error)
  // }

  // }

  // componentDidMount(){
  //   this.getRecipes();
  // }

  render(){
  console.log(this.state.recipes)
  return (
    <React.Fragment>
      {/* <RecipeList recipes={this.state.recipes} /> */}
      <RecipeDetails id={this.state.details_id} />
    </React.Fragment>
  );
}
}

export default App;
