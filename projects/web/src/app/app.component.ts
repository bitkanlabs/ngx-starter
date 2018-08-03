import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title }                              from '@angular/platform-browser';
import { TranslateService }                   from '@ngx-translate/core';
import { LoadingBarService }                  from '@ngx-loading-bar/core';
import { Gtag }                               from 'angular-gtag';

import { timer }          from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { I18nService } from '@web/app/i18n.service';

@Component({
  selector       : 'web-root',
  templateUrl    : './app.component.html',
  styleUrls      : ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {

  readonly progress$ = this.loadingBar.progress$.pipe(
    withLatestFrom(timer(250, 250), (n) => n), // 规避进度条不消失的问题
  );

  constructor(private title: Title,
              private i18n: I18nService,
              private gtag: Gtag,
              private translate: TranslateService,
              private loadingBar: LoadingBarService,
  ) {
    translate.get('APP.TITLE').subscribe((newTitle) => {
      title.setTitle(newTitle);
    });
  }

}
