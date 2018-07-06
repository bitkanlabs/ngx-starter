import { Injectable }       from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PaginatorIntlService extends MatPaginatorIntl {

  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `${page + 1} / ${Math.ceil(length / pageSize)}`;
  };

  constructor(private translate: TranslateService) {
    super();
    translate.get([
      'MAT.PAGINATOR.FIRST_PAGE',
      'MAT.PAGINATOR.PREVIOUS_PAGE',
      'MAT.PAGINATOR.NEXT_PAGE',
      'MAT.PAGINATOR.LAST_PAGE',
    ]).subscribe((labels: string[]) => {
      this.firstPageLabel = labels['MAT.PAGINATOR.FIRST_PAGE'];
      this.previousPageLabel = labels['MAT.PAGINATOR.PREVIOUS_PAGE'];
      this.nextPageLabel = labels['MAT.PAGINATOR.NEXT_PAGE'];
      this.lastPageLabel = labels['MAT.PAGINATOR.LAST_PAGE'];
      this.changes.next();
    });
  }

}
