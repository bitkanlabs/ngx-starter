import { Component }   from '@angular/core';
import { I18nService } from './i18n.service';

@Component({
  selector   : 'mob-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss'],
})
export class AppComponent {

  title = 'mob';

  constructor(private i18n: I18nService) {
  }
}
