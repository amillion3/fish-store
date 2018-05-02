const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  console.log(data);
  $('#available').append(writeFishes(data.fishes));
};

const errorFunction = () => {
  console.log('It\'s broken');
};

const initializer = () => {
  loadFishes(whenFishesLoad, errorFunction);
};

module.exports = initializer;
