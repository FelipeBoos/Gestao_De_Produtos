# Gestão de Produtos

Sistema de gestão de produtos e categorias desenvolvido com Spring Boot no backend e Angular no frontend.

O projeto foi estruturado como um **monorepo**, contendo backend e frontend no mesmo repositório, permitindo versionar toda a aplicação fullstack em um único projeto.

---

# Estrutura do Projeto

```
gestao-de-produtos
│
├── backend/                 # API REST em Spring Boot
│   ├── src/main/java/com/felipeboos/gestao_produtos
│   │
│   ├── controller/          # Endpoints REST
│   ├── service/             # Regras de negócio
│   ├── repository/          # Acesso a dados (Spring Data JPA)
│   ├── entity/              # Entidades JPA
│   ├── dto/                 # Objetos de transferência de dados
│   │   ├── categoria/
│   │   └── produto/
│   └── exception/           # Tratamento de exceções
│
├── frontend/                # Aplicação Angular (SPA)
│
└── README.md
```

---

# Backend

O backend foi desenvolvido utilizando Spring Boot e segue uma arquitetura baseada em camadas.

## Tecnologias utilizadas

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* Maven
* REST API
* DTO Pattern

---

# Arquitetura Backend

A aplicação segue a estrutura:

```
Controller → Service → Repository → Database
```

## Controller

Responsável pelos endpoints da API.

Exemplos:

* `CategoriaController`
* `ProdutoController`

---

## Service

Contém as regras de negócio da aplicação.

* `CategoriaService`
* `ProdutoService`

---

## Repository

Responsável pela comunicação com o banco de dados através do Spring Data JPA.

* `CategoriaRepository`
* `ProdutoRepository`

---

## Entity

Representam as entidades persistidas no banco de dados.

* `Categoria`
* `Produto`
* `EntidadeBase`

---

## DTO

Para evitar expor diretamente as entidades da aplicação, foram criados **DTOs (Data Transfer Objects)**.

Separados em três tipos:

* RequestDTO → dados recebidos na requisição
* ResponseDTO → dados retornados pela API
* UpdateDTO → dados utilizados para atualização

Exemplo:

```
ProdutoRequestDTO
ProdutoResponseDTO
ProdutoUpdateDTO
```

---

# Frontend

O frontend está sendo desenvolvido com Angular, funcionando como uma **SPA (Single Page Application)**.

Responsabilidades do frontend:

* consumir a API REST
* interface para gerenciamento de produtos
* cadastro e edição de categorias
* listagem de produtos

---

# Como executar o projeto

## 1. Clonar o repositório

```
git clone https://github.com/seu-usuario/gestao-de-produtos.git
cd gestao-de-produtos
```

---

# Executar Backend

Entre na pasta do backend:

```
cd backend
```

Execute o projeto.

Linux / Mac:

```
./mvnw spring-boot:run
```

Windows:

```
mvnw.cmd spring-boot:run
```

A aplicação iniciará em:

```
http://localhost:8080
```

---

# Executar Frontend

Entre na pasta do frontend:

```
cd frontend
```

Instale as dependências:

```
npm install
```

Execute o Angular:

```
ng serve
```

O frontend ficará disponível em:

```
http://localhost:4200
```

---

# Comunicação Frontend / Backend

O Angular consome a API REST do backend através de requisições HTTP.

Exemplo de endpoints:

```
GET    /produtos
POST   /produtos
PUT    /produtos/{id}
DELETE /produtos/{id}
```

```
GET    /categorias
POST   /categorias
PUT    /categorias/{id}
DELETE /categorias/{id}
```

---

# Histórico de desenvolvimento

Principais etapas do desenvolvimento registradas nos commits:

### Commit inicial

```
primeiro commit
```

### Implementação da entidade Categoria

```
feat(Entity): add Categoria entity, repository, service and controller
```

### Implementação de DTOs para Categoria

```
feat(dto): add CategoriaRequestDTO
feat(dto): add CategoriaResponseDTO
```

### Implementação de DTOs para Produto

```
feat(dto): add RequestDTO, ResponseDTO and UpdateDTO for entity Produto
```

### Refatoração da estrutura do projeto

Separação do projeto em **backend** e **frontend** dentro do mesmo repositório.

---

# Objetivo do projeto

Este projeto tem como objetivo praticar e consolidar conhecimentos em:

* desenvolvimento backend com Spring Boot
* arquitetura REST
* utilização de DTO Pattern
* desenvolvimento frontend com Angular
* integração Full Stack
* organização de projetos em monorepo

---

# Autor

Felipe Boos

Projeto desenvolvido para estudos de desenvolvimento Full Stack com Java e Angular.
