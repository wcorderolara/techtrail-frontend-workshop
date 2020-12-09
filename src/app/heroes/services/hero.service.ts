import { Injectable } from '@angular/core';
import data from '../../db/data.json';
import { Hero } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getAll(): Array<Hero> {
    return data.heroes;
  }

  update(hero: Hero): void {};

  delete(id: string): void {};

  add(hero: Hero): void{};

}
