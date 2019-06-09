import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from '@chakray/charts';
import { DemoTag } from './demo.tag';

const routes: Routes = [{
  path: '',
  component: DemoTag
}];

@NgModule({
  imports: [
    ChartsModule,
    RouterModule.forChild(routes)],
  declarations: [DemoTag],
  exports: [RouterModule]
})
export class DemoMod {}
