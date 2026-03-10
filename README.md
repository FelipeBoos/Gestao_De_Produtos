Gestão de Produtos

Sistema de gestão de produtos e categorias desenvolvido com Spring Boot no backend e Angular no frontend.

A aplicação permite o gerenciamento completo de produtos e categorias através de uma API REST integrada a uma interface web SPA.

O projeto foi estruturado como um monorepo, contendo backend e frontend no mesmo repositório, permitindo versionar toda a aplicação fullstack em um único projeto.

Estrutura do Projeto
gestao-de-produtos
│
├── backend/                      # API REST em Spring Boot
│   ├── src/main/java/com/felipeboos/gestao_produtos
│   │
│   ├── controller/               # Endpoints REST
│   ├── service/                  # Regras de negócio
│   ├── repository/               # Acesso a dados (Spring Data JPA)
│   ├── entity/                   # Entidades JPA
│   ├── dto/                      # Objetos de transferência de dados
│   │   ├── categoria/
│   │   └── produto/
│   └── exception/                # Tratamento de exceções
│
├── frontend/                     # Aplicação Angular (SPA)
│   ├── src/app
│   │
│   ├── pages/                    # Páginas da aplicação
│   ├── services/                 # Comunicação com a API
│   ├── models/                   # Interfaces/Modelos de dados
│   └── components/               # Componentes reutilizáveis
│
└── README.md
Backend

O backend foi desenvolvido utilizando Spring Boot e segue uma arquitetura baseada em camadas.

Tecnologias utilizadas

Java

Spring Boot

Spring Web

Spring Data JPA

Maven

REST API

DTO Pattern

Arquitetura Backend

A aplicação segue a arquitetura em camadas:

Controller → Service → Repository → Database
Controller

Responsável por expor os endpoints da API REST.

Exemplos:

CategoriaController

ProdutoController

Esses controllers recebem as requisições HTTP, validam os dados e encaminham para a camada de serviço.

Service

Contém as regras de negócio da aplicação.

Responsabilidades:

validações

manipulação de dados

comunicação entre controller e repository

Classes principais:

CategoriaService

ProdutoService

Repository

Responsável pelo acesso ao banco de dados utilizando Spring Data JPA.

Interfaces principais:

CategoriaRepository

ProdutoRepository

Essas interfaces permitem operações como:

salvar

buscar

atualizar

deletar

sem necessidade de implementar SQL manualmente.

Entity

Representam as entidades persistidas no banco de dados.

Principais entidades:

Categoria

Produto

EntidadeBase

DTO

Para evitar expor diretamente as entidades da aplicação, foram criados DTOs (Data Transfer Objects).

Eles controlam os dados enviados e recebidos pela API.

Tipos utilizados:

RequestDTO → dados recebidos na requisição

ResponseDTO → dados retornados pela API

UpdateDTO → dados utilizados para atualização

Exemplo:

ProdutoRequestDTO
ProdutoResponseDTO
ProdutoUpdateDTO
Frontend

O frontend foi desenvolvido com Angular, funcionando como uma SPA (Single Page Application).

A aplicação fornece uma interface web para gerenciamento completo de produtos e categorias.

Funcionalidades do Frontend
Categorias

CRUD completo de categorias:

Criar categoria

Listar categorias

Editar categoria

Deletar categoria

Produtos

CRUD completo de produtos:

Criar produto

Listar produtos

Editar produto

Deletar produto

Cada produto está associado a uma categoria.

Comunicação Frontend / Backend

O Angular consome a API REST do backend através de requisições HTTP.

Endpoints de Produtos
GET    /produtos
GET    /produtos/{id}
POST   /produtos
PUT    /produtos/{id}
DELETE /produtos/{id}
Endpoints de Categorias
GET    /categorias
GET    /categorias/{id}
POST   /categorias
PUT    /categorias/{id}
DELETE /categorias/{id}
Como executar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/gestao-de-produtos.git
cd gestao-de-produtos
Executar Backend

Entre na pasta do backend:

cd backend

Execute o projeto.

Linux / Mac:

./mvnw spring-boot:run

Windows:

mvnw.cmd spring-boot:run

A aplicação iniciará em:

http://localhost:8080
Executar Frontend

Entre na pasta do frontend:

cd frontend

Instale as dependências:

npm install

Execute o Angular:

ng serve

O frontend ficará disponível em:

http://localhost:4200
Histórico de desenvolvimento

Principais etapas do desenvolvimento registradas nos commits:

Commit inicial
primeiro commit
Implementação da entidade Categoria
feat(Entity): add Categoria entity, repository, service and controller
Implementação de DTOs para Categoria
feat(dto): add CategoriaRequestDTO
feat(dto): add CategoriaResponseDTO
Implementação de DTOs para Produto
feat(dto): add RequestDTO, ResponseDTO and UpdateDTO for entity Produto
Estruturação do projeto em monorepo

Separação do projeto em:

backend/
frontend/
Implementação do CRUD de Categorias no frontend
feat(frontend): implement categoria CRUD
Implementação do CRUD de Produtos no frontend
feat(frontend): implement produto CRUD
Objetivo do projeto

Este projeto tem como objetivo praticar e consolidar conhecimentos em:

desenvolvimento backend com Spring Boot

arquitetura REST

utilização de DTO Pattern

desenvolvimento frontend com Angular

integração Full Stack

organização de projetos em monorepo

consumo de API REST em SPA

Autor

Felipe Boos

Projeto desenvolvido para estudos de desenvolvimento Full Stack com Java e Angular.