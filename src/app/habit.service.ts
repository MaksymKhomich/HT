import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habbits';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor() { }
  habits = JSON.parse(localStorage['habitList']);

  getHabits(): Observable<Habit[]>{
    return of(this.habits)
  }
}
