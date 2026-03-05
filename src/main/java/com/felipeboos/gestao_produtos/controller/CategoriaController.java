package com.felipeboos.gestao_produtos.controller;

import com.felipeboos.gestao_produtos.dto.categoria.CategoriaResponseDTO;
import com.felipeboos.gestao_produtos.entity.Categoria;
import com.felipeboos.gestao_produtos.service.CategoriaService;
import com.felipeboos.gestao_produtos.dto.categoria.CategoriaRequestDTO;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
@RequiredArgsConstructor
public class CategoriaController {

    private final CategoriaService categoriaService;

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaRequestDTO> buscarCategoriaPorId(@PathVariable Long id) {
        return ResponseEntity.ok(categoriaService.buscarCategoriaPorId(id));
    }

    @GetMapping
    public ResponseEntity<Categoria> buscarCategoriaPorNome(@RequestParam String nome) {
        return ResponseEntity.ok(categoriaService.buscarCategoriaPorNome(nome));
    }

    @PostMapping
    public ResponseEntity<CategoriaResponseDTO> salvarCategoria(@RequestBody @Valid CategoriaRequestDTO dto) {
        CategoriaResponseDTO categoriaSalva = categoriaService.salvarCategoria(dto);
        return ResponseEntity.status(201).body(categoriaSalva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> atualizarCategoriaPorId(@PathVariable Long id,
                                                        @RequestBody Categoria categoria) {
        categoriaService.atualizarCategoriaPorId(id, categoria);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public ResponseEntity<CategoriaResponseDTO> deletarPorId(@RequestParam Long id) {
        categoriaService.deletarCategoriaPorId(id);
        return ResponseEntity.noContent().build();
    }
}
