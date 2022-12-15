import { GameData } from "./data.js";

export const OnCookieClick = (event) => {
  if (GameData.currentClickCooldown > 0) {
    const delta = Date.now() - GameData.lastClick;
    GameData.currentClickCooldown -= delta;
    if (GameData.currentClickCooldown > 0) {
      return false;
    }
  } else {
    GameData.lastClick = Date.now();
    GameData.currentClickCooldown = GameData.clickCooldown;
  }
  if (!GameData.canClick) {
    return false;
  }

  GameData.cookies += GameData.clickPower;
  GameData.clicks++;
  return true;
};
