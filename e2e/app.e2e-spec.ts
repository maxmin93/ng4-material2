import { NgMaterial2Page } from './app.po';

describe('ng-material2 App', () => {
  let page: NgMaterial2Page;

  beforeEach(() => {
    page = new NgMaterial2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
