import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent  {

  newHeroes: any [] = [];

  // dataheroe = Math.floor(Math.random() * 10) + 1


  constructor( private heroes : HeroesService ) {

    this.heroes.getHeroes()
    .subscribe ( (data: any) => {
      console.log (data);
      this.newHeroes = data;

    });




   }



}

/*    console.log('Contructor  en marcha');
    this.http.get('https://akabab.github.io/superhero-api/api/all.json')
    .subscribe ( (data: any)  => {
      this.dataheroe = data;
      console.log( data);
    }) */
