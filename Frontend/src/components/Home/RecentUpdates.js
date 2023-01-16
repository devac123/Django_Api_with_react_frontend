import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentUpdates() {
  return (
    <>
    { /* <!-- Card News START -->*/ }
          <div className="col-sm-6 col-lg-12">
            <div className="card">
              { /* <!-- Card header START -->*/ }
              <div className="card-header pb-0 border-0">
                <h5 className="card-title mb-0">Today’s news</h5>
              </div>
              { /* <!-- Card header END -->*/ }
              { /* <!-- Card body START -->*/ }
              <div className="card-body">
                { /* <!-- News item -->*/ }
                <div className="mb-3">
                  <h6 className="mb-0"><Link to="blog-details">Ten questions you should answer truthfully</Link></h6>
                  <small>2hr</small>
                </div>
                { /* <!-- News item -->*/ }
                <div className="mb-3">
                  <h6 className="mb-0"><Link to="blog-details">Five unbelievable facts about money</Link></h6>
                  <small>3hr</small>
                </div>
                { /* <!-- News item -->*/ }
                <div className="mb-3">
                  <h6 className="mb-0"><Link to="blog-details">Best Pinterest Boards for learning about business</Link></h6>
                  <small>4hr</small>
                </div>
                { /* <!-- News item -->*/ }
                <div className="mb-3">
                  <h6 className="mb-0"><Link to="blog-details">Skills that you can learn from business</Link></h6>
                  <small>6hr</small>
                </div>
                { /* <!-- Load more comments -->*/ }
                <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  View all latest news
                </Link>
              </div>
              { /* <!-- Card body END -->*/ }
            </div>
          </div>
          { /* <!-- Card News END -->*/ }
          
    </>
  )
}
