import { ScAngularCliPage } from './app.po';

describe('sc-angular-cli App', () => {
  let page: ScAngularCliPage;

  beforeEach(() => {
    page = new ScAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
