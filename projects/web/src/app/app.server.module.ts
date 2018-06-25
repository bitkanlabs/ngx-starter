import { NgModule }                                from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { FlexLayoutServerModule }                  from '@angular/flex-layout/server';
import { ModuleMapLoaderModule }                   from '@nguniversal/module-map-ngfactory-loader';

import { AppModule }    from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports  : [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    FlexLayoutServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
