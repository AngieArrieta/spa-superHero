import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heros-finded',
  templateUrl: './heros-finded.component.html',
  styleUrls: ['./heros-finded.component.css']
})
export class HerosFindedComponent implements OnInit {

  HeroesEncontrados: Heroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) {

    /// servicios de aqui
    
   }

  ngOnInit() {
    // funcionan aqui
    this._activatedRoute.params.subscribe(params => {
      this.HeroesEncontrados = this._heroesService.buscarHeroes(params['text']);
      this.termino = params['text'];
      // this.pos = Number(this._heroesService.buscarID(params['text']));

    });

  }


}
