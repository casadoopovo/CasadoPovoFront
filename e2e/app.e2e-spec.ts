import { HackfestPage } from './app.po';

describe('hackfest App', () => {
  let page: HackfestPage;

  beforeEach(() => {
    page = new HackfestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
