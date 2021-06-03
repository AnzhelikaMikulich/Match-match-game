import { BaseComponent } from './base-component';
import { HeaderNavItem } from './header-nav-item';

export class HeaderNavList extends BaseComponent {
  private paths: HeaderNavItem[];

  get About() {
    return this.paths[0];
  }

  get Best() {
    return this.paths[1];
  }

  get Settings() {
    return this.paths[2];
  }

  constructor() {
    super('ul', ['header-nav-list']);
    this.paths = [
      new HeaderNavItem('about', 'About Game'),
      new HeaderNavItem('best', 'Best Score'),
      new HeaderNavItem('settings', 'Game Settings'),
    ];
    this.paths.forEach((path) => this.element.appendChild(path.element));
  }

  goToPage(path: string) {
    this.paths.forEach((pth) => (pth.Name === path ? pth.becomeActive() : pth.becomeNonActive()));
  }
}
