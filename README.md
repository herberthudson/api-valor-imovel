# API valor do Imovel

Esta é uma api simples que ao passar o valor a quantidade de metros do imovel, retornará o valor do imovel. Foi desenvolvida utilizando a forma básica e parcial do MVC, onde temos um serviço para consular os dados em uma api externa e um controller para retornar a requisições, um middleware para realizar a validação dos dados passados por request e as rotas para direcionar as solicitações.

Esta api utiliza o expressjs como framework para auxiliar no tratamento das requisições, e a biblioteca [axios](https://github.com/axios/axios) para consultar uma segunda API, e retornando os dados para validação, calculo e retorno dos dados. Utiliza-se também a biblioteca [chai](https://www.chaijs.com/) para realização dos testes.

Ela possui configuração com o CI do Github para validação da integridade do código a cada pull request, e configurado no Heroku para realizar o deploy a cada push na branch main neste repositório do Github.

## Instalação e execução local

Após realizar o clone local da api, é necessário ter o [docker](https://www.docker.com/) e [docker-compose](https://docs.docker.com/compose/install/) instalados para execução limpa, ou pode-se instalar os pacotes usando o `yarn` ou `npm i`.

Ao instalar os requisitos, pode-se testar localmente com `docker-compose up` ou `npm run dev`.

Os testes podem ser rodados utilizando o `npm run test`

## Documentação

A API já consta com o Swagger integrado com o expressjs, para visualizar é necessário acessar a rota `/api-docs`

A API também pode ser consultada online no endereço `https://api-valor-imovel.herokuapp.com/`
