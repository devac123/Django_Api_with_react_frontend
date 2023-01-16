import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileEvents() {
  return (
    <>
      {/* <!-- Events START --> */ }
        <div className="card">
          {/* <!-- Card header START --> */ }
          <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
            <h5 className="card-title mb-sm-0">Discover Events</h5>
            {/* <!-- Button modal --> */ }
            <Link className="btn btn-primary-soft btn-sm" to="#"> <i className="fa-solid fa-plus pe-1"></i> Create events</Link>
          </div>
          {/* <!-- Card header END --> */ }
          {/* <!-- Card body START --> */ }
          <div className="card-body">
            {/* <!-- Upcoming event START --> */ }
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
              <Link to="events" className="btn btn-xs btn-success ms-md-4">View event</Link>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            {/* <!-- Upcoming event END --> */ }
            {/* <!-- Events list START --> */ }
            <div className="row">
              <div className="d-sm-flex align-items-center">
                {/* <!-- Avatar --> */ }
                <div className="avatar avatar-xl">
                  <Link to="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/events/01.jpg" alt="" /></Link>
                </div>
                <div className="ms-sm-4 mt-2 mt-sm-0">
                  {/* <!-- Info --> */ }
                  <h5 className="mb-1"><Link to="event-details"> Comedy on the green </Link></h5>
                  <ul className="nav nav-stack small">
                    <li className="nav-item">
                       <i className="bi bi-calendar-check pe-1"></i> Mon, Sep 25, 2020 at 9:30 AM
                    </li>
                    <li className="nav-item">
                      <i className="bi bi-geo-alt pe-1"></i> San francisco 
                    </li>
                    <li className="nav-item">
                      <i className="bi bi-people pe-1"></i> 77 going
                    </li>
                  </ul>
                </div>
                {/* <!-- Button --> */ }
                <div className="d-flex mt-3 ms-auto">
                  <div className="dropdown">
                    {/* <!-- Card share action menu --> */ }
                    <button className="icon-md btn btn-secondary-soft" type="button" id="profileAction" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                    </button>
                    {/* <!-- Card share action dropdown menu --> */ }
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction">
                      <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</Link></li>
                      <li><Link className="dropdown-item" to="#"> <i className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</Link></li>
                      <li><Link className="dropdown-item" to="#"> <i className="bi bi-lock fa-fw pe-2"></i>Lock profile</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="#"> <i className="bi bi-gear fa-fw pe-2"></i>Profile settings</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Events list END --> */ }
          </div>
          {/* <!-- Card body END --> */ }
        </div>
        {/* <!-- Events START --> */ }
    </>
  )
}
