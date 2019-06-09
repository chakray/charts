import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ChHeroMod, heroConfig, ChMarkedTabTag as MarkedTag } from '@chakray/hero';
import { Head } from '@chakray/utils';

import { AppLoader } from './app.loader';
import { heroCfg } from './app.config';

import { AppBaseTag } from './base/base.tag';

const routes: Routes = [{
//   path: '', pathMatch: 'full', redirectTo: 'gmaps'
// }, {
  path: 'setup', component: MarkedTag, resolve: { loader: AppLoader }
}, {
  path: 'demo', component: AppBaseTag, loadChildren: 'src/demo/demo.mod#DemoMod'
}, {
  path: '**', pathMatch: 'full', redirectTo: '/'
}];

@NgModule({
  declarations: [
    AppBaseTag
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChHeroMod,
  ],
  providers: [
    Head,
    {
      provide: heroConfig, useValue: heroCfg
    }],
  exports: [
    ChHeroMod,
    RouterModule
  ]
})
export class AppRouting { }
