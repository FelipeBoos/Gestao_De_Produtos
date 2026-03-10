# Gestão de Produtos 

- Desenvolvido por Felipe Boos 

Sistema de gestão de **produtos e categorias** desenvolvido com **Spring Boot** no backend e **Angular** no frontend.

A aplicação fornece uma **API REST** integrada a uma interface **SPA (Single Page Application)** para gerenciamento de dados.

O projeto está organizado como **monorepo**, contendo backend e frontend no mesmo repositório.

---

# Stack

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven
- REST API

### Frontend
- Angular
- TypeScript
- HTML
- CSS

---

# Funcionalidades

### Categorias
- Criar categoria
- Listar categorias
- Editar categoria
- Excluir categoria

### Produtos
- Criar produto
- Listar produtos
- Editar produto
- Excluir produto

---

# Como executar

## Backend

Na raiz do projeto:
cd backend
./mvnw spring-boot:run

API disponível em:

http://localhost:8080

## Frontend

Na raiz do projeto:
cd frontend
npm install
ng serve

Aplicação disponível em:

http://localhost:4200


## Status do Projeto

 Em desenvolvimento

Implementado até o momento:

CRUD completo de categorias

CRUD completo de produtos

Integração Angular + API REST

Layout inicial com sidebar e dashboard

Melhorias futuras:

estilização completa da interface

validações visuais

filtros e paginação

autenticação de usuários com JWT
