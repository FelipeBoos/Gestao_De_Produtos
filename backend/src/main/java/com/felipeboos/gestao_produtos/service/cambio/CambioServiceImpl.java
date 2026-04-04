package com.felipeboos.gestao_produtos.service;

import com.felipeboos.gestao_produtos.entity.Moeda;
import com.felipeboos.gestao_produtos.service.cambio.CambioService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class CambioServiceImpl implements CambioService {

    @Override
    public BigDecimal obterCotacao(Moeda moeda) {
        return switch (moeda) {
            case BRL -> BigDecimal.ONE;
            case USD -> BigDecimal.valueOf(5.00); // valor mockado
            case EUR -> BigDecimal.valueOf(6.00); // valor mockado
        };
    }
}