package com.felipeboos.gestao_produtos.controller;

import com.felipeboos.gestao_produtos.entity.Produto;
import com.felipeboos.gestao_produtos.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produto")
@RequiredArgsConstructor
public class ProdutoController {

    private final ProdutoService produtoService;

    @PostMapping
    public ResponseEntity<Void> salvarProduto(@RequestBody Produto produto) {
        produtoService.salvarProduto(produto);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<Void> atualizarProdutoPorId(@RequestParam Long id,
                                                      @RequestBody Produto produto) {
        produtoService.atualizarProdutoPorId(id, produto);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<Produto> buscarProdutoPorNome(@RequestParam String nome) {
        return ResponseEntity.ok(produtoService.buscarProdutoPorNome(nome));
    }

    @DeleteMapping
    public ResponseEntity<Produto> deletarUsuarioPorNome(@RequestParam String nome) {
        produtoService.deletarProdutoPorNome(nome);
        return ResponseEntity.ok().build();
    }
}
