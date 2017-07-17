  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  exports: [HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
