  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  import { FormsModule } from '@angular/forms';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HelloComponent } from './components/hello.component';
  import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations : [
    AppComponent,
    HelloComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [HelloComponent, TodoComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
