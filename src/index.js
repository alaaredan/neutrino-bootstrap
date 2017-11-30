import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
import mkCarousel from './carousel';
import productCardTemmplate from './templates/product-card.html';
/**
 * Products
 */
function mkProductCard(product) {
  const $card = $(productCardTemmplate);
  $card.find('.card-title').text(product.name);
  $card.find('.card-text').text(`Price: ${product.price}€`);
  return $card;
}

function mkProductGrid(products) {
  const $containerEl = $('<div class="container-fluid"></div>');

  const $rowEl = $('<div class="row"></div>');
  $containerEl.append($rowEl);
  products.forEach((product) => {
    const $colEl = $('<div class="col-12 col-md-4"></div>');
    $colEl.append(mkProductCard(product));
    $rowEl.append($colEl);
  });
  return $containerEl;
}

function updateNavbar(categories) {
  const $navbarNav = $('.navbar-nav').empty();
  categories.forEach((category) => {
    $navbarNav.append(`<li class="nav-item">
      <a class="nav-link" href="#">${category.name}</a>
    </li>`);
  });
}

$(() => {
  $('#root').append(navbarTemplate);

  $.ajax('./static/categories.json')
    .done((categories) => {
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      // because the HTML of the carousel
      // is added after the page loads,
      // we need to initialize the
      // Bootstrap carousel ourselves
      $carousel.carousel();
      updateNavbar(categories);
    });
  $.ajax('./static/products.json')
    .done((products) => {
      const $productGrid = mkProductGrid(products);
      $('#root').append($productGrid);
    });
});
