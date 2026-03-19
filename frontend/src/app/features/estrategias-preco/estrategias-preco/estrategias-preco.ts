import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../../../shared/components/modal/modal/modal';
import { EstrategiaPrecoService, EstrategiaPrecoRequest, EstrategiaPrecoResponse } from '../services/estrategia-preco.service';
import { ProdutoService, ProdutoResponse } from '../../produtos/services/produto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-estrategias-preco',
  imports: [FormsModule, Modal, CommonModule],
  templateUrl: './estrategias-preco.html',
  styleUrl: './estrategias-preco.css',
})
export class EstrategiasPreco implements OnInit {
  produtoId: number | null = null;
  margemLucro: number | null = null;
  percentualImposto: number | null = null;

  exibirFormulario = false;
  exibirResultadoSimulacao = false;
  estrategiasPreco = signal<EstrategiaPrecoResponse[]>([]);

  resultadoSimulacao: EstrategiaPrecoResponse | null = null;

  produtos = signal<ProdutoResponse[]>([]);

  constructor(private estrategiaPrecoService: EstrategiaPrecoService, private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarEstrategiasPreco();
  }

  carregarEstrategiasPreco(): void {
    this.estrategiaPrecoService.listarEstrategiasPreco().subscribe({
      next: (resposta) => {
        console.log('Estrategias carregadas: ', resposta);
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao listar estrategias: ', erro);
      }
    });
  }

  botaoFiltrar(): void {
    alert('Botão filtrar: ainda não implementado');
  }

  resetarFormulario(): void {
    this.produtoId = null;
    this.margemLucro = null;
    this.percentualImposto = null;
    this.resultadoSimulacao = null;
  }

  carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (resposta) => {
        //console.log('Produtos carregados:', resposta);
        this.produtos.set(resposta);
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao carregar produtos:', erro);
      }
    })
  }

  simularEstrategiaDePreco() {

    if (
      this.produtoId === null ||
      this.margemLucro === null ||
      this.percentualImposto === null
    ) {
      alert('Preencha todos os campos');
      return;
    }

    const estrategiaPreco = {
      produtoId: this.produtoId,
      margemLucro: this.margemLucro,
      percentualImposto: this.percentualImposto,
    };

    this.estrategiaPrecoService.simularEstrategiaPreco(estrategiaPreco).subscribe({
      next: (resposta) => {
        this.resultadoSimulacao = { ...resposta };
        this.exibirResultadoSimulacao = true;
        this.cdr.detectChanges();
        console.log('Resultado da simulação: ', resposta);
      },
      error: (erro) => {
        console.error('Erro na simulação: ', erro);
      }
    });
  }

  botaoSimular() {
    this.exibirFormulario = true;
  }

  fecharSimulacao() {
    this.exibirFormulario = false;
    this.exibirResultadoSimulacao = false;
    this.resetarFormulario();
  }

  excluirEstrategiaPreco(id: number): void {
    if (!confirm('Deseja realmente deletar essa estratégia de preço?')) {
      return;
    }

    this.estrategiaPrecoService.deletarEstrategiaPreco(id).subscribe({
      next: () => {
        console.log('Estrategia de preco deletada: ', id);
        this.carregarEstrategiasPreco();
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao deletar estratégia de preço: ', erro);

        if (erro.status === 404) {
          alert('Estrategia de preço não encontrado');
          return;
        }
      }
    });
  }
}
