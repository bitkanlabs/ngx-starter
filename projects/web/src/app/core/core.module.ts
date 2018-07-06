import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatPaginatorIntl }             from '@angular/material';

import { SharedModule } from '@web/shared';

import { throwIfAlreadyLoaded } from './module-import.guard';
import { PaginatorIntlService } from './services/paginator-intl.service';

@NgModule({
  imports     : [
    SharedModule,
  ],
  declarations: [],
  providers   : [
    { provide: MatPaginatorIntl, useClass: PaginatorIntlService },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
