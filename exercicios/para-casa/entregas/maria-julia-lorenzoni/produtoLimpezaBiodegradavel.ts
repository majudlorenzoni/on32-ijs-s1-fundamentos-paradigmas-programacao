import { ProdutoEcologico } from "./produtoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  volume: number;

  constructor(nome: string, preco: number, volume: number){
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  exibirDetalhesProduto(): void {
    console.log(`Produto de Limpeza Biodegradável: ${this.nome} - Preço: R$${this.preco}`);
  }
  
}