package com.felipeboos.gestao_produtos.excecao;

public class DadoInvalidoException extends RuntimeException {
    public DadoInvalidoException(String message) {
        super(message);
    }
}
