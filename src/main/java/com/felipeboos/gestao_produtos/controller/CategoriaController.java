package com.felipeboos.gestao_produtos.controller;

import com.felipeboos.gestao_produtos.entity.Categoria;
import com.felipeboos.gestao_produtos.service.CategoriaService;
import com.felipeboos.gestao_produtos.dto.categoria.CategoriaRequestDTO;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
@RequiredArgsConstructor
public class CategoriaController {

    private final CategoriaService categoriaService;

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoriaPorId(@PathVariable Long id) {
        return ResponseEntity.ok(categoriaService.buscarCategoriaPorId(id));
    }

    @GetMapping
    public ResponseEntity<Categoria> buscarCategoriaPorNome(@RequestParam String nome) {
        return ResponseEntity.ok(categoriaService.buscarCategoriaPorNome(nome));
    }

    @PostMapping
    public ResponseEntity<Categoria> salvarCategoria(@RequestBody CategoriaRequestDTO categoria) {
        CategoriaRequestDTO categoriaSalva = categoriaService.salvarCategoria(categoria);
        return ResponseEntity.status(201).body(categoriaSalva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> atualizarCategoriaPorId(@PathVariable Long id,
                                                        @RequestBody Categoria categoria) {
        categoriaService.atualizarCategoriaPorId(id, categoria);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public ResponseEntity<Categoria> deletarPorId(@RequestParam Long id) {
        categoriaService.deletarCategoriaPorId(id);
        return ResponseEntity.noContent().build();
    }
}
