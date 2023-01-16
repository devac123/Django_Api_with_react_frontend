import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileInfo() {
  return (
    <> <div className="card">
    { /*<!-- Card header START --> */}
    <div className="card-header border-0 pb-0">
      <h5 className="card-title"> Profile Info</h5> 
    </div>
    { /*<!-- Card header END --> */}
    { /*<!-- Card body START --> */}
    <div className="card-body">
      <div className="rounded border px-3 py-2 mb-3"> 
        <div className="d-flex align-items-center justify-content-between">
          <h6>Overview</h6>
          <div className="dropdown ms-auto">
            { /*<!-- Card share action menu --> */}
            <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </Link>
            { /*<!-- Card share action dropdown menu --> */}
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction">
              <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
              <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
            </ul>
          </div>
        </div>
        <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
      </div>
      <div className="row g-4">
        <div className="col-sm-6">
          { /*<!-- Birthday START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-calendar-date fa-fw me-2"></i> Born: <strong> October 20, 1990 </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction2" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction2">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Birthday END --> */}
        </div>
        <div className="col-sm-6">
          { /*<!-- Status START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-heart fa-fw me-2"></i> Status: <strong> Single </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction3" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction3">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Status END --> */}
        </div>
        <div className="col-sm-6">
          { /*<!-- Designation START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-briefcase fa-fw me-2"></i> <strong> Lead Developer </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction4" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction4">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Designation END --> */}
        </div>
        <div className="col-sm-6">
          { /*<!-- Lives START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-geo-alt fa-fw me-2"></i> Lives in: <strong> New Hampshire </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction5" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction5">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Lives END --> */}
        </div>
        <div className="col-sm-6">
          { /*<!-- Joined on START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-geo-alt fa-fw me-2"></i> Joined on: <strong> Nov 26, 2019 </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction6" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction6">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Joined on END --> */}
        </div>
        <div className="col-sm-6">
          { /*<!-- Joined on START --> */}
          <div className="d-flex align-items-center rounded border px-3 py-2"> 
            { /*<!-- Date --> */}
            <p className="mb-0">
              <i className="bi bi-envelope fa-fw me-2"></i> Email: <strong> webestica@gmail.com </strong>
            </p>
            <div className="dropdown ms-auto">
              { /*<!-- Card share action menu --> */}
              <Link className="nav-link text-secondary mb-0" to="#" id="aboutAction7" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /*<!-- Card share action dropdown menu --> */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction7">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
              </ul>
            </div>
          </div>
          { /*<!-- Joined on END --> */}
        </div>
        <div className="col-sm-6 position-relative">
          { /*<!-- Workplace on START --> */}
          <Link className="btn btn-dashed rounded w-100" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add a workplace</Link>
          { /*<!-- Workplace on END --> */}
        </div>
        <div className="col-sm-6 position-relative">
          { /*<!-- Education on START --> */}
          <Link className="btn btn-dashed rounded w-100" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add a education</Link>
          { /*<!-- Education on END --> */}
        </div>
      </div>
    </div>
    { /*<!-- Card body END --> */}
  </div>
  { /*<!-- Card feed item END --> */}

  { /*<!-- Card feed item START --> */}
  <div className="card">
    { /*<!-- Card header START --> */}
    <div className="card-header d-sm-flex justify-content-between border-0 pb-0">
      <h5 className="card-title">Interests</h5>
      <Link className="btn btn-primary-soft btn-sm" to="#!"> See all</Link>
    </div>
    { /*<!-- Card header END --> */}
    { /*<!-- Card body START --> */}
    <div className="card-body">
      <div className="row g-4">
        <div className="col-sm-6 col-lg-4">
          { /*<!-- Interests item START --> */}
          <div className="d-flex align-items-center position-relative">
              <div className="avatar">
                <img className="avatar-img" src="assets/images/logo/04.svg" alt="" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0"> <Link className="stretched-link" to="#"> Oracle </Link></h6>
                <p className="small mb-0">7,546,224 followers</p>
              </div>
          </div>
          { /*<!-- Interests item END --> */}
        </div>
        <div className="col-sm-6 col-lg-4">
          { /*<!-- Interests item START --> */}
          <div className="d-flex align-items-center position-relative">
              <div className="avatar">
                <img className="avatar-img" src="assets/images/logo/13.svg" alt="" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0"> <Link className="stretched-link" to="#"> Apple </Link></h6>
                <p className="small mb-0">102B followers</p>
              </div>
          </div>
          { /*<!-- Interests item END --> */}
        </div>
        <div className="col-sm-6 col-lg-4">
          { /*<!-- Interests item START --> */}
          <div className="d-flex align-items-center position-relative">
              <div className="avatar">
                <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0"> <Link className="stretched-link" to="#"> Elon musk </Link></h6>
                <p className="small mb-0"> CEO and Product Architect of Tesla, Inc 41B followers</p>
              </div>
          </div>
          { /*<!-- Interests item END --> */}
        </div>
        <div className="col-sm-6 col-lg-4">
          { /*<!-- Interests item START --> */}
          <div className="d-flex align-items-center position-relative">
              <div className="avatar">
                <img className="avatar-img" src="assets/images/events/04.jpg" alt="" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0"> <Link className="stretched-link" to="#"> The X Factor </Link></h6>
                <p className="small mb-0">9,654 followers</p>
              </div>
          </div>
          { /*<!-- Interests item END --> */}
        </div>
        <div className="col-sm-6 col-lg-4">
          { /*<!-- Interests item START --> */}
          <div className="d-flex align-items-center position-relative">
              <div className="avatar">
                <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt="" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0"> <Link className="stretched-link" to="#"> Getbootstrap </Link></h6>
                <p className="small mb-0">8,457,224 followers</p>
              </div>
          </div>
          { /*<!-- Interests item END --> */}
        </div>
      </div>
    </div>
    { /*<!-- Card body END --> */}
  </div></>
  )
}
