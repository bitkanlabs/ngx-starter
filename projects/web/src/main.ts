import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule }   from './app/app.module';
import { environment } from '@web/env';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

document.addEventListener('DOMContentLoaded', () => {
  bootstrap().catch(err => console.log(err));
});
