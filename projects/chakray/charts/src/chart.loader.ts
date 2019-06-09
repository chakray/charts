import { Inject, Injectable } from '@angular/core';
import { ChartEngine } from './chart.engine';

class ChartOptions {
  engine = null;
}

@Injectable()
export class ChartLoader {
  handle: any;
  engine: ChartEngine;
  constructor(@Inject(ChartEngine) private engines: ChartEngine[]) { }
  init(el, data, opts = new ChartOptions()) {
    const { engine } = opts;
    if (!engine) {
      this.engine = this.engines[0];
    } else {
      this.engine = this.engines.find(eng => eng.name === engine);
      if (!this.engine) {
        console.error(data, opts);
        throw new Error('Provide ChartEngine for this chart');
      }
    }
    this.handle = this.engine.init(el, data, opts) as any;
  }
  reload(data, opts = new ChartOptions()) {
    if (!this.handle) { return; }
    this.engine.reload(this.handle, data, opts);
  }
}
