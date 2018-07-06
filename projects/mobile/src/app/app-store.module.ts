import { NgModule }          from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

import { NGXS_PLUGINS, NgxsModule }      from '@ngxs/store';
import { NgxsRouterPluginModule }        from '@ngxs/router-plugin';
import { NgxsStoragePluginModule }       from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsFormPluginModule }       from '@ngxs/form-plugin';
// import { NgxsLoggerPluginModule }     from '@ngxs/logger-plugin';
// import { NgxsWebsocketPluginModule }  from '@ngxs/websocket-plugin';
import { ErrorPlugin }                   from '@mob/app/error.plugin';

import { environment } from '@mob/env';

@NgModule({
  imports  : [
    MatSnackBarModule,
    NgxsModule.forRoot([]),
    NgxsStoragePluginModule.forRoot({ key: [] }),
    NgxsRouterPluginModule.forRoot(),
    // NgxsFormPluginModule.forRoot(),
    // NgxsWebsocketPluginModule.forRoot(),
    // environment.production === false ? NgxsLoggerPluginModule.forRoot() : [],
    environment.production === false ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
  ],
  providers: [
    {
      provide : NGXS_PLUGINS,
      useClass: ErrorPlugin,
      multi   : true,
    },
  ],
})
export class AppStoreModule {
}
