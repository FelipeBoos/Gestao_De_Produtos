package com.felipeboos.gestao_produtos.service;

import com.felipeboos.gestao_produtos.entity.Produto;
import com.felipeboos.gestao_produtos.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {

    private final ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public void salvarProduto(Produto produto) {
        repository.saveAndFlush(produto);
    }

    public Produto buscarProdutoPorNome(String nome) {

        return repository.findByNome(nome).orElseThrow(
                () -> new RuntimeException("Nome não encontrado")
        );
    }

    public void deletarProdutoPorNome(String nome) {
        repository.deleteByNome(nome);
    }

    public void atualizarProdutoPorId(Long id, Produto produto) {
        Produto produtoEntity = repository.findById(id).orElseThrow(
                () -> new RuntimeException("Id não encontrado")
        );

        Produto produtoAtualizado = Produto.builder()
                .nome(produto.getNome() != null ? produto.getNome() : produtoEntity.getNome())
                .descricao(produto.getDescricao() != null ? produto.getDescricao() : produtoEntity.getDescricao())
                .id(produtoEntity.getId())
                .build();

        repository.saveAndFlush(produtoAtualizado);
    }

    public void atualizarProdutoPorNome(String nome, Produto produto) {
        Produto produtoEntity = buscarProdutoPorNome(nome);

        Produto produtoAtualizado = Produto.builder()
                .nome(produto.getNome() != null ? produto.getNome() : produtoEntity.getNome())
                .id(produtoEntity.getId())
                .build();

        repository.saveAndFlush(produtoAtualizado);
    }
}
