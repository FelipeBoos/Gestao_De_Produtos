package com.felipeboos.gestao_produtos.repository;

import com.felipeboos.gestao_produtos.entity.EstrategiaPreco;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EstrategiaPrecoRepository extends JpaRepository<EstrategiaPreco, Long> {
    List<EstrategiaPreco> findAllByOrderByIdAsc();
}
