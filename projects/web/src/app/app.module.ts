import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule }             from '@angular/flex-layout';

import { NgxsModule }                    from '@ngxs/store';
import { NgxsRouterPluginModule }        from '@ngxs/router-plugin';
// import { NgxsFormPluginModule }        from '@ngxs/form-plugin';
// import { NgxsStoragePluginModule }     from '@ngxs/storage-plugin';
// import { NgxsWebsocketPluginModule }   from '@ngxs/websocket-plugin';
import { NgxsLoggerPluginModule }        from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';
import { ServiceWorkerModule }              from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { environment }      from '@env';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule.withServerTransition({ appId: 'ks-web' }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,

    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot(),
    // NgxsFormPluginModule.forRoot(),
    // NgxsStoragePluginModule.forRoot(),
    // NgxsWebsocketPluginModule.forRoot(),
    environment.production === false ? NgxsLoggerPluginModule.forRoot() : [],
    environment.production === false ? NgxsReduxDevtoolsPluginModule.forRoot() : [],

    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient] } }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers   : [],
  bootstrap   : [AppComponent],
})
export class AppModule {
}
