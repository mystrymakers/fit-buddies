import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.jpg'
import img6 from '../Assets/6.jpg'
function Blogs() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 " src={img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"/>
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
  <div className="card">
  <img className="card-img-top img-responsive" src={img1} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">WEIGHT TRAININGS</h5>
    <p className="card-text">Powerlifting: explaining the sport</p>
    <Link to="/blog1" className="btn btn-primary">Read More</Link>
  </div>
</div>
<div className="card">
<img className="card-img-top img-responsive" src={img2} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">TO FALL OFF</h5>
    <p className="card-text">Crash diet: why you should avoid it.</p>
    <Link to="/blog2" className="btn btn-primary">Read More</Link>
  </div>
</div>
<div className="card">
<img className="card-img-top img-responsive" src={img3} alt="Card image cap"/>
   <div className="card-body">
    <h5 className="card-title">HEALTH</h5>
    <p className="card-text">Stretching: The Ultimate Guide.</p>
    <Link to="/blog3" className="btn btn-primary">Read More</Link>
 </div>
</div>
<div className="card">
<img className="card-img-top img-responsive" src={img4} alt="Card image cap"/>
 <div className="card-body">
    <h5 className="card-title">HEALTH</h5>
    <p className="card-text">Is an afternoon nap healthy or not?.</p>
    <Link to="/blog4" className="btn btn-primary">Read More</Link>
  </div>
</div>
<div className="card">
<img className="card-img-top img-responsive" src={img5} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">HEALTH</h5>
    <p className="card-text">Motivation to exercise: 12 tips.</p>
    <Link to="/blog5" className="btn btn-primary">Read More</Link>
  </div>
</div>
<div className="card">
<img className="card-img-top img-responsive" src={img6} alt="Card image cap"/>
 <div className="card-body">
    <h5 className="card-title">HEALTH</h5>
    <p className="card-text">Outdoor sports: all the information you need.</p>
    <Link to="/blog6" className="btn btn-primary">Read More</Link>
  </div>
</div>
  </>
  )
}

export default Blogs