import { ElementRef, AfterViewInit, HostBinding,
  Output, EventEmitter, Input, Component } from '@angular/core';

import { ChartLoader } from './chart.loader';

@Component({
  selector: 'cc-chart',
  template: '',
  providers: [ChartLoader]
})
export class CcChartTag implements AfterViewInit {
  @Input() set data(v) {
    this._data = v;
    this.reload();
  }
  @Input() set opts(v) {
    this._opts = v;
    this.reload();
  }
  @Output() event = new EventEmitter();
  get nel() {
    return this.el.nativeElement;
  }
  private _data: any;
  private _opts: any;
  constructor(
    private _ld: ChartLoader,
    private el: ElementRef) {}
  ngAfterViewInit() {
    this._ld.init(this.nel, this._data, this._opts);
    const { name = 'null' } = this._ld.engine || {};
    this.nel.classList.toggle(name);
    this.emit('init', this._ld.handle);
  }
  reload() {
    this._ld.reload(this._data, this._opts);
    this.emit('reloaded', this._ld.handle);
  }
  emit(name, data) {
    this.event.emit({ name, data });
  }
}
