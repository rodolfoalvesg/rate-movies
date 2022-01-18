# Desafio Técnico

##  Tecnologias e Recursos utilizados
 - Front: ReactJS (Em construção) (Styled-components, Axios ...)
 - Prototipação: <a href="https://www.figma.com/proto/aRCr5Vn07LsCH1Inhebhd9/Prot%C3%B3tipo-Desafio?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2&node-id=1%3A2" target="blank">Ver Protótipo </a>
 - Back: NodeJs
 - Banco de dados: Mysql Workbench 
 - Teste das rotas: Postman


### Endpoints de: `movies/`
- O endpoint `GET /movies` exibe todos os filmes que estão registrado no banco:

```json
[
    {
        "movie_id": 1,
        "movie_name": "Homem de Ferro",
        "movie_year": 2018,
        "movie_time": 180,
        "movie_update": "2022-01-14T19:08:13.000Z",
        "movie_delete": 0
    },
    {
        "movie_id": 2,
        "movie_name": "Homem Aranha",
        "movie_year": 2022,
        "movie_time": 190,
        "movie_update": "2022-01-14T23:20:17.000Z",
        "movie_delete": 0
    },
]
```
- O endpoint `GET /movies/:id` exibe o filme identificado pelo id e registrado no banco:

```json
[
    {
        "movie_id": 3,
        "movie_name": "Dexter",
        "movie_year": 2005,
        "movie_time": 2000,
        "movie_update": "2022-01-14T19:37:08.000Z",
        "movie_delete": 0
    }
]
```
- O endpoint `POST /movies` insere no banco de dados o filme desejado:

```json

{
        "movie_name": "Atividade Paranormal 1"
        "movie_year": 2010
        "movie_time": 110
}

```

- O endpoint `PUT /movies/:id` faz a atualização no banco de dados do filme desejado:
``` json
{
        "movie_name": "Atividade Paranormal 2"
        "movie_year": 2010
        "movie_time": 120
}
```

- O endpoint `DELETE /movies/:id` exclui de forma persistente um valor do banco de dados:
``` json
{
        "movie_name": "Atividade Paranormal 2"
        "movie_year": 2010
        "movie_time": 120
}
```

- O endpoint `GET /evaluated` Lista todos os filmes avaliados por determinado usuário.
``` json
[
    {
        "userID": 3,
        "Nome do Filme": "Pânico 5",
        "Ano": 2022,
        "Duração": 170,
        "Nota": 10
    }
]
```

- O endpoint `GET /notevaluated` Lista todos os filmes não avaliados por determinado usuário.
``` json
[
    {
        "movie_id": 13,
        "movie_name": "Pânico na Floresta",
        "movie_year": 2015,
        "movie_time": 90,
        "movie_update": "2022-01-15T12:28:35.000Z",
        "movie_delete": 0
    },
    {
        "movie_id": 14,
        "movie_name": "Pânico no Lago",
        "movie_year": 2012,
        "movie_time": 90,
        "movie_update": "2022-01-15T12:54:27.000Z",
        "movie_delete": 0
    }
]
```
