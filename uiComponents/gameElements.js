import { ImagePaths } from "./spritePaths.js";
import { GameData } from "../gameLogic/data.js";

class UiComponent {
  constructor() {}
}

export class CookieSprite extends UiComponent {
  constructor() {
    super();
    this.imagePath = ImagePaths.cookieSprite;
  }

  createElement() {
    const img = document.createElement("img");
    img.src = this.imagePath;
    img.className = "cookieImage";
    img.classList.add("clicked");
    return img;
  }
}

export class CookieStatsDisplay extends UiComponent {
  constructor() {
    super();
    this.display = document.createElement("div");
    this.cookies = document.createElement("p");

    this.display.className = "cookieDisplay";

    this.display.appendChild(this.cookies);
  }

  render() {
    return this.display;
  }

  update() {
    this.cookies.innerHTML = GameData.cookies;
    console.log(GameData.cookies);
  }
}
