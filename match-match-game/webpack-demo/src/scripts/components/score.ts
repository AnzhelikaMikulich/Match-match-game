import { BaseComponent } from "./base-component";

export class Score extends BaseComponent {
  constructor(text: string) {
    super("div", ["about"]);
    this.element.innerHTML = `
    <h3>Top 10</h3> 
    `;
  }
}
