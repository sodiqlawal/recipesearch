import React, { Component } from 'react';
import {ingredient} from './ingredient';

export default class RecipeDetails extends Component {

    state={
        recipeDetailsApi: ingredient
    }

      async componentDidMount(){
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=9b2087bc58d51bd553cbc14a6d22f413&rId=${id}`
        try{
            const recipe = await fetch(url);
            const recipeState = await recipe.json();
            this.setState((state, props)=>{
                return {recipeDetailsApi: recipeState.recipe}
            }, () =>{});
          }catch (error){
            console.log(error)
          }
      }

    // componentDidMount(){
    //     fetch(this.state.url).then(recipe => recipe.json())
    //     .then((users) => {
    //         this.setState({ recipeDetailsApi: users.recipe })
    //     }).catch(error =>{
    //         console.log(error)
    //     })

    // }

    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipeDetailsApi;
        const { handleIndex } = this.props;
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <button type='button' 
                            className='btn btn-warning mb-5 text-capitalize'
                            onClick={()=>handleIndex(0)}>
                                back to recipe list
                            </button>
                            <img src={image_url} className='d-block w-100' alt='recipe' />
                        </div>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <h6 className='text-uppercase'>{title}</h6>
                            <h6 className='text-warning text-capitalize text-slanted'>provided by {publisher}</h6>
                            <a href={publisher_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary mt-2 text-capitalize'
                            >
                               publisher webpage 
                            </a>
                            <a href={source_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-success mt-2 mx-3 text-capitalize'
                            >
                               recipe url 
                            </a> 
                            <ul className='list-group mt-4'>
                                <h2 className="mt-3 mb-4">Ingredients</h2>                             
                                {
                                    ingredients.map((item, index) =>{
                                        return (
                                            <li key={index} className='list-group-item text-slanted'>
                                                {item}
                                            </li>
                                        );
                                    })
                                    // console.log('ing', ingredients)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}