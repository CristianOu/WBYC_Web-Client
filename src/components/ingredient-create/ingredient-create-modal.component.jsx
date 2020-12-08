import React from 'react'
import './ingredient-create-modal.styles.scss'
import CreateIngredient from "./ingredient-create.component";

export const CreateModal= ({show, close}) => {
    return (
        <div className="modal-wrapper"
             style={{
                 transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: show ? '1' : '0',
                 zIndex: show ? '10' : '-2',
                 transition: show ? '.5s ease' : '.5s ease'
             }}
        >
            <div onClick={close} className="close-modal-btn">x</div>
            <div className="modal-content">
                <div className="headline">Create a new ingredient</div>
                {/*<div className="headline-picture">*/}
                {/*    <img src={"https://cursuricalificaregratuite.ro/wp-content/uploads/2016/11/Ospatar-chelner-vanzator-in-unitati-de-alimentatie_small.jpg"}*/}
                {/*         alt="Food"*/}
                {/*    />*/}
                {/*</div>*/}
                <CreateIngredient/>
                <div className="modal-footer">
                    <button onClick={close} className="btn btn-cancel">Close</button>
                </div>

            </div>
        </div>
    )
}