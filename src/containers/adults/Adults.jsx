import React from 'react'
import './adults.css'
import {Resources} from '../../containers'

const Adults = () => {
  return (
    <><div className='Adults' id='Adults'>
      <body>Adults works!
        This is the adults page! We'll have an educational game here and add more parts if we have time.
      </body>
      <Resources />
    </div><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="ImagePlaceholder.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="ImagePlaceholder2.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="ImagePlaceholder.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div></>
  )
}

export default Adults