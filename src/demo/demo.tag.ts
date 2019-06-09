import { Component } from '@angular/core';
import { DataSet } from './data.set';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.tag.html',
    styleUrls: ['./demo.tag.sass'],
    providers: [DataSet]
})
export class DemoTag {
  get ds() {
    return this._ds;
  }
  constructor(private _ds: DataSet) {}
  evt(k, e) {
      // console.log(k, e);
  }
}
