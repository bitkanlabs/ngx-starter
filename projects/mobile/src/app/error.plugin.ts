import { Injectable }  from '@angular/core';
import { NgxsPlugin }  from '@ngxs/store';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorPlugin implements NgxsPlugin {

  constructor(private snackBar: MatSnackBar) {
  }

  handle(state, event, next) {
    if (event.error) {
      this.snackBar.open(event.error, '', {
        panelClass        : ['pane-error'],
        duration          : 600,
        verticalPosition  : 'top',
        horizontalPosition: 'center',
      });
    }
    return next(state, event);
  }
}
