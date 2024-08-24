import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenu implements OnInit {
    hola: string = "Hola"

  constructor() { }

  ngOnInit() {
  }


  alertHola(){
    alert("hola")
  }
}