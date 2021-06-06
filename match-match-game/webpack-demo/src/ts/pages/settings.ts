import { BaseComponent } from '../components/base-component';

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    this.element.innerHTML = `
    <h1>Settings</h1>
    <div class="setting-wrap">
      <h2>Game cards</h2>
      <div class="setting-wrap__cards-type">
         <label>select game cards type</label>
         <select id = "fieldType">
            <option value="4">4x4</option>
            <option value="5">5x5</option>
            <option value="6">6x6</option>
          </select>
      </div>
      <div class="small-decoration-line"></div>
      <div class="setting__cards-number">
          <h2>Difficulty</h2>
          <label>select game type</label>
           <select id = "cardType">
              <option value="0">City</option>
              <option value="1">Animals</option>
              </select>
        </div>
      <div class="small-decoration-line"></div>
    </div>
    `;
  }
}
