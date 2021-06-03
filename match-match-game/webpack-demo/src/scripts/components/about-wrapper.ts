import { BaseComponent } from './base-component';
import { AboutSection } from './about-section';
import { Button } from './button';

export class AboutWrapper extends BaseComponent {
	private readonly sections: AboutSection[];

	readonly playbtn: Button;

	constructor() {
		super('div', ['about-wrapper']);
		this.sections = [
			new AboutSection('1 Register new player in game'),
			new AboutSection('2 Configure your game settings'),
			new AboutSection('3 Start you new game! Remember card positions and match it before times up.'),
		];
		this.playbtn = new Button(['play-btn'], 'Start ', 'play');
		this.element.innerHTML = `<h3 class="about-h3">How to play a game</h3>`;
		this.sections.forEach((section) => this.element.appendChild(section.element));
	}

	deployBtn(place: HTMLElement) {
		place.appendChild(this.playbtn.element);
	}
}
