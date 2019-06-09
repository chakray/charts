import { Injectable } from '@angular/core';

import { ChartEngine } from '@chakray/charts';
import * as charts from 'chartist';

@Injectable({ providedIn: 'root' })
export class Chartist extends ChartEngine {
  name = 'chartist';
  init(el, data, { type, ...opts }) {
    return charts[type](el, data, opts);
  }
}

