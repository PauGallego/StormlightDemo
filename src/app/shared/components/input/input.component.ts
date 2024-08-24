import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputButton implements OnInit {
    @Input() label: string = "";
    @Input() placeholder: string = "";
    @Input() moreInfo: string = "";
    @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}