import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoDataService]
})

export class TodoComponent {

    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {
      this.todoDataService = todoDataService;
    }

    addTodo() {
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }

    removeTodo(todo) {
      this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
      return this.todoDataService.getAllTodos();
    }
}
