import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {

    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {
      this.todoDataService = todoDataService;
    }

    addTodo() {
      this.todoDataService.addTodo(this.newTodo);
    }

    get todos() {
      return this.todoDataService.getAllTodos();
    }
}
