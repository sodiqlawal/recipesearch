import React, { Component } from 'react';
// import {ingredient} from './ingredient';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeDetailsApi:{},
            url: `https://www.food2fork.com/api/get?key=9bad5db5fb2576e805a4b46a7cfd9ff0&rId=${this.props.id}`
        }
    }


    
      async componentDidMount(){
        try{
            const recipe = await fetch(this.state.url);
            const recipeState = await recipe.json();
            this.setState({
                recipeDetailsApi: recipeState.recipe
            })
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
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <button type='button' className='btn btn-warning mb-5 text-capitalize'>
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
                                    // ingredients.map((item, index) =>{
                                    //     return (
                                    //         <li key={index} className='list-group-item text-slanted'>
                                    //             {item}
                                    //         </li>
                                    //     );
                                    // })
                                    console.log('ing', ingredients)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}