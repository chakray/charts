import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsMod, ChartEngine } from '@chakray/charts';

import { Chartist } from './chartist';
import { DemoTag } from './demo.tag';

const routes: Routes = [{
  path: '',
  component: DemoTag
}];

@NgModule({
  imports: [
    ChartsMod,
    RouterModule.forChild(routes)],
  providers: [
    { provide: ChartEngine, useClass: Chartist, multi: true }
  ],
  declarations: [DemoTag],
  exports: [RouterModule]
})
export class DemoMod {}
