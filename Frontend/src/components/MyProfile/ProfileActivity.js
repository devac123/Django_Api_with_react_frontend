import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileActivity() {
  return (
    <>
     { /* <!-- Activity feed START --> */ }
        <div className="card">
          { /* <!-- Card header START --> */ }
          <div className="card-header border-0 pb-0">
             <h5 className="card-title"> Activity feed</h5> 
          </div>
          { /* <!-- Card header END --> */ }
          { /* <!-- Card body START --> */ }
            <div className="card-body">
              <div className="timeline">

                { /* <!-- Timeline item START --> */ }
                <div className="timeline-item">
                  { /* <!-- Timeline icon --> */ }
                  <div className="timeline-icon">
                    <div className="avatar text-center">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                    </div>
                  </div>
                  { /* <!-- Timeline content --> */ }
                  <div className="timeline-content">
                    <div className="d-sm-flex justify-content-between">
                    <div>
                      <p className="small mb-0"><b>Sam Lanson</b> update a playlist on webestica.</p>
                      <p className="small mb-0"><i className="bi bi-unlock-fill pe-1"></i>Public</p>
                    </div>
                    <p className="small ms-sm-3 mt-2 mt-sm-0 text-nowrap">Just now</p>
                  </div>
                </div>
              </div>
              { /* <!-- Timeline item END --> */ }

              { /* <!-- Timeline item START --> */ }
              <div className="timeline-item">
                { /* <!-- Timeline icon --> */ }
                <div className="timeline-icon">
                  <div className="avatar text-center">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                  </div>
                </div>
                { /* <!-- Timeline content --> */ }
                <div className="timeline-content">
                  <div className="d-sm-flex justify-content-between">
                    <div>
                      <p className="small mb-0"><b>Billy Vasquez</b> save a <Link to="#!">link.</Link> </p>
                      <p className="small mb-0"><i className="bi bi-lock-fill pe-1"></i>only me</p>
                    </div>
                    <p className="small ms-sm-3 mt-2 mt-sm-0">2min</p>
                  </div>
                </div>
              </div>
              { /* <!-- Timeline item END --> */ }

              { /* <!-- Timeline item START --> */ }
              <div className="timeline-item align-items-center">
                { /* <!-- Timeline icon --> */ }
                <div className="timeline-icon">
                  <div className="avatar text-center">
                    <div className="avatar-img rounded-circle bg-success"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">SM</span></div>
                  </div>
                </div>
                { /* <!-- Timeline content --> */ }
                <div className="timeline-content">
                  <div className="d-sm-flex justify-content-between">
                    <div>
                      <p className="small mb-0"> <b>Sam Lanson</b> liked <b> Frances Guerrero's </b> add comment.</p>
                      <p className="small mb-0">This is the best picture I have come across today.... </p>
                    </div>
                    <p className="small mb-0 ms-sm-3">1hr</p>
                  </div>
                </div>
              </div>
              { /* <!-- Timeline item END --> */ }

              { /* <!-- Timeline item START --> */ }
              <div className="timeline-item align-items-center">
                { /* <!-- Timeline icon --> */ }
                <div className="timeline-icon">
                  <div className="avatar text-center">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                  </div>
                </div>
                { /* <!-- Timeline content --> */ }
                <div className="timeline-content">
                  <div className="d-sm-flex justify-content-between">
                    <div>
                    <p className="small mb-0"><b>Judy Nguyen</b> likes <b>Jacqueline Miller</b> Photos. </p>
                    <p className="mb-0">✌️👌👍</p>
                  </div>
                    <p className="small ms-sm-3 mt-2 mt-sm-0">4hr</p>
                  </div>
                </div>
              </div>
              { /* <!-- Timeline item END --> */ }

              { /* <!-- Timeline item START --> */ }
              <div className="timeline-item">
                { /* <!-- Timeline icon --> */ }
                <div className="timeline-icon">
                  <div className="avatar text-center">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                  </div>
                </div>
                { /* <!-- Timeline content --> */ }
                <div className="timeline-content">
                  <div className="d-sm-flex justify-content-between">
                    <div>
                    <p className="small mb-0"><b>Larry Lawson</b> </p>
                    <p className="small mb-2">Replied to your comment on Blogzine blog theme</p>
                    <small className="bg-light rounded p-2 d-block">
                      Yes, I am so excited to see it live. 👍
                    </small>
                  </div>
                    <p className="small ms-sm-3 mt-2 mt-sm-0">10hr</p>
                  </div>
                </div>
              </div>
              { /* <!-- Timeline item END --> */ }

            </div>
          </div>
          { /* <!-- Card body END --> */ }
          { /* <!-- Card footer START --> */ }
          <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
            { /* <!-- Load more button START --> */ }
            <Link to="#!" role="button" className="btn btn-sm btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
              <span className="load-text"> Load more activity </span>
              <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </Link>
            { /* <!-- Load more button END --> */ }
          </div>
          { /* <!-- Card footer END --> */ }
        </div>
        { /* <!-- Activity feed END --> */ }

    </>
  )
}
