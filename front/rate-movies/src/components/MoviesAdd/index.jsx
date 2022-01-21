import React, {useEffect, useState} from 'react';
import { TitleModal, FormAdd } from './style';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const baseURL = "http://localhost:3001"

function MoviesAdd(props) {
    const {register, handleSubmit} = useForm();
    const [movies, setMovies] =  useState([]);
    
    const onSubmit = movie => {
        
        axios.post(`${baseURL}/movies`, movie)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.error("Erro encontrado"+ err)
        })
        props.onRequestClose();
    }

    useEffect(() => {
        setMovies(movies)
    }, [movies])
    

    return(
        <>
            <TitleModal>
                Cadastrar Filme ou Série
            </TitleModal>

            <FormAdd onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} />
                <input {...register("year")}/> 
                <input {...register("time")} /> 

                <button type="submit">Cadastrar</button>
            </FormAdd>
        </>
    );
}

export default MoviesAdd;