package com.felipeboos.gestao_produtos.dto.estrategiapreco;

import com.felipeboos.gestao_produtos.entity.EstrategiaPreco;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
public class EstrategiaPrecoResponseDTO {

    private Long id;

    private Long produtoId;
    private String produtoNome;

    private BigDecimal margemLucro;
    private BigDecimal percentualImposto;

    private BigDecimal precoSugerido;
    private BigDecimal lucroUnitario;
    private Integer demandaEstimada;
    private BigDecimal lucroTotalEstimado;

    private Instant dataSimulacao;

    public static EstrategiaPrecoResponseDTO fromEntity(EstrategiaPreco estrategiaPreco){
        EstrategiaPrecoResponseDTO dto = new EstrategiaPrecoResponseDTO();

        dto.setId(estrategiaPreco.getId());

        if (estrategiaPreco.getProduto() != null) {
            dto.setProdutoId(estrategiaPreco.getProduto().getId());
            dto.setProdutoNome(estrategiaPreco.getProduto().getNome());
        }

        dto.setMargemLucro(estrategiaPreco.getMargemLucro());
        dto.setPercentualImposto(estrategiaPreco.getPercentualImposto());

        dto.setPrecoSugerido(estrategiaPreco.getPrecoSugerido());
        dto.setLucroUnitario(estrategiaPreco.getLucroUnitario());
        dto.setDemandaEstimada(estrategiaPreco.getDemandaEstimada());
        dto.setLucroTotalEstimado(estrategiaPreco.getLucroTotalEstimado());

        dto.setDataSimulacao(estrategiaPreco.getDataSimulacao());

        return dto;
    }
}
