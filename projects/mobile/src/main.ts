import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule }   from '@mob/app/app.module';
import { environment } from '@mob/env';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

document.addEventListener('DOMContentLoaded', () => {
  bootstrap().catch(err => console.log(err));
});
