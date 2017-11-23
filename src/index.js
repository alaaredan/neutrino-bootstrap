import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './tamplates/navbar.html';

const carousel = `
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="container carousel-item active">
      <div class="row">
        <div class="col-6">
          <h1>Slide 1</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </p>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              More
          </button>
        </div>
        <div class="col-6">
          <img class="d-block w-100" src="images/img1.jpg" alt="First slide">
        </div>
      </div>
    </div>
    <div class="container carousel-item">
      <div class="row">
        <div class="col-6">
           <img class="d-block w-100" src="images/img2.jpg" alt="First slide">
        </div>
        <div class="col-6">
          <h1>Slide 2</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </p>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              More
          </button>
        </div>
      </div>
    </div>
    <div class="container carousel-item">
      <div class="row">
        <div class="col-6">
          <h1>Slide 3</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </p>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              More
          </button>
        </div>
       <div class="col-6">
          <img class="d-block w-100" src="images/img3.jpg" alt="First slide">
       </div>
      </div>
    </div>
    <div class="container carousel-item">
      <div class="row">
        <div class="col-6">
          <img class="d-block w-100" src="images/img4.jpg" alt="First slide">
        </div>
        <div class="col-6">
          <h1>Slide 4</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </p>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              More
          </button>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`;
const pictures = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
];
function mkCard(img) {
  return `
<div class="col-md-4">
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <img class="card-img-top" src="${img}" alt="Card image cap">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
`;
}
const cards = `
<div class="container">
  <div class="row">
    ${mkCard(pictures[0])}
    ${mkCard(pictures[1])}
    ${mkCard(pictures[2])}
  </div>
  <br>
  <div class="row">
    ${mkCard(pictures[3])}
    ${mkCard(pictures[4])}
    ${mkCard(pictures[5])}
  </div>
</div>
`;
$(() => {
  $('#root')
    .append(navbar)
    .append(carousel)
    .append(cards);
});
