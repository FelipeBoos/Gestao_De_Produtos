import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CategoriaResponse } from '../../categorias/services/categoria.service';

export interface ProdutoRequest {
  nome: string,
  descricao: string,
  categoriaId: number,
  precoCusto: number,
  precoVenda: number,
  quantidadeEstoque: number
}

export interface ProdutoResponse {
  id: number,
  nome: string,
  descricao: string,
  categoriaNome: string,
  categoriaId: number,
  precoCusto: number;
  precoVenda: number;
  quantidadeEstoque: number;
  categoria: CategoriaResponse;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos() {
    return this.http.get<ProdutoResponse[]>(this.apiUrl);
  }

  cadastrarProduto(produto: ProdutoRequest) {
    return this.http.post<ProdutoResponse>(this.apiUrl, produto);
  }


  deletarProduto(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
