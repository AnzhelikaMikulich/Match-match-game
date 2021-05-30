import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { TimerContainer } from '../timer/timer-container';
import globalState from '../../shared/services/globalState';

export class Game extends BaseComponent {
  private scoreData = {
    total: 0,
    mistakes: 0,
    left: globalState.settings.number,
    time: 0,
  };

  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private timer: TimerContainer;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.timer = new TimerContainer();
    this.element.appendChild(this.timer.element);

    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardsField.addCards(cards);
    this.timer.timer.setShowTimer();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.handleMistake(this.activeCard, card);
      await delay(globalState.settings.FLIP_DELAY * 1000);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.element.classList.remove('red-card');
      card.element.classList.remove('red-card');
    } else {
      this.handleHit(this.activeCard, card);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  handleMistake(card1: Card, card2: Card) {
    card2.element.classList.add('red-card');
    card1.element.classList.add('red-card');
    this.scoreData.mistakes += 1;
    this.scoreData.total += 1;
    console.log(this.scoreData);
  }

  handleHit(card1: Card, card2: Card) {
    card1.element.classList.add('green-card');
    card2.element.classList.add('green-card');
    this.scoreData.total += 1;
    this.scoreData.left -= 1;
    console.log(this.scoreData);
  }
}
