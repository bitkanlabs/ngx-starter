import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    enableTracing     : false, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
