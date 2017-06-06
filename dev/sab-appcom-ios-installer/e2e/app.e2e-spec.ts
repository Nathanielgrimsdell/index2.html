import { SabAppcomIosInstallerPage } from './app.po';

describe('sab-appcom-ios-installer App', function() {
  let page: SabAppcomIosInstallerPage;

  beforeEach(() => {
    page = new SabAppcomIosInstallerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
