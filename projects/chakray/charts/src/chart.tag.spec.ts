import { Spec } from '@chakray/utils/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ChartLoader } from './chart.loader';
import { ChartEngine } from './chart.engine';
import { CcChartTag as Tag } from './chart.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
  ],
  providers: [
    ChartLoader,
    { provide: ChartEngine, multi: true }
  ]
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
