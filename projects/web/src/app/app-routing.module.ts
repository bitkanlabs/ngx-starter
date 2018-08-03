import { NgModule }                                              from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingBarHttpClientModule }                            from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule }                                from '@ngx-loading-bar/router';

import { environment } from '@web/env';

const ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing     : false, // <-- debugging purposes only
      preloadingStrategy: environment.preload ? PreloadAllModules : NoPreloading,
    }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
  ],
  exports: [
    RouterModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
  ],
})
export class AppRoutingModule {
}
