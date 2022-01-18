import {Container, TableStyle} from './style'
import ListTable from '../ListTable/'

function Table() {
    return(
    <Container>
        <TableStyle>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Filme</th>
                    <th>Ano</th>
                    <th>Duração/Min</th>
                    <th>Avaliações</th>
                    <th>Média</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>

            <tbody>
                <ListTable />
            </tbody>
        </TableStyle>
    </Container>
    );
}

export default Table;