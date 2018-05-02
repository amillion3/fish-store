const loadFishes = require('./fishes');

const whenFishesLoad = (data) => {
  console.log(data);
};

const errorFunction = () => {
  console.log('It\'s broken');
};

const initializer = () => {
  loadFishes(whenFishesLoad, errorFunction);
};

module.exports = initializer;
