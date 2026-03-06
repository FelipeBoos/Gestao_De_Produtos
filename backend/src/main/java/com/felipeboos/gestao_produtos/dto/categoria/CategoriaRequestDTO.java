package com.felipeboos.gestao_produtos.dto.categoria;

import jakarta.validation.constraints.Size;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CategoriaRequestDTO {

    @NotBlank(message = "O nome da categoria eh obrigatorio")
    @Size(max = 50, message = "O nome da categoria deve ter no maximo 50 caracteres")
    private String nome;

    @Size(max = 255, message = "A descricao deve ter no maximo 255 caracteres")
    private String descricao;
}
