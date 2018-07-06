import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { I18nService }      from '@mob/app/i18n.service';

@Component({
  selector   : 'mob-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss'],
})
export class AppComponent {

  constructor(private title: Title, private i18n: I18nService, private translate: TranslateService) {
    translate.get('APP.TITLE').subscribe((newTitle) => {
      title.setTitle(newTitle);
    });
  }

}
