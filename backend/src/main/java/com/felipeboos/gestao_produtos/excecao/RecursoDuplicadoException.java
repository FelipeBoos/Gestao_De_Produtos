package com.felipeboos.gestao_produtos.excecao;

public class RecursoDuplicadoException extends RuntimeException {
    public RecursoDuplicadoException(String message) {
        super(message);
    }
}
