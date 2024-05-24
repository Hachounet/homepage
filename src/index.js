import './style.scss';
/* eslint-disable no-console */
import RestaurantImg from './asset/restaurant-screen.png';
import BattleshipImg from './asset/battleships-screen.png';
import TicTacToeImg from './asset/tictactoe-screen.png';

const restaurantScreen = new Image();
restaurantScreen.src = RestaurantImg;

const battleshipScreen = new Image();
battleshipScreen.src = BattleshipImg;

const tictactoeScreen = new Image();
tictactoeScreen.src = TicTacToeImg;

const project1 = document.getElementById('project1');
project1.appendChild(restaurantScreen);

const project2 = document.getElementById('project2');
project2.appendChild(battleshipScreen);

const project3 = document.getElementById('project3');
project3.appendChild(tictactoeScreen);
