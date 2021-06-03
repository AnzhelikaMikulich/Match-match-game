import { BaseComponent } from "./base-component";
import { FormInput } from "./form-input";
import globalState from "../../shared/services/globalState";
import { Output } from "./output";

export class Settings extends BaseComponent {
  private readonly inputs: FormInput[];

  private readonly outputs: Output[];

  constructor() {
    super("div", ["settings-container"]);
    this.inputs = [
      new FormInput("size of field", [], "set-size", "range", false, "", "4", [
        "setting-input",
      ]),
      new FormInput("type of cards", [], "set-type", "range", false, "", "0", [
        "setting-input",
      ]),
     
    ];
    this.outputs = [
      new Output("4 x 4", "out-size"),
      new Output("city", "out-type"),
    ];
    this.inputs.forEach((input) => this.element.appendChild(input.element));
    for (let i = 0; i < this.outputs.length; i += 1) {
      this.inputs[i].element.append(this.outputs[i].element);
    }
  }

  initInputs() {
    const sizeInput = <HTMLInputElement>this.inputs[0].input.element;
    const typeInput = <HTMLInputElement>this.inputs[1].input.element;
    
    sizeInput.min = "4";
    sizeInput.step = "2";
    sizeInput.max = "8";
    typeInput.min = "0";
    typeInput.max = "1";
    sizeInput.addEventListener("input", (ev) => {
      globalState.settings.number =
        Number((<HTMLInputElement>ev.target).value) ** 2 / 2;
    });
    typeInput.addEventListener("input", (ev) => {
      globalState.settings.type = Number((<HTMLInputElement>ev.target).value);
      (<HTMLOutputElement>this.outputs[1].element).value = this.defineType(
        globalState.settings.type
      );
    });
   
  }

  defineType = (type: number) => {
    switch (type) {
      case 0:
        return "city";
      case 1:
        return "animal";
      default:
        return "city";
    }
  };

}
