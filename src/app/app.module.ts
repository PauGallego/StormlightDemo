import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenu } from './main-menu/start-manu/start-menu.component';
import { ButtonModule } from 'primeng/button';
import { AppButton } from './shared/components/button/button.component';
import { InputButton } from './shared/components/input/input.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    StartMenu,
    AppButton,
    InputButton,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
