import { DatabaseAdminPage } from './app.po';

describe('database-admin App', () => {
  let page: DatabaseAdminPage;

  beforeEach(() => {
    page = new DatabaseAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
