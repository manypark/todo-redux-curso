import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { allToggle, borrar, crear, editar, limpiarCompletados, toggle } from './todo.actions';
 
export const initialState:Todo[] = [
  new Todo('Estudiar Redux'),
  new Todo('Estudiar Flutter'),
  new Todo('Estudiar Capacitor'),
];
 
const _todoReducer = createReducer(initialState,
  on(crear  , (state, { texto }) => [ ...state, new Todo(texto) ] ),
  on(toggle , (state, { id }) => {
    return state.map( todo => {
      return todo.id === id ? { ...todo, completado: !todo.completado } : todo;
    });
  }),
  on(editar  , (state, { id, texto }) => {
    return state.map( todo => {
      return todo.id === id ? { ...todo, texto } : todo;
    });
  } ),
  on(borrar  , (state, { id }) => state.filter( todo => todo.id !== id) ),
  on(allToggle  , (state, { completado }) => {
      return state.map( todos => {
        return {...todos, completado }
    })
  }),
  on(limpiarCompletados  , (state) => state.filter( todo => !todo.completado) ),
);
 
export function todoReducer(state:any, action:any) {
  return _todoReducer(state, action);
}