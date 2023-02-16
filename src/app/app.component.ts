import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {  // { contador: number } Misma sintaxis que usamos en app.module.ts
    // Nos suscribimos a los cambios en la store
    // this.store.subscribe(state => {
    this.store.select("contador").subscribe(contador => { // Con select seleccionamos el nodo de la store que nos interesa seguir
      console.log("Nuevo cambio de estado: ", contador); 
      // this.contador = state.contador;
      this.contador = contador;
    })
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
