const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const blocks = document.querySelectorAll('.block');

const search = () => {
  blocks.forEach(block => {
    let blockTitle = block.querySelector('.description__title').innerHTML;

    if (blockTitle.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
      block.classList.remove('hide');
    } else {
      block.classList.add('hide');
    }
  });
};

searchInput.addEventListener('input', search);
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  search();
});