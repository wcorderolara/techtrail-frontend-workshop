import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selected: Hero;
  heroes: Array<Hero>;
  message = '?';
  heroToDelete: Hero;
  showModal = false;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  askToDelete(hero: Hero) {
    this.heroToDelete = hero;
    this.showModal = true;
    if (this.heroToDelete.name) {
      this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteHero() {
    this.closeModal();
    if (this.heroToDelete) {
      this.heroService.delete(this.heroToDelete.id);
      this.heroToDelete = null;
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.heroes = this.heroService.getAll();
    this.clear();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      this.update(hero);
    } else {
      this.add(hero);
    }
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }

}
