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
         <select>
            <option>4x4</option>
            <option>6x6</option>
            <option>7x7</option>
          </select>
      </div>
      <div class="small-decoration-line"></div>
      <div class="setting__cards-number">
          <h2>Difficulty</h2>
          <label>select game type</label>
           <select>
              <option>City</option>
              <option>Animals</option>
              </select>
        </div>
      <div class="small-decoration-line"></div>
    </div>
    `;
  }
}
