import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.tag.html'
})
export class DemoTag {
  c1 = {
    data: [],
    opts: {}
  };

  evt(k, e) {
    console.log(k, e);
  }
}
