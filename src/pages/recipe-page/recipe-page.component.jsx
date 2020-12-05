import React, {Component} from 'react';

import http from "../../services/http.service";
import Loading from "../../Loading";

import './recipe-page.styles.scss';

class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                id: null,
                name: "",
                description: "",
                author: "",
                prepTime: null,
                cookTime: null,
                portions: null,
                instructions: "",
                iconSrc: "",
                imageSrc: "",
                recipeHasIngredientsById: []
            },
            //ingredients: []
            loading: undefined,
            done: undefined,
        }
    }

    componentDidMount() {
        this.getRecipe(this.props.match.params.id);
    }

    getRecipe(id) {
        this.setState({loading: undefined});
        this.setState({done: undefined});

        http
            .get("/recipes/" + id)
            .then((response) => {
                this.setState({
                    recipe: response.data
                });
                // this.setState({
                //     ingredients: response.data.recipeHasIngredientsById  //only if we feel like we need it later
                // })
                console.log(response.data);
            })
            .then(data => {
                this.setState({loading: true});
                setTimeout(() => {
                    this.setState({done: true});
                },500)
            })
            .catch((e) => {
                console.log(e);
            })
    }


    render() {
        const { recipe, done, loading } = this.state;

        return (
            <div className='recipe-page'>
                {!done?
                    (<Loading loading={loading} />)
                    :
                    (<div>
                        <div
                            className='banner'
                            style={{
                                backgroundImage: `url(${recipe.imageSrc})`
                            }}
                        />
                        <div className='title'>
                    <span className='recipe-name'>
                        {recipe.name}
                    </span>

                            <span className='recipe-description'>
                        {recipe.description}
                    </span>
                        </div>

                        <div className='ingredients'>
                            <div className='ingredients-header'>
                                Ingredients
                            </div>

                            <div className='ingredients-item'>
                                {recipe.recipeHasIngredientsById.map((ingredientById) => (
                                    <div key={ingredientById.id}>
                                        <span>{ingredientById.unitSize} </span>

                                        {ingredientById.ingredientsByIngredientId.measurementUnitByMeasurementUnitId.type === "ammount" ?
                                            ' ' : <span>{ingredientById.ingredientsByIngredientId.measurementUnitByMeasurementUnitId.type} </span>
                                        }

                                        <span>{ingredientById.ingredientsByIngredientId.name} </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='instructions'>
                            <div className='instructions-header'>
                                Instructions
                            </div>

                            <div className='instructions-item'>
                                {recipe.instructions}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default RecipePage;