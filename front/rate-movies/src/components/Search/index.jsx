import {Container} from './style'
import search from '../../assets/pesquisa.svg'

function Search(){
    return(
        <Container>
            <input type="text" className="search" placeholder="Pesquisa..." ></input>
            <img src={search} alt="Pesquisa" className="icon-search"/>
        </Container>
    );
}

export default Search;