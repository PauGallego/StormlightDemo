import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu2',
  templateUrl: './start-menu.component2.html',
  styleUrls: ['./start-menu.component2.scss']
})
export class StartMenu2 implements OnInit {
    hola: string = "Hola"

  constructor() { }

  ngOnInit() {
  }


  alertHola(){
    alert("hola")
  }
}