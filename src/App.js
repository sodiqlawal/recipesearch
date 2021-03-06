import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'
import RecipeSearch from './components/RecipeSearch';

import './App.css';
  

class App extends React.Component{
  constructor(){
    super();
    this.state={
    url:'https://www.food2fork.com/api/search?key=9b2087bc58d51bd553cbc14a6d22f413',
    recipes: [],
    details_id: 35382,
    pageIndex: 0,
    search: '',
    base_url: 'https://www.food2fork.com/api/search?key=9b2087bc58d51bd553cbc14a6d22f413',
    query: '&q=',
    error:''
  }
}

  async getRecipes() {
    try{
    const recipe = await fetch(this.state.url);
    const recipeState = await recipe.json();
    if(recipeState.recipes.length === 0){
      this.setState(()=>{
        return {error:'sorry, but your search did not return any results'}
      })
    }else{
      this.setState(()=>{
        return {recipes: recipeState.recipes}
      })
    }

    // this.setState({
    //   recipes: recipeState.recipes
    // })
  }catch (error){
    console.log('their is error fectching the api')
  }
  }


  handleChange=e=>{
    this.setState({
      search: e.target.value
    },()=>{console.log(this.state.search)})
  }

  handleSubmit=e=>{
    e.preventDefault();
    const {base_url,query,search} = this.state;
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,search:""}
    },()=>{
      this.getRecipes();  
    })
  }

  componentDidMount(){
    this.getRecipes();
    // console.log(this.state.recipes)

  }
  displayPage=(index)=>{
    switch(index){
      default:
      case 0:
      return (
        <div>
      <RecipeSearch handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit}
      value={this.state.search}/>
      <RecipeList handleDetails={this.handleDetails} 
      error={this.state.error}
      recipes={this.state.recipes} />
      </div>)
      case 1:
      return (<RecipeDetails handleIndex={this.handleIndex} id={this.state.details_id} />
        )
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  render(){
  const {pageIndex} = this.state
  return (
    <React.Fragment>
      {this.displayPage(pageIndex)}
    </React.Fragment>
  );
}
}

export default App;
