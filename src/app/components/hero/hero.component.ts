import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {

  // variable local (un solo object) para mostrarlo en el template
  heroe:any = {};
  index:number;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router: Router) {
    // para agarrar el parametro que viene por url
    // escuchar los cambios de los parametros (i) a traves de los observadores, por medio de subscribsiones
    // esta pendiente de esos cambios como las promesas
    this._activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      // para ver solo el contenido, id porque en el route esta id
      this.heroe = this._heroesService.getHeroe(params['id']); // recibo el objeto
      this.index = params['id'];


      /*
      if(this.heroe.casa == 'DC'){
        this.heroe.casa = '/assets/img/dc_logo.png';
      }else{
        this.heroe.casa = '/assets/img/marvel_logo.png';
      }*/

    });

  }

      siguienteHero(){
        if(Number(this.index) < this._heroesService.getLength() - 1) {
          this._router.navigate( ['/hero', Number(this.index) + 1]);
        }
      };
      anteriorHero(){
        if(Number(this.index)>0){
          this._router.navigate( ['/hero',  Number(this.index) - 1]);
        }
      };


}
