import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList() {
  return (
    <>
    <div className="bg-mode p-4">
          <h1 className="h4 mb-4">Latest blogs</h1>
          { /* <!-- Blog item START --> */ }
          <div className="card bg-transparent border-0">
            <div className="row g-3">
              <div className="col-4">
                { /* <!-- Blog image --> */ }
                <img className="rounded" src="assets/images/post/4by3/03.jpg" alt="" />
              </div>
              <div className="col-8">
                { /* <!-- Blog caption --> */ }
                <Link to="#" className="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold">Lifestyle</Link>
                <h5><Link to="blog-details" className="btn-link stretched-link text-reset fw-bold">Social guides the way in 2022 app performance report</Link></h5>
                <div className="d-none d-sm-inline-block">
                  <p className="mb-2">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                  { /* <!-- BLog date --> */ }
                  <Link className="small text-secondary" to="#!"> <i className="bi bi-calendar-date pe-1"></i> Jan 22, 2022</Link>
                </div>
              </div>
            </div>
          </div>
          { /* <!-- Blog item END --> */ }
          <hr className="my-4" />
          { /* <!-- Blog item START --> */ }
          <div className="card bg-transparent border-0">
            <div className="row g-3">
              <div className="col-4">
                { /* <!-- Blog image --> */ }
                <img className="rounded" src="assets/images/post/4by3/04.jpg" alt="" />
              </div>
              <div className="col-8">
                { /* <!-- Blog caption --> */ }
                <Link to="#" className="badge bg-info bg-opacity-10 text-info mb-2 fw-bold">Sports</Link>
                <h5><Link to="blog-details" className="btn-link stretched-link text-reset fw-bold">Upcoming live video feed may not work how you expect</Link></h5>
                <div className="d-none d-sm-inline-block">
                  <p className="mb-2">Under folly balls, death own point now men. Match way these she avoids seeing death.</p>
                  { /* <!-- BLog date --> */ }
                  <Link className="small text-secondary" to="#!"> <i className="bi bi-calendar-date pe-1"></i> Mar 07, 2022</Link>
                </div>
              </div>
            </div>
          </div>
          { /* <!-- Blog item END --> */ }
          <hr className="my-4" />
          { /* <!-- Blog item START --> */ }
          <div className="card bg-transparent border-0">
            <div className="row g-3">
              <div className="col-4">
                { /* <!-- Blog image --> */ }
                <img className="rounded" src="assets/images/post/4by3/05.jpg" alt="" />
              </div>
              <div className="col-8">
                { /* <!-- Blog caption --> */ }
                <Link to="#" className="badge bg-success bg-opacity-10 text-success mb-2 fw-bold">Business</Link>
                <h5><Link to="blog-details" className="btn-link stretched-link text-reset fw-bold">Google shares top search trends of 2022</Link></h5>
                <div className="d-none d-sm-inline-block">
                  <p className="mb-2">I think on style child of. Servants moreover in sensible it ye possible six say his. </p>
                  { /* <!-- BLog date --> */ }
                  <Link className="small text-secondary" to="#!"> <i className="bi bi-calendar-date pe-1"></i> Jun 17, 2022</Link>
                </div>
              </div>
            </div>
          </div>
          { /* <!-- Blog item END --> */ }
          <hr className="my-4" />
          { /* <!-- Blog item START --> */ }
          <div className="card bg-transparent border-0">
            <div className="row g-3">
              <div className="col-4">
                { /* <!-- Blog image --> */ }
                <img className="rounded" src="assets/images/post/4by3/06.jpg" alt="" />
              </div>
              <div className="col-8">
                { /* <!-- Blog caption --> */ }
                <Link to="#" className="badge bg-warning bg-opacity-10 text-warning mb-2 fw-bold">Technology</Link>
                <h5><Link to="blog-details" className="btn-link stretched-link text-reset fw-bold">Counts reels replies, delivering another way to tap into the video</Link></h5>
                <div className="d-none d-sm-inline-block">
                  <p className="mb-2">Placing forming nay looking old married few has. Margaret disposed of add screened rendered. </p>
                  { /* <!-- BLog date --> */ }
                  <Link className="small text-secondary" to="#!"> <i className="bi bi-calendar-date pe-1"></i> Nov 11, 2022</Link>
                </div>
              </div>
            </div>
          </div>
          { /* <!-- Blog item END --> */ }
          { /* <!-- Pagination --> */ }
          <div className="mt-4">
            <nav aria-label="navigation">
              <ul className="pagination pagination-light d-inline-block d-md-flex justify-content-center">
                <li className="page-item disabled">
                  <Link className="page-link" to="#">Prev</Link>
                </li>
                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item disabled"><Link className="page-link" to="#">...</Link></li>
                <li className="page-item"><Link className="page-link" to="#">15</Link></li>
                <li className="page-item">
                  <Link className="page-link" to="#">Next</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
    </>
  )
}
