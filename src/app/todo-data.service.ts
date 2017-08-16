import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  todos: Todo[]= [];
  constructor() { }


  addTodo(todo: Todo): TodoDataService {

    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
      return this.todos;
  }

}
