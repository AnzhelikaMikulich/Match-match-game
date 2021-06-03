import { BaseComponent } from '../components/base-component';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `
      <h1>Best players</h1>
      <div class="score-wrap">
        <div class="top-score">
         <div class="top-score__container">
            <div class="name">Anzhelika Mikulich</div>
            <div class="email">anzhelika.flyorko@gmail.com</div>
         </div>
         <div class="top-score__result">Score: <span class="result-number">120</span></div>
        </div>
        <div class="decoration-line"></div>
      </div>
    `;
  }
}
