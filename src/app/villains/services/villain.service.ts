import { Injectable } from '@angular/core';
import data from '../../db/data.json';
import {Villain} from '../../core';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor() { }

  getAll(): Array<Villain> {
    return data.villains;
  }

  update(hero: Villain): void {};

  delete(id: string): void {};

  add(hero: Villain): void{};

}
