import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenu } from './main-menu/start-manu/start-menu.component';
import { StartMenu2 } from './main-menu/start-menu2/start-menu.component2';
import { ButtonModule } from 'primeng/button';
import { AppButton } from './shared/components/button/button.component';
import { InputButton } from './shared/components/input/input.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    StartMenu,
    StartMenu2,
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
