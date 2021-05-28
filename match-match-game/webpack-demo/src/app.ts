import { AboutWrapper } from './components/about/about-wrapper';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-models';

export class App {
  private readonly game: Game;

  private readonly about: AboutWrapper;

  constructor(private readonly rootElement: HTMLElement) {
    this.about = new AboutWrapper();
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = categories[0].images.map(
      (name) => `${cat.category}/${name}`,
    );
    this.game.newGame(images);
  }
}
