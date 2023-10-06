import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../item.model';
//import {axios} from 'axios';


@Component({

  selector: 'app-lista-de-itens',
  templateUrl: './lista-de-itens.component.html',
  styleUrls: ['./lista-de-itens.component.css']

})

export class ListaDeItensComponent implements OnInit {

  pokemons: Pokemon[] = [];
  novoPokemon: Pokemon = { nome: '', tipo: '' };
  editandoPokemon: Pokemon | null = null;
  pokemonEmEdicaoAnterior: Pokemon | null = null;
  exibirInputEdicao: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarPokemon(): void {
    if (this.novoPokemon.nome && this.novoPokemon.tipo) {
      this.pokemons.push({ ...this.novoPokemon });
      this.novoPokemon = { nome: '', tipo: '' };
    }
  }

  editarPokemon(pokemon: Pokemon): void {
    this.pokemonEmEdicaoAnterior = { ...pokemon };
    this.editandoPokemon = pokemon;
    this.exibirInputEdicao = true;
  }

  salvarEdicao(): void {
    if (this.editandoPokemon) {
      const index = this.pokemons.findIndex(p => p === this.editandoPokemon);
      if (index !== -1) {
        this.pokemons[index] = { ...this.editandoPokemon };
        this.editandoPokemon = null;
        this.exibirInputEdicao = false;
      }
    }
  }

  excluirPokemon(pokemon: Pokemon): void {
    const index = this.pokemons.findIndex(p => p === pokemon);
    if (index !== -1) {
      this.pokemons.splice(index, 1);
    }
  }

  cancelarEdicao(): void {
    if (this.editandoPokemon && this.pokemonEmEdicaoAnterior) {
      const index = this.pokemons.findIndex(p => p === this.editandoPokemon);
      if (index !== -1) {
        this.pokemons[index] = { ...this.pokemonEmEdicaoAnterior };
        this.editandoPokemon = null;
        this.exibirInputEdicao = false;
        this.novoPokemon = { nome: '', tipo: '' }; 
      }
    }
  }
}