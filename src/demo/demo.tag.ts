import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.tag.html',
    styleUrls: ['./demo.tag.sass']
})
export class DemoTag {
  c1 = {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0]
      ]
    },
    opts: {
      type: 'Bar',
      seriesBarDistance: 12,
      low: -10,
      high: 10
    }
  };

  evt(k, e) {
      console.log(k, e);
  }
}
