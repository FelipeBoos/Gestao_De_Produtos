import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { EstrategiaPrecoService, EstrategiaPrecoResponse } from '../services/estrategia-preco.service';
import { ProdutoService, ProdutoResponse } from '../../produtos/services/produto.service';

@Component({
  selector: 'app-simular-estrategia-preco',
  imports: [CommonModule, FormsModule],
  templateUrl: './simular-estrategia-preco.html',
  styleUrl: './simular-estrategia-preco.css',
})
export class SimularEstrategiaPreco implements OnInit {
  produtoId: number | null = null;
  margemLucro: number | null = null;
  percentualImposto: number | null = null;

  resultadoSimulacao: EstrategiaPrecoResponse | null = null;
  produtos = signal<ProdutoResponse[]>([]);

  constructor(
    private estrategiaPrecoService: EstrategiaPrecoService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (resposta) => {
        this.produtos.set(resposta);
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao carregar produtos:', erro);
      }
    });
  }

  simularEstrategiaDePreco(): void {
    if (
      this.produtoId === null ||
      this.margemLucro === null ||
      this.percentualImposto === null
    ) {
      alert('Preencha todos os campos');
      return;
    }

    const estrategiaPrecoRequest = {
      produtoId: this.produtoId,
      margemLucro: this.margemLucro,
      percentualImposto: this.percentualImposto,
    };

    this.estrategiaPrecoService.simularEstrategiaPreco(estrategiaPrecoRequest).subscribe({
      next: (resposta) => {
        this.resultadoSimulacao = { ...resposta };
        console.log('Resultado da simulação:', resposta);
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro na simulação:', erro);
      }
    });
  }

  salvarEstrategia() {
    console.log('Botão salvar');
  }

  resetarFormulario(): void {
    this.produtoId = null;
    this.margemLucro = null;
    this.percentualImposto = null;
    this.resultadoSimulacao = null;
  }

  voltar(): void {
    this.router.navigate(['/estrategias-preco']);
  }

  cancelar(): void {
    this.resetarFormulario();
    this.router.navigate(['/estrategias-preco']);
  }


}