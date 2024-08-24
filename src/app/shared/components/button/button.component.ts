import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AppButton implements OnInit {
    @Input() label: string = "";
    @Input() icon: string = "";
    @Input() disabled: boolean = false;
    @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.onClick.emit()
  }
}