import { BaseComponent } from './base-component';
import { Button } from './button';

export class ChallengerContainer extends BaseComponent {
  private readonly btn: Button;

  constructor() {
    super('div', ['challenger-container']);
    this.btn = new Button(
      ['header-btn'],
      'Register new player',
      'register',
    );
    this.element.appendChild(this.btn.element);
  }

  changeToImg() {
    this.btn.element.remove();
    this.element.innerHTML = `
    <div class="header-profile"></div>
    `;
  }
}
