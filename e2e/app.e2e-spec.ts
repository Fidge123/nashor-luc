import { NashorLucPage } from './app.po';

describe('nashor-luc App', () => {
  let page: NashorLucPage;

  beforeEach(() => {
    page = new NashorLucPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('luc works!');
  });
});
