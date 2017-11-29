import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbartemplate from './templates/navbar.html';
import mkCarousel from './carousel';

$(() => {
  $.ajax('./static/categories.json')
    .done((categories) => {
      const $carousel = mkCarousel(categories);
      $('#root').append($carousel);
      $carousel.carousel();
    });
  $('#root')
    .append(navbartemplate);
});
