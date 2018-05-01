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

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
  // $('input').val()
};

$('button.add').click(moveToCart);