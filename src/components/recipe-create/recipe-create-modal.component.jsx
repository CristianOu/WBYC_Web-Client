import React from 'react'
import './recipe-create-modal.styles.scss'
import CreateRecipe from './recipe-create.component.jsx'

export const CreateModal= ({show, close}) => {
    console.log("show: " + show + "close: " + close);
    return (
        <div className="modal-wrapper"
             style={{
                 transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: show ? '1' : '0'
             }}
        >
            <div onClick={close} className="close-modal-btn">x</div>
            <div className="modal-content">
                <div className="headline">Create a new recipe</div>
                <div className="headline-picture">
                    <img src={"https://cursuricalificaregratuite.ro/wp-content/uploads/2016/11/Ospatar-chelner-vanzator-in-unitati-de-alimentatie_small.jpg"}
                          alt="Food"
                />
                </div>
                <CreateRecipe/>
                <div className="modal-footer">
                    <button onClick={close} className="btn btn-cancel">Close</button>
                </div>
            </div>
        </div>
    )
}