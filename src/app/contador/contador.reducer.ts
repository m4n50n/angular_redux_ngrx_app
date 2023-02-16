import { Action } from "@ngrx/store";
import { incrementar, decrementar } from './contador.actions';

// Reducer recibirá las acciones
// El reducer no debe trabajar con el "exterior"
// Lo que el reducer haga debe hacerlo solo con la información que reciba
export const contadorReducer = (state: number = 10, action: Action) => {
    switch (action.type) {
        case incrementar.type:
            return state + 1; // Se recomienda hacer esto para retornar un nuevo estado, ya que si hago += 1 lo que retornaría sería una mutación del estado anterior
        case decrementar.type:
            return state - 1;
        default:
            return state;
    }
}
