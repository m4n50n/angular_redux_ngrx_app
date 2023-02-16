import { createAction } from "@ngrx/store"; // Método para crear una acción

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');