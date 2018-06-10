import { Component } from '@angular/core';
import { I18nService } from './i18n.service';

@Component({
  selector: 'ksw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ksw';

  constructor(private i18n: I18nService) {}
}
