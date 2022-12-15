import { OnCookieClick } from "./gameLogic/clickLogic.js";

export class EventMapper {
  constructor() {}

  mapCookieClick(element) {
    element.addEventListener("click", () => {
      if (OnCookieClick(null)) {
        element.style.animation = "none";
        element.offsetHeight;
        element.style.animation = null;
      }
    });
  }

  mapUpdate(element, other) {
    element.addEventListener("click", () => {
      other.update();
    });
  }
}
