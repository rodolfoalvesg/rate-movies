import React, {useState, useEffect} from 'react';
import { TitleModal, FormAdd } from './style';
import axios from 'axios';

const baseURL = "http://localhost:3001";

function MoviesAdd() {
    const [movie, setMovie] = useState([])
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [time, setTime] = useState(0)

    useEffect(()=>{
        axios.post(`${baseURL}/movies`, {
            name: name,
            year: year,
            time: time
        })
        .then((response => {
            setMovie(response.data)
        }))
        .catch((err) => {
            console.error("Erro encontrado" + err)
        })
    }, [])

    return(
        <>
            <TitleModal>
                Cadastrar Filme ou Série
            </TitleModal>

            <FormAdd action="">
                <input type="text" name="name" onChange={e => e.target.name}/> 
                <input type="text" name="year" onChange={e => e.target.year}/> 
                <input type="number" name="time" onChange={e => e.target.time}/> 

                <button type="submit">Cadastrar</button>
            </FormAdd>
        </>
    );
}

export default MoviesAdd;