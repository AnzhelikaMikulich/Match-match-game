import { BaseComponent } from '../base-component';
import './about.scss';

export class AboutSection extends BaseComponent {
  constructor(text: string) {
    super('div', ['about-section']);
    this.element.innerHTML = `
    <p>${text}</p>
    `;
  }
}
