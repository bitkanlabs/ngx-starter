import { OnDestroy } from '@angular/core';
import { Subject }   from 'rxjs';

export class Unsubscriber implements OnDestroy {

  protected readonly destroy$$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$$.next(true);
    this.destroy$$.unsubscribe();
  }

}
