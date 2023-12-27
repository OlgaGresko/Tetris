import Game from "./game";
import View from "./view";

const root = document.querySelector("#root");

const game = new Game();
const view = new View(root, 320, 640, 20, 10);


window.game = game;
window.view = view;

view.renderPlayfield(game.playfield)