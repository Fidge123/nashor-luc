import { browser, element, by } from 'protractor';

export class NashorLucPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('luc-root h1')).getText();
  }
}
