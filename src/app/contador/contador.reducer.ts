import { Action, createReducer, on } from "@ngrx/store";
import { incrementar, decrementar, multiplicar, dividir } from './contador.actions';

// Reducer recibirá las acciones
// El reducer no debe trabajar con el "exterior"
// Lo que el reducer haga debe hacerlo solo con la información que reciba
// export const contadorReducer = (state: number = 10, action: Action) => {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1; // Se recomienda hacer esto para retornar un nuevo estado, ya que si hago += 1 lo que retornaría sería una mutación del estado anterior
//         case decrementar.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }


/**
 * Implementacion automática del reducer de NgRx según la documentación
 */
export const initialState = 20;

export const contadorReducer = createReducer( // De esta forma ya no trabajamos con los switch que trabajaríamos con vanilla js
    initialState,
    on(incrementar, (state) => state + 1), // On permite seleccionar más rápidamente la acción que estoy disparando
    on(decrementar, (state) => state - 1), // Automáticamente ya se recogerán las actions creadas con createAction en contador.actions.ts
    // on(multiplicar, (state, props) => state * props.numero)
    on(multiplicar, (state, { numero }) => state * numero), // Con destructuración del objeto
    on(dividir, (state, { numero }) => state / numero) // Con destructuración del objeto
);
