CREATE TABLE categorias (
    id BIGSERIAL PRIMARY KEY,
    criado_em TIMESTAMP WITH TIME ZONE,
    atualizado_em TIMESTAMP WITH TIME ZONE,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(255)
);

CREATE TABLE produtos (
    id BIGSERIAL PRIMARY KEY,
    criado_em TIMESTAMP WITH TIME ZONE,
    atualizado_em TIMESTAMP WITH TIME ZONE,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(255),
    categoria_id BIGINT NOT NULL,
    preco_custo NUMERIC(19,2),
    preco_venda NUMERIC(19,2),
    quantidade_estoque INTEGER,

    CONSTRAINT fk_produto_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);