import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function(){
 
  try{
    const id = window.location.hash.slice(1);
    console.log(id);
    
    if (!id) return;
    recipeView.renderSpinner();
    
    // Loading Recipe
    await model.loadRecipe(id);
    
    // Rendering Recipe

    recipeView.render(model.state.recipe);

  } catch(err){
    alert(err);
  }
};
// const arr = ['hashchange', 'load'];
['hashchange', 'load'].forEach(element => window.addEventListener(element, controlRecipes));
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
