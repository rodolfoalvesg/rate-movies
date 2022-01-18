import { useEffect, useState } from 'react';
import edit from '../../assets/editar.svg';
import del from '../../assets/excluir.svg';
import {Container} from './style'
import axios from 'axios';

const baseURL = "http://localhost:3001";


function ListTable(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        
            axios.get(`${baseURL}/movies`)
            .then((response)=>setMovies(response.data))
            .catch((err)=>{
                console.error("Erro encontrado " + err);
            });
    },[])

    return(
        <>

        {
            movies.map(movie => (
                <Container key={movie.movie_id}>
                    <td>{movie.movie_id}</td>
                    <td>{movie.movie_name}</td>
                    <td>{movie.movie_year}</td>
                    <td>{movie.movie_time}</td>
                    <td>20000</td>
                    <td>8.5</td>
                    <td><img src={edit} alt="editar" /></td>
                    <td><img src={del} alt="excluir" /></td>
                </Container>
                
            ))
        }
        
        
        </>
    );
}

export default ListTable