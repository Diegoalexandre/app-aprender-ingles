import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FrasesModel } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  @ViewChild('textArea') textArea: ElementRef;

  frases: FrasesModel[] = FRASES;
  instrucao = 'Responda a pergunta:';
  resposta: string;
  indice = 0;
  progress: number = Math.round(100 / this.frases.length);
  resultado = true;
  status = true;
  erro = 5;
  win = false;
  life = [];
  coracaoVazio = '/assets/coracao_vazio.png';
  coracaoCheio = '/assets/coracao_cheio.png';

  constructor() {
  }

  ngOnInit() {
    this.life = [this.coracaoCheio, this.coracaoCheio, this.coracaoCheio, this.coracaoCheio, this.coracaoCheio];
    console.log(this.progress);
  }

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;

    if (this.resposta !== '') {
      this.status = false;
    } else {
      this.status = true;
    }

    if (this.resposta === this.frases[this.indice].frasePtBr) {
      this.resultado = true;
    } else {
      this.resultado = false;

    }
  }

  verificar() {
    if (this.resultado) {
      this.indice++;
      this.progress = Math.round((100 / this.frases.length) + this.progress);
      this.textArea.nativeElement.value = '';
    } else {
      this.erro--;
      this.life[this.erro] = this.coracaoVazio;
    }
    if (this.indice === this.frases.length) {
      this.win = true;
    }
    console.log(this.textArea.nativeElement.value);
  }

}
