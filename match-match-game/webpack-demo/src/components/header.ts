import { BaseComponent } from './base-component';

import { HeaderContainer } from './header-container';

export class Header extends BaseComponent {
  private readonly container: HeaderContainer;

  Form: any;

  get Container() {
    return this.container;
  }

  constructor() {
    super('header', ['header']);
    this.container = new HeaderContainer();
    this.element.appendChild(this.container.element);
  }
}
