package com.felipeboos.gestao_produtos.dto.estrategiaPreco;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class EstrategiaPrecoRequestDTO {

    @NotNull(message = "O produto eh obrigatorio")
    private Long produtoId;

    @NotNull(message = "A margem de lucro eh obrigatoria")
    @PositiveOrZero(message = "A margem de lucro nao pode ser negativa")
    private BigDecimal margemLucro;

    @NotNull(message = "O percentual de imposto eh obrigatorio")
    @PositiveOrZero(message = "O percentual de imposto nao pode ser negativo")
    private BigDecimal percentualImposto;
}
