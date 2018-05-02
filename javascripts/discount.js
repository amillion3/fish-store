const discount = 0.20;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find('.price');
    const basePrice = basePriceElem.html() * 1; // getter
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice); // setter
  });
};

module.exports = applySale;
