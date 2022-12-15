import { Renderer } from "./uiComponents/renderer.js";
import { EventMapper } from "./eventListener.js";

class Game {
  constructor() {
    this.eventMapper = new EventMapper();
    this.renderer = new Renderer(this.eventMapper);
  }

  update() {
    this.renderer.render();
  }
}

const game = new Game();
game.update();
