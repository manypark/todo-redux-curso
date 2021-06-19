import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { allToggle } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})

export class TodoPageComponent implements OnInit {

  completados:boolean = false;

  constructor(
    private store:Store<AppState>
  ) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completados = !this.completados;
    this.store.dispatch(allToggle({ completado: this.completados}));
  }

}
