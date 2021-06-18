import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  newHeroes = [] = [];
  constructor( private http: HttpClient) {

    console.log('conectado a la data');

   }

   getHeroes () {

     return this.http.get ('https://akabab.github.io/superhero-api/api/all.json')
      .pipe( map (data => { 
        return data;
      }) );
        }

      

 /*   getHeroe ( termino: string) {

    return this.http.get (`https://akabab.github.io/superhero-api/api/all.json${ termino}´);
   } */


}
