import { NgModule }                                              from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { environment } from '@web/env';

const ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing     : false, // <-- debugging purposes only
      preloadingStrategy: environment.preload ? PreloadAllModules : NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
