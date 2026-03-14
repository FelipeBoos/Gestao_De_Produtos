package com.felipeboos.gestao_produtos.dto.estrategiapreco;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class EstrategiaPrecoUpdateDTO {

    @PositiveOrZero(message = "A margem de lucro nao pode ser negativa")
    private BigDecimal margemLucro;

    @PositiveOrZero(message = "O percentual de imposto nao pode ser negativo")
    private BigDecimal percentualImposto;
}
