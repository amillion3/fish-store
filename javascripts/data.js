const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');

const whenFishesLoad = (data) => {
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
};

const errorFunction = () => {
  console.log('It\'s broken');
};

const initializer = () => {
  loadFishes(whenFishesLoad, errorFunction);
};

module.exports = initializer;
