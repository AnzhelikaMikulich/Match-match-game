import { BaseComponent } from './base-component';

export class NavItem extends BaseComponent {
  constructor(page: string, text: string) {
    super('div', ['nav-item']);
    this.element.innerHTML = `
       <div class="${page}" id="${page}-page" ></div>
       <h3> ${text}</h3>
    `;
  }
}
