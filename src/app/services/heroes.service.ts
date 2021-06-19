import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) {

    console.log('conectado a la data');

   }

   getHeroes () {

     return this.http.get ('https://akabab.github.io/superhero-api/api/all.json');

   }

 /*   getHeroe ( termino: string) {

    return this.http.get (`https://akabab.github.io/superhero-api/api/all.json${ termino}´);
   } */


}
