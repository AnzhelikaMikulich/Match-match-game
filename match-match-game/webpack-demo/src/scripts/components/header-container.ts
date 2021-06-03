import { BaseComponent } from './base-component';
import { HeaderNav } from './header-nav';
import { ChallengerContainer } from './challenger-container';

export class HeaderContainer extends BaseComponent {
	readonly nav: HeaderNav;

	readonly btn: ChallengerContainer;

	constructor() {
		super('div', ['header-container']);
		this.nav = new HeaderNav();
		this.btn = new ChallengerContainer();
		this.element.innerHTML = `
        <div class="header-container">
             <h3 class="logo-text">MATCH-MATCH</h3>
         </div>   
    `;
		this.element.append(this.nav.element);
		this.element.append(this.btn.element);
	}
}
