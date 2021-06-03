import { BaseComponent } from "./base-component";


export class ScorePage extends BaseComponent {

  constructor() {
    super("div", ["scorepage-container"]);
    this.element.innerHTML = `<h3 class="scorepage-h3">Best players</h3>`;
  }}