import { BaseComponent } from './base-component';
import { Form } from './form';
import { HeaderContainer } from './header-container';

export class Header extends BaseComponent {
	private readonly challengerform: Form;

	private readonly container: HeaderContainer;

	get Form() {
		return this.challengerform;
	}

	get Container() {
		return this.container;
	}

	constructor() {
		super('header', ['header']);
		this.challengerform = new Form(['challenger-form']);
		this.container = new HeaderContainer();
		this.element.appendChild(this.container.element);
	}

	createHeader() {
		this.challengerform.container.createBtns();
		this.challengerform.container.createInputs();
		this.challengerform.container.createSimpleInput();
		this.createElementsModal();

		document.getElementById('register').addEventListener('click', this.visibleModal);
		this.container.nav.list.goToPage('about');
		this.challengerform.element.addEventListener('submit', (ev) => {
			ev.preventDefault();
			const img = (<HTMLImageElement>document.getElementById('preview')).src;
		});
		this.challengerform.container.Btns[0].element.addEventListener('click', () => {
			this.challengerform.element.remove();
			this.cleanForm();
		});
	}

	initForm() {
		this.challengerform.container.element.innerHTML = `
         <div class="form-wrapper">
         <div class="form-head">
          <h3 class="form-head-h3">NEW PLAYER</h3>
         </div>
         <div class="form-content">
               <div class="form-content-inputs">
               </div>
               
         </div>
         <div class="form-footer">
        </div>
        </div>
    `;
		const inputs = this.challengerform.container.element.querySelector('.form-content-inputs');
		this.challengerform.container.Inputs.forEach((input) => inputs.appendChild(input.element));
		const footer = this.challengerform.container.element.querySelector('.form-footer');
		footer.appendChild(this.challengerform.container.SipleInputs[1].element);
		this.challengerform.container.Btns.forEach((btn) => footer.appendChild(btn.element));
		footer.prepend(this.challengerform.container.SipleInputs[0].element);
	}

	cleanForm() {
		this.challengerform.container.SipleInputs[0].cleanInput();
		this.challengerform.container.Inputs.forEach((input) => input.input.cleanInput());
	}

	visibleModal = () => {
		this.initForm();
		this.element.appendChild(this.challengerform.element);
	};

	createElementsModal() {
		this.challengerform.container.addInput('First Name', [], 'formname', 'text', true, 'Skarlett', '', ['form-input']);
		this.challengerform.container.addInput('Last Name', [], 'formsurname', 'text', true, 'Overkill', '', [
			'form-input',
		]);
		this.challengerform.container.addInput('E-mail', [], 'formmail', 'email', true, 'ScarlettKill@gmail.com', '', [
			'form-input',
		]);
		this.challengerform.container.addSimpleInput([], 'file', 'file');
		this.challengerform.container.addSimpleInput([], 'submit', 'submit', false, 'CONFIRM', 'CONFIRM');
		this.challengerform.container.addBtn(['cancel'], 'NO THANKS', 'cancel');
	}
}
