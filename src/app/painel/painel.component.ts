import { Component, OnInit } from '@angular/core';
import { FrasesModel } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  frases: FrasesModel[] = FRASES;
  instrucao = 'Traduza uma frase:';

  constructor() {

  }

  ngOnInit() {
  }

  atualizarResposta(event) {
    console.log(this.frases);
  }

}
