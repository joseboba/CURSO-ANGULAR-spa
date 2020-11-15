import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Heore, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heore[] = [];
  termino: string;


  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private _heroesService: HeroesService
     
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
        this.termino = params.termino;
        this.heroes = this._heroesService.buscarHeroes(params.termino)
        
  })}

  

  

}
