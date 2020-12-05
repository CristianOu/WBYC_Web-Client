import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Ingredientlist from "./components/ingredient-list/ingredient-list.component";
import CreateRecipe from "./components/recipe-create/recipe-create.component";

import RecipesPage from "./pages/recipes-page/recipes-page.component";
import RecipePage from "./pages/recipe-page/recipe-page.component";
import Header from "./components/header/header.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    render() {
        console.log(process.env.REACT_APP_NAME);
        console.log(process.env.REACT_APP_API_URL);
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={"/ingredients"} component={Ingredientlist} />
                    <Route exact path={"/recipes"} component={RecipesPage} />
                    <Route path={"/recipes/:id"} component={RecipePage} />
                    <Route path={"/recipes/create"} component={CreateRecipe}/>
                </Switch>
            </div>
        );
    }
}

export default App;
