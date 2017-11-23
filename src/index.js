import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './tamplates/navbar.html';

const pictures = [
"/images/img1.jpg",
"/images/img2.jpg",
"/images/img3.jpg",
"/images/img4.jpg",
"/images/img5.jpg",
"/images/img6.jpg"
];

function mkCard(img){
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

const demoform = `
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

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
    .append(demoform)
    .append(cards);
});
