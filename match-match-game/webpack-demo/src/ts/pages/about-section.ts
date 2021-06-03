import { BaseComponent } from '../components/base-component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <h1>How to play?</h1>
      <div class="about__wrapper">
        <div class="about__wrapper__number">1</div>
        <div class="about__wrapper__content">Register new player in game</div>
        <div class="about__wrapper__image one"></div>
      </div>
      <div class="about__wrapper" id="little-section">
        <div class="about__wrapper__number">2</div>
        <div class="about__wrapper__content">Configure your game settings</div>
        <div class="about__wrapper__image two"></div>
      </div>
      <div class="about__wrapper">
        <div class="about__wrapper__number">3</div>
        <div class="about__wrapper__content">Start you new game! Remember card positions and match it before times up.</div>
        <div class="about__wrapper__image three"></div>
      </div>
    `;
  }
}
