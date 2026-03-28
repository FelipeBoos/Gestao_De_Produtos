package com.felipeboos.gestao_produtos.dto.erro;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.List;

@Data
@Builder
public class ErroResponseDTO {
    private Integer status;
    private String mensagem;
    private Instant timestamp;
    private List<String> erros;
}
