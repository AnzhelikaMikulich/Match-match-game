import { AboutWrapper } from './components/about/about-wrapper';
import { Game } from './components/game/game';
import { Header } from './components/header';
import { MainContainer } from './components/main-container';
import { Settings } from './components/settings';
import { ImageCategoryModel } from './models/image-category-models';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly main: MainContainer;

  private readonly about: AboutWrapper;

  private readonly settings: Settings;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.about = new AboutWrapper();
    this.game = new Game();
    this.main = new MainContainer();
    this.settings = new Settings();

    this.rootElement.appendChild(this.header.element);

    this.rootElement.appendChild(this.main.element);
  }

  buildFirstPage() {
    this.buildAboutPage();
    this.settings.initInputs();
    this.header.Form.element.addEventListener('submit', () => this.about.deployBtn(this.about.element));
    this.about.deployBtn(this.about.element);
    this.about.playbtn.element.addEventListener('click', () => this.start());
    this.header.Container.nav.list.About.element.addEventListener('click', () => this.buildAboutPage());
    this.header.Container.nav.list.Settings.element.addEventListener(
      'click',
      () => this.buildSettingsPage(),
    );
  }

  buildSettingsPage() {
    this.cleanMain();
    this.main.element.appendChild(this.settings.element);
    this.header.Container.nav.list.goToPage('settings');
  }

  buildAboutPage() {
    this.cleanMain();
    this.main.element.appendChild(this.about.element);
    this.header.Container.nav.list.goToPage('about');
  }

  cleanMain() {
    this.main.element.innerHTML = '';
  }

  async start() {
    this.cleanMain();
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = categories[0].images.map(
      (name) => `${cat.category}/${name}`,
    );
    this.main.element.appendChild(this.game.element);
    this.game.newGame(images);
  }
}
