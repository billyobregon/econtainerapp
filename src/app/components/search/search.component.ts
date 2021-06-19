import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor( private heroes: HeroesService) { }


/* buscar (termino: string) {
console.log(termino);
this.heroes.getHeroe( termino )
.subscribe ( data => {
  console.log(data);

} );
} */


}
