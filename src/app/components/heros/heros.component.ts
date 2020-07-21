import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'; // me traigo el servicio especifico
import { Router } from '@angular/router';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Heroe[] = [];
  // inyeccion del servicio en el constructor
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor( private _heroesService: HeroesService, private _router: Router ) { // private: porque solo se accede aqui, _aliasdelservico : tiposervicio
   }

  ngOnInit() { // cuando ya toda la página esta renderizada
    this.heroes = this._heroesService.getHeroes();
  }

  verHero(idx: string){
    this._router.navigate( ['/hero', idx]);

  }

}
