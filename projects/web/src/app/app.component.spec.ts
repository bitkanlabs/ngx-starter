import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { I18nService } from './i18n.service';
import { createTranslateLoader } from './app.module';

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_ZHT = require('../assets/i18n/zh-cmn-Hant.json');
const TRANSLATIONS_ZHS = require('../assets/i18n/zh-cmn-Hans.json');

describe('AppComponent', () => {

  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient] } }),
      ],
      providers   : [
        I18nService,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'web'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('web');
  }));
  it('should render title in a h1 tag', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('en');
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    http.expectOne('./assets/i18n/en.json').flush(TRANSLATIONS_EN);
    http.verify();
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to web!');
  }));
});
