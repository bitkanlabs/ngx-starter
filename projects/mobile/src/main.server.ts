import { enableProdMode } from '@angular/core';

import { environment } from '@mob/env';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
