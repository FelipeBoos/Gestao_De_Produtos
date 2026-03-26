import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

import {
  EstrategiaPrecoService,
  EstrategiaPrecoResponse
} from '../services/estrategia-preco.service';
import {
  ProdutoService,
  ProdutoResponse
} from '../../produtos/services/produto.service';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-simular-estrategia-preco',
  imports: [CommonModule, FormsModule],
  templateUrl: './simular-estrategia-preco.html',
  styleUrl: './simular-estrategia-preco.css',
})
export class SimularEstrategiaPreco implements OnInit, AfterViewInit {
  @ViewChild('graficoRosca') graficoRoscaRef?: ElementRef<HTMLCanvasElement>;

  produtoId: number | null = null;
  margemLucro: number | null = null;
  percentualImposto: number | null = null;

  resultadoSimulacao: EstrategiaPrecoResponse | null = null;
  produtos = signal<ProdutoResponse[]>([]);

  private grafico: Chart | null = null;
  private viewInicializada = false;

  constructor(
    private estrategiaPrecoService: EstrategiaPrecoService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  ngAfterViewInit(): void {
    this.viewInicializada = true;
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

        setTimeout(() => {
          this.criarOuAtualizarGrafico();
        });
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro na simulação:', erro);
      }
    });
  }

  private criarOuAtualizarGrafico(): void {
    if (!this.viewInicializada || !this.graficoRoscaRef || !this.resultadoSimulacao) {
      return;
    }

    const precoSugerido = this.resultadoSimulacao.precoSugerido;
    const lucroUnitario = this.resultadoSimulacao.lucroUnitario;

    if (!precoSugerido || precoSugerido <= 0 || this.percentualImposto === null) {
      return;
    }
    const impostoUnitario = precoSugerido * (this.percentualImposto / 100);
    const custoUnitario = precoSugerido - lucroUnitario - impostoUnitario;

    const percentualCusto = this.calcularPercentual(custoUnitario, precoSugerido);
    const percentualLucro = this.calcularPercentual(lucroUnitario, precoSugerido);
    const percentualImposto = this.calcularPercentual(impostoUnitario, precoSugerido);

    if (this.grafico) {
      this.grafico.destroy();
    }

    const canvas = this.graficoRoscaRef.nativeElement;

    this.grafico = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Custo', 'Lucro', 'Imposto'],
        datasets: [
          {
            data: [percentualCusto, percentualLucro, percentualImposto],
            backgroundColor: ['#3b82f6', '#22c55e', '#f59e0b'],
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 14
              },
              padding: 18
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const valor = Number(context.raw).toFixed(2);
                return `${context.label}: ${valor}%`;
              }
            }
          }
        }
      }
    });
  }

  private calcularPercentual(valor: number, total: number): number {
    if (!total || total <= 0) {
      return 0;
    }

    return Number(((valor / total) * 100).toFixed(2));
  }

  salvarEstrategia(): void {
    console.log('Botão salvar');
  }

  resetarFormulario(): void {
    this.produtoId = null;
    this.margemLucro = null;
    this.percentualImposto = null;
    this.resultadoSimulacao = null;

    if (this.grafico) {
      this.grafico.destroy();
      this.grafico = null;
    }
  }

  voltar(): void {
    this.router.navigate(['app/estrategias-preco']);
  }

  cancelar(): void {
    this.resetarFormulario();
    this.router.navigate(['app/estrategias-preco']);
  }
}