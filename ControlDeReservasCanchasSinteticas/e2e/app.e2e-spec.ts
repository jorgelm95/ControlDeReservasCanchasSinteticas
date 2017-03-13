import { ControlDeReservasCanchasSinteticasPage } from './app.po';

describe('control-de-reservas-canchas-sinteticas App', function() {
  let page: ControlDeReservasCanchasSinteticasPage;

  beforeEach(() => {
    page = new ControlDeReservasCanchasSinteticasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
