import { Action } from '@ngrx/store'
import { todo } from './../models/todo.model'

import * as TodoActions from './../actions/todo.actions'

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface TodoState extends EntityState<todo> {

}

export const adapter : EntityAdapter<todo> =
  createEntityAdapter<todo>({
  });

const initialState: todo = <todo>{}


export const initialTodoState: TodoState = adapter.getInitialState();


export function todoReducers(state = initialTodoState, action: TodoActions.Actions ) {

  switch(action.type) {
    case TodoActions.ADD_TODO:
      return adapter.addOne(action.payload, state);

    case TodoActions.UPDATE_TODO:

      if (state.entities[action.id] === undefined) {
        return state;
      }

      console.log('xxxxxxxxxxxx');
      console.log(action.id);
      console.log(action.changes);

      return  adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state)

    case TodoActions.REMOVE_TODO:
      return  adapter.removeOne(action.id, state)
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<TodoState>('todos');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getTodoState);
