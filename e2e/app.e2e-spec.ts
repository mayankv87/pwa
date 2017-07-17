import { PwaAppPage } from './app.po';

describe('pwa-app App', () => {
  let page: PwaAppPage;

  beforeEach(() => {
    page = new PwaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
