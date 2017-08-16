  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HelloComponent } from './components/hello.component';

@NgModule({
  declarations : [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
