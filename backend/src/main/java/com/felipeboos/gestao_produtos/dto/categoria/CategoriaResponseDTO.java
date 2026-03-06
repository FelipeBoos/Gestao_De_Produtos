package com.felipeboos.gestao_produtos.dto.categoria;

import com.felipeboos.gestao_produtos.entity.Categoria;
import lombok.Data;

@Data
public class CategoriaResponseDTO {

    private Long id;
    private String nome;
    private String descricao;

    public static CategoriaResponseDTO fromEntity(Categoria categoria) {
        CategoriaResponseDTO dto = new CategoriaResponseDTO();

        dto.setId(categoria.getId());
        dto.setNome(categoria.getNome());
        dto.setDescricao(categoria.getDescricao());

        return dto;
    }
}
