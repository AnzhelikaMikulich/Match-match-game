import { BaseComponent } from "./base-component";
import { FormInput } from "./form-input";
import globalState from "../shared/services/globalState";

export class Settings extends BaseComponent {
  private readonly inputs: FormInput[];

  constructor() {
    super("div", ["settings-container"]);
    this.inputs = [

      new FormInput("size of field", [], "set-size", "range", false, "", "0", [
        "setting-input",
      ]),
      new FormInput("type of cards", [], "set-type", "range", false, "", "1", [
        "setting-input",
      ]),

    ];
    this.inputs.forEach((input) => this.element.appendChild(input.element));
  }

  initInputs() {
    const sizeInput = <HTMLInputElement>this.inputs[0].input.element;
    const typeInput = <HTMLInputElement>this.inputs[1].input.element;


    sizeInput.min = "4";
    sizeInput.step = "2";
    sizeInput.max = "8";
    typeInput.min = "0";
    typeInput.max = "1";

    sizeInput.addEventListener("change", (ev) => {
      globalState.settings.number =
        Number((<HTMLInputElement>ev.target).value) ** 2 / 2;
    });
    typeInput.addEventListener("change", (ev) => {
      globalState.settings.type = Number((<HTMLInputElement>ev.target).value);
    });

  }
}
