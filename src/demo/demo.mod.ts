import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChartsMod, ChartEngine } from '@chakray/charts';

import { ChartistEngine, D3Engine } from './engine';
import { DemoTag } from './demo.tag';

const routes: Routes = [{
  path: '',
  component: DemoTag
}];

@NgModule({
  imports: [
    CommonModule,
    ChartsMod,
    RouterModule.forChild(routes)],
  providers: [
    { provide: ChartEngine, useClass: ChartistEngine, multi: true },
    { provide: ChartEngine, useClass: D3Engine, multi: true }
  ],
  declarations: [DemoTag],
  exports: [RouterModule]
})
export class DemoMod {}
