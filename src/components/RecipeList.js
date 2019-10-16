import React,{Component} from 'react';
import Recipe from './Recipe';



export default class RecipeList extends Component{
    render(){
        const { recipes, handleDetails } = this.props;
        return (
            <React.Fragment>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                            <h1 className='text-slanted'>recipe list</h1>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            recipes.map(recipe => {
                                return(
                                    <Recipe 
                                    handleDetails={handleDetails}
                                    key={recipe.recipe_id}
                                    recipe={recipe}
                                    />
                                )
                            })
                            // console.log('recipe', recipes)
                        }
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
