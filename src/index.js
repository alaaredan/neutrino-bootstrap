//  import core files
import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbarTemplate from './templates/navbar.html';
//  TODO 2.2: Add a new template for the modal windows
import templateModal from './templates/modal.html';
import mkCarousel from './carousel';
//  TODO 1.3: Add the new functions from products to import
import { mkProductCard, refreshProducts } from './products';

//  append navbar
$(() => {
  //  TODO 2.3: Append modal windows tpl
  $('#root').append(templateModal);
  $('#root').append(navbarTemplate);
  //  read categories
  $.ajax('./static/categories.json')
    .done((categories) => {
      //  populate carousel with categories
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();
      //  Iterate over the categories and append to navbar
      categories.forEach((category, number) => {
        //  TODO 1.1: Add data attributes to the links: data-name
        $('.navbar-nav').append(`
            <li class="nav-item">
            <a class="nav-link" data-id="${number}" data-name="${category.name}" href="#">${category.name}</a>
            </li>`);
      });
    })
    //  or fail trying
    .fail((xhr, status, error) => {
      $('#root').append(`<div>Ajax Error categories: ${error}</div>`);
    });

  //  ajax req and append products grid
  $.ajax('./static/products.json')
    .done((products) => {
      //  TODO 1.5: Add Counter
      $('#root').append(`<div class="infobox"><h4 id="infos">All products (${Object.keys(products).length})</h4></div>`);
      //  append products-grid after carousel
      $('#root').append('<div id="products-grid" class="container-fluid"></div>');
      //  populate products-grid with products
      $('#products-grid').append('<div class="row"></div>');
      products.forEach((product) => {
        $('.row').append(mkProductCard(product));
      });
      // TODO 1.2: click event handler for nav-links
      $('.nav-link').click((eventObj) => {
        const { target } = eventObj;
        const linkName = target.getAttribute('data-name');
        // clean the products-grid and update the content
        $('#products-grid').empty();
        refreshProducts(products, linkName);
      });
      // TODO 2.6: click event handler for details button
      $('.detailsButton').click((event) => {
        const { target } = event;
        $('.modal-title').text(`more infos about ${target.getAttribute('data-name')}`);
        $('.modal-body').html(`the price of the product ${target.getAttribute('data-price')}<br><img height="300" width="400" src="${target.getAttribute('data-image')}" ><br><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical</p>`);
      });
    });
  //  or fail trying TODO: BONUS
  // End
});
