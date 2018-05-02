// Filter fish that are "on sale"

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All Fish';
    }
    else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
  $(e.target).text('Remove From Basket').removeClass('add').addClass('remove');
};

// Remove from basket
const returnToCart = (e) => {
  const fishCard = $(e.target).closest('.fish'); // closest parent with class of fish (button, in this case)
  $('#available').append(fishCard);
  $(e.target).text('Add To Basket').removeClass('remove').addClass('add');
};

const bindEvents = () => {
  $('body').on('click', '.remove', returnToCart);
  $('body').on('click', '.add', moveToCart);

  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
