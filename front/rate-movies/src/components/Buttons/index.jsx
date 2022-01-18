import {ButtonStyleAddMovie} from './style'
import React from 'react'

export const ButtonAddMovie = function(props){   
    return(
        <ButtonStyleAddMovie onClick={props.isOpen}>
            +
        </ButtonStyleAddMovie>
    );
}