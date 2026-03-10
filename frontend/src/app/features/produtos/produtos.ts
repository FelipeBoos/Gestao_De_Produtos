import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService, ProdutoResponse } from './services/produto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoriaResponse, CategoriaService } from '../categorias/services/categoria.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  nome = '';
  descricao = '';
  categoriaId: number | null = null;
  categorias =  signal<CategoriaResponse[]>([]);
  precoCusto: number | null = null;
  precoVenda: number | null = null;
  quantidadeEstoque: number | null = null;

  produtos = signal<ProdutoResponse[]>([]);

  exibirFormulario = false;
  produtoEmEdicaoId: number | null = null;

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    console.log('NgOnInit da página produtos');
    this.carregarProdutos();
    this.carregarCategorias();
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (resposta) => {
        console.log('Produtos carregados:', resposta);
        this.produtos.set(resposta);
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao listar produtos', erro);
      }
    });
  }

  botaoSalvar() {
    if (
      this.categoriaId === null ||
      this.precoCusto === null ||
      this.precoVenda === null ||
      this.quantidadeEstoque === null 
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const produto = {
      nome: this.nome,
      descricao: this.descricao,
      categoriaId: this.categoriaId,
      precoCusto: this.precoCusto,
      precoVenda: this.precoVenda,
      quantidadeEstoque: this.quantidadeEstoque
    };

    if (this.produtoEmEdicaoId === null) {
      //salvarProduto()
      this.produtoService
        .cadastrarProduto(produto)
        .subscribe({
          next: () => {
            alert('Produto cadastrado com sucesso');
            this.resetarFormulario();
            this.carregarProdutos();
          }
        })
    } else {

    }
  }

  incluirProduto() {
    this.resetarFormulario();
    this.exibirFormulario = true;
  }

  filtrarProduto() {
    alert("Filtrar produto: Ainda não implementado");
  }

  editarProduto(id: number) {
    alert(`Editar produto: Ainda não implementado. Id selecionado: ${id}`);
    this.exibirFormulario = true;
    this.produtoEmEdicaoId = id;
  }

  deletarProduto(id: number) {
    alert(`Deletar produto: Ainda não implementado. Id selecionado: ${id}`);
  }

  resetarFormulario() {
    this.nome = '';
    this.descricao = '';
    this.categoriaId = null;
    this.precoCusto = null;
    this.precoVenda = null;
    this.quantidadeEstoque = null;
    this.produtoEmEdicaoId = null;
    this.exibirFormulario = false;
  }

  carregarCategorias(): void {
    this.categoriaService.listarCategorias().subscribe({
      next: (resposta) => {
        this.categorias.set(resposta);
      },
      error: (erro) => {
        console.error('Erro ao carregar categorias:', erro);
      }
    })
  }
}
