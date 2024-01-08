import Game from './game';
import View from './view';
import Controller from './controller';

const GRID_ROWS = 20;
const GRID_COLUMNS = 10;

const element = document.querySelector('#root');

const game = new Game(GRID_ROWS, GRID_COLUMNS);
const view = new View({element, width: 480, height: 640, rows: GRID_ROWS, columns: GRID_COLUMNS});
const controller = new Controller(game, view);



