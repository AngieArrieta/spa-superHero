import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { HerosFindedComponent } from './components/heros-finded/heros-finded.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, // path es el nombre de la ruta y lo redirecciona a un componente
    { path: 'about', component: AboutComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'hero/:id', component: HeroComponent }, // con parametros
    { path: 'heros-finded/:text', component: HerosFindedComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' } // redireccionar a uno por defecto
];

export const appRouting = RouterModule.forRoot(ROUTES);