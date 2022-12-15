import { CookieSprite, CookieStatsDisplay } from "./gameElements.js";
const display = document.querySelector(".game-display");

export class Renderer {
  constructor(eventMapper) {
    this.cookie = new CookieSprite();
    this.cookieDisplay = new CookieStatsDisplay();
    this.eventMapper = eventMapper;
  }

  addElements(elements) {
    for (const element of elements) {
      display.appendChild(element);
    }
  }

  render() {
    const cookie = this.cookie.createElement();
    this.eventMapper.mapCookieClick(cookie);
    this.eventMapper.mapUpdate(cookie, this.cookieDisplay);

    const cookieDisplay = this.cookieDisplay.render();

    this.addElements([cookie, cookieDisplay]);
  }
}
