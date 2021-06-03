import { BaseComponent } from './base-component';

export class AboutSection extends BaseComponent {
	constructor(text: string) {
		super('div', ['about']);
		this.element.innerHTML = `
    <p>${text}</p> 
    `;
	}
}
