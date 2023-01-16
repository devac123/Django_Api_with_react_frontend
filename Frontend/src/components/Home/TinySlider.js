import React from 'react'
import { Link } from 'react-router-dom'

export default function TinySlider() {
  return (
    
    <div className="tiny-slider arrow-hover overflow-hidden">
        <div className="tiny-slider-inner ms-n4" data-arrow={true} data-dots={true} data-loop={false} data-autoplay={false} data-items-xl={4} data-items-lg={3} data-items-md={3} data-items-sm={3} data-items-xs={2} data-gutter={12} data-edge={30}>
          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card add story START --> */ }
            <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center">
              <div>
                <Link className="stretched-link btn btn-light rounded-circle icon-md" to="#!"><i className="fa-solid fa-plus"></i></Link>
                <h6 className="mt-2 mb-0 small">Post a Story</h6>
              </div>
            </div>
            { /* <!-- Card add story END --> */ }
          </div>

          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card START --> */ }
            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{"backgroundImage":"url(assets/images/post/1by1/02.jpg)", "backgroundPosition": "center left", "backgroundSize": "cover"}}>
              <div className="card-img-overlay d-flex align-items-center p-2">
                <div className="w-100 mt-auto">
                  { /* <!-- Name --> */ }
                  <Link to="#!" className="stretched-link text-white small">Judy Nguyen</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card END --> */ }
          </div>

          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card START --> */ }
            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{"backgroundImage":"url(assets/images/post/1by1/02.jpg)", "backgroundPosition": "center left", "backgroundSize": "cover"}}>
              <div className="card-img-overlay d-flex align-items-center p-2">
                <div className="w-100 mt-auto">
                  { /* <!-- Name --> */ }
                  <Link to="#!" className="stretched-link text-white small">Samuel Bishop</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card END --> */ }
          </div>
          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card START --> */ }
            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{"backgroundImage":"url(assets/images/post/1by1/02.jpg)", "backgroundPosition": "center left", "backgroundSize": "cover"}}>
              <div className="card-img-overlay d-flex align-items-center p-2">
                <div className="w-100 mt-auto">
                  { /* <!-- Name --> */ }
                  <Link to="#!" className="stretched-link text-white small">Carolyn Ortiz</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card END --> */ }
          </div>
          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card START --> */ }
            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{"backgroundImage":"url(assets/images/post/1by1/02.jpg)", "backgroundPosition": "center left", "backgroundSize": "cover"}}>
              <div className="card-img-overlay d-flex align-items-center p-2">
                <div className="w-100 mt-auto">
                  { /* <!-- Name --> */ }
                  <Link to="#!" className="stretched-link text-white small">Amanda Reed</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card END --> */ }
          </div>

          { /* <!-- Slider items --> */ }
          <div>
            { /* <!-- Card START --> */ }
            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{"backgroundImage":"url(assets/images/post/1by1/02.jpg)", "backgroundPosition": "center left", "backgroundSize": "cover"}}>
              <div className="card-img-overlay d-flex align-items-center p-2">
                <div className="w-100 mt-auto">
                  { /* <!-- Name --> */ }
                  <Link to="#!" className="stretched-link text-white small">Lori Stevens</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card END --> */ }
          </div>
        </div>
      </div>
    
  )
}
