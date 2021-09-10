import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar()
  }

  /**
   * Retorna se atela de início deve ser exibida
   * 
   * @return boolean
   */

  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   * 
   * @return boolean
   */

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal
  }

  /**
   * Inicializa os dados de um novo jogo
   * 
   * @return void
   */
  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo()
  }

  /**
   * Realiza uma jogada ao clica em algum local no tabuleiro
   * 
   * @param number posX
   * @param number posY
   * @return void
   */

}
