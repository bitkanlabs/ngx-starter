import { enableProdMode } from '@angular/core';

import { environment } from '@web/env';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
