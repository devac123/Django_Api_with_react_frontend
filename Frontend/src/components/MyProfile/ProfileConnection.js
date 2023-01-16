import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileConnection() {
  return (
    <>
      { /*-<!-- Card Connections START --> */}
          <div className="card">
            { /*-<!-- Card header START --> */}
            <div className="card-header border-0 pb-0">
              <h5 className="card-title"> Connections</h5> 
            </div>
            { /*-<!-- Card header END --> */}
            { /*-<!-- Card body START --> */}
            <div className="card-body">
              { /*-<!-- Connections Item --> */}
              <div className="d-md-flex align-items-center mb-4">
                { /*-<!-- Avatar --> */}
                <div className="avatar me-3 mb-3 mb-md-0">
                  <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt=""  /> </Link>
                </div>
                { /*-<!-- Info --> */}
                <div className="w-100">
                  <div className="d-sm-flex align-items-start">
                    <h6 className="mb-0"><Link to="#!">Lori Ferguson </Link></h6>
                    <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
                </div>
                { /*-<!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"  />
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"  />
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"  />
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"  />
                  </li>
                  <li className="avatar avatar-xxs">
                    <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+2</span></div>
                  </li>
                  <li className="small ms-3">
                    Carolyn Ortiz, Frances Guerrero, and 20 other shared connections
                  </li>
                </ul>
                { /*-<!-- Connections END --> */}
              </div>
              { /*-<!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            { /*-<!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              { /*-<!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt=""  /> </Link>
              </div>
              { /*-<!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><Link to="#!">Carolyn Ortiz </Link></h6>
                  <p className="small ms-sm-2 mb-0">Web Developer | Freelancer</p>
                </div>
                { /*-<!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                  </li>
                  <li className="avatar avatar-xxs">
                    <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+5</span></div>
                  </li>
                  <li className="small ms-3">
                    Amanda Reed, Lori Stevens, and 10 other shared connections
                  </li>
                </ul>
                { /*-<!-- Connections END --> */}
              </div>
              { /*-<!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            { /*-<!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              { /*-<!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""  /> </Link>
              </div>
              { /*-<!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><Link to="#!">Lori Ferguson </Link></h6>
                  <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
                </div>
                { /*-<!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="small">
                    Joan Wallace and Larry Lawson shared connections
                  </li>
                </ul>
                { /*-<!-- Connections END --> */}
              </div>
              { /*-<!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            { /*-<!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              { /*-<!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""  /> </Link>
              </div>
              { /*-<!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><Link to="#!">Lori Ferguson </Link></h6>
                  <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
              </div>
              { /*-<!-- Connections START --> */}
              <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                <li className="small">
                  Samuel Bishop, Judy Nguyen, and 115 other shared connections
                </li>
              </ul>
              { /*-<!-- Connections END --> */}
            </div>
            { /*-<!-- Button --> */}
            <div className="ms-md-auto d-flex">
              <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
              <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
            </div>
          </div>

          { /*-<!-- Connections Item --> */}
          <div className="d-md-flex align-items-center mb-4">
            { /*-<!-- Avatar --> */}
            <div className="avatar me-3 mb-3 mb-md-0">
              <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""  /> </Link>
            </div>
            { /*-<!-- Info --> */}
            <div className="w-100">
              <div className="d-sm-flex align-items-start">
                <h6 className="mb-0"><Link to="#!">Lori Ferguson </Link></h6>
                <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
            </div>
            { /*-<!-- Connections START --> */}
            <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
              <li className="small">
                Bryan Knight and Billy Vasquez shared connections
              </li>
            </ul>
            { /*-<!-- Connections END --> */}
          </div>
          { /*-<!-- Button --> */}
          <div className="ms-md-auto d-flex">
            <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
            <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
          </div>
        </div>
        <div className="d-grid">
          { /*-<!-- Load more button START --> */}
          <Link to="#!" role="button" className="btn btn-sm btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
            <span className="load-text"> Load more connections </span>
            <div className="load-icon">
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </Link>
          { /*-<!-- Load more button END --> */}
        </div>

        </div>
        { /*-<!-- Card body END --> */}
        </div>
        { /*-<!-- Card Connections END --> */}
    </>
  )
}
