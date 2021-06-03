import { Game } from "./components/game";
import { ImageCategory } from "./models/image-category-model";
import globalState from "../shared/services/globalState";
import { Header } from "./components/header";
import { MainContainer } from "./components/main-container";
import { AboutWrapper } from "./components/about-wrapper";
import { Settings } from "./components/settings";
import { ScorePage } from "./components/score-page";

export class App {
  private readonly userData = {
    name: "",
    surname: "",
    mail: "",
    img: "",
    score: 0,
  };

  private readonly game: Game;
  private readonly header: Header;
  private readonly main: MainContainer;
  private readonly about: AboutWrapper;
  private readonly settings: Settings;
  private readonly score: ScorePage;
  private request: IDBOpenDBRequest;

  constructor(rootElement: HTMLElement) {
    this.score = new ScorePage();
    this.settings = new Settings();
    this.about = new AboutWrapper();
    this.main = new MainContainer();
    this.game = new Game();
    this.header = new Header();
    this.request = indexedDB.open("AnzhelikaMikulich", 1);
    rootElement.appendChild(this.header.element);
    this.header.createHeader();
    rootElement.appendChild(this.main.element);
  }

  buildFirstPage() {
    this.request.onupgradeneeded = function () {
      const DB = this.result;
      if (!DB.objectStoreNames.contains("profiles")) {
        DB.createObjectStore("profiles", { autoIncrement: true });
      }
    };
    this.request.onsuccess = () => {
      console.log("success");
    };
    this.request.onerror = function () {
      console.log("error");
    };
    this.buildAboutPage();
    this.settings.initInputs();
    this.header.Form.element.addEventListener("submit", this.defineProfile);
    this.header.Form.element.addEventListener("submit", () =>
      this.about.deployBtn(this.about.element)
    );
    this.about.playbtn.element.addEventListener("click", () =>
      this.startGame()
    );
    this.header.Container.nav.list.About.element.addEventListener("click", () =>
      this.buildAboutPage()
    );
    this.header.Container.nav.list.Settings.element.addEventListener(
      "click",
      () => this.buildSettingsPage()
    );
    this.header.Container.nav.list.Best.element.addEventListener("click", () =>
      this.buildScorePage()
    );
   
  }

  buildScorePage() {
    this.cleanMain();
    this.main.element.appendChild(this.score.element);
    this.header.Container.nav.list.goToPage("best");
  }

  buildSettingsPage() {
    this.cleanMain();
    this.main.element.appendChild(this.settings.element);
    this.header.Container.nav.list.goToPage("settings");
  }

  buildAboutPage() {
    this.cleanMain();
    this.main.element.appendChild(this.about.element);
    this.header.Container.nav.list.goToPage("about");
  }

  cleanMain() {
    this.main.element.innerHTML = "";
  }


  defineProfile = () => {
    this.userData.name = (<HTMLInputElement>(
      document.getElementById("formname")
    )).value;
    this.userData.surname = (<HTMLInputElement>(
      document.getElementById("formsurname")
    )).value;
    this.userData.mail = (<HTMLInputElement>(
      document.getElementById("formmail")
    )).value;
    this.header.Form.element.remove();
  };

  async startGame() {
    this.cleanMain();
    const res = await fetch("../images/images.json");
    const categories: ImageCategory[] = await res.json();
    const cat = categories[globalState.settings.type];
    const images = [];
    for (let i = 0; i < globalState.settings.number; i += 1)
      images.push(`${cat.type}/${cat.images[i]}`);
    this.main.element.appendChild(this.game.element);
    this.game.InitGame(images);
  }
}
