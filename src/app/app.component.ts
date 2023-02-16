import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {  // { contador: number } Misma sintaxis que usamos en app.module.ts
    // Nos suscribimos a los cambios en la store
    this.store.subscribe(state => { 
      console.log("Nuevo cambio de estado: ", state); 
      this.contador = state.contador;
    })
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
