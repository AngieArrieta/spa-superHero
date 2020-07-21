import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // inputs : una propiedad que especifico va a ser resibida desde afuera

  @Input() h: any = {}; // hero puede venir de afuera, si no viene nada queda lo que yo inicialice
  @Input() index: number;

  // nombre del evento que yo quiero que el padre escuche
  @Output()  heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {

    // observable
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHero(){ // hace parte del evento de su html

    /* if(this.pos >= 0){

        this._router.navigate( ['/hero', this.pos] );

    } else {
      this._router.navigate( ['/hero', this.index]);
    }*/

    this.heroeSeleccionado.emit(this.index); // exportando informacion
  }

}
