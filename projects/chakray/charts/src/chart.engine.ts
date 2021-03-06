import { Injectable } from '@angular/core';

function copy(o) {
  return JSON.parse(JSON.stringify(o));
}

@Injectable()
export class ChartEngine {
  name = '';
  opts: object;
  init(el, data, opts) {
    opts = Object.assign(copy(this.opts), opts);
    return {} as any;
  }
  reload(handle, data, opts) {
  }
  copy(o) {
    return Object.assign(copy(this.opts || {}), o);
  }
}
