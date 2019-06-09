import { Injectable } from '@angular/core';

import { ChartEngine } from '@chakray/charts';

@Injectable({ providedIn: 'root' })
export class D3Engine extends ChartEngine {
  name = 'd3';
  init(el, data, { type, ...opts }) {
    return {};
  }
}


