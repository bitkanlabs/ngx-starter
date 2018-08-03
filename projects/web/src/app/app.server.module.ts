import { NgModule }                                from '@angular/core';
import { RouterModule, Routes }                    from '@angular/router';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { FlexLayoutServerModule }                  from '@angular/flex-layout/server';
import { ModuleMapLoaderModule }                   from '@nguniversal/module-map-ngfactory-loader';

import { AppModule }         from './app.module';
import { AppComponent }      from './app.component';
import { AppShellComponent } from './app-shell.component';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports     : [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    FlexLayoutServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap   : [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {
}
