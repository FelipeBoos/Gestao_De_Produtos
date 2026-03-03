package com.felipeboos.gestao_produtos.repository;

import com.felipeboos.gestao_produtos.entity.Produto;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    Optional<Produto> findByNome(String nome);

    @Transactional
    void deleteByNome(String nome);
}
