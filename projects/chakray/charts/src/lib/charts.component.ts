import { Output, EventEmitter, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-charts',
  template: `
    <p>
      charts works!
    </p>
  `,
  styles: []
})
export class ChartsComponent implements OnInit {
  @Input() data;
  @Input() opts;
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
