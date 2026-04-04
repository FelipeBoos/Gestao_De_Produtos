package com.felipeboos.gestao_produtos.service.cambio;

import com.felipeboos.gestao_produtos.entity.Moeda;

import java.math.BigDecimal;

public interface CambioService {

    BigDecimal obterCotacao(Moeda moeda);
}
