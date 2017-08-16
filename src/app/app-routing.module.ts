import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HelloComponent } from './components/hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
