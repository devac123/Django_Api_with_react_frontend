import React from 'react'
import { Link } from 'react-router-dom'

export default function AllEvents() {
  return (
    <>
   {/* <!-- Main content START --> */ }
      <div className="col-md-8 col-lg-6 vstack gap-4">

        { /* <!-- Event alert START -->  */ }
        <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
          <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
          <Link to="event-details" className="btn btn-xs btn-success mt-2 mt-lg-0 ms-lg-4">View event</Link>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        { /* <!-- Event alert END -->  */ }

          { /* <!-- Card START -->  */ }
          <div className="card h-100">
            { /* <!-- Card header START -->  */ }
            <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
              <h1 className="h4 card-title">Discover Events</h1>
              { /* <!-- Button modal -->  */ }
              <Link className="btn btn-primary-soft" to="#" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="fa-solid fa-plus pe-1"></i> Create event</Link>
            </div>
            { /* <!-- Card header START -->  */ }
            { /* <!-- Card body START -->  */ }
            <div className="card-body">

              { /* <!-- Tab nav line -->  */ }
              <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" to="#tab-1"> Top </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-2"> Local </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-3"> This week </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-4"> Online </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-5"> Friends </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-6"> Following </Link> </li>
              </ul>
              { /* <!-- Tab content START -->  */ }
              <div className="tab-content mb-0 pb-0">
                
                { /* <!-- Event top tab START -->  */ }
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="row g-4">
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/01.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Online
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Spa training </Link>
                          <h6 className="mt-3"> <Link to="event-details"> Bone thugs-n-harmony </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Mon, Sep 25, 2020 at 9:30 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> San francisco </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+78</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested1" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested1"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/02.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Hotel
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Photography Workshop</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Decibel magazine </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Mon, Aug 10, 2022 at 9:30 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> London </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+34</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                            {/* checked */}
                              <input type="checkbox" className="btn-check d-block" id="Interested2"  />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested2"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare2" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare2">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/03.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Online
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Conference</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Illenium: fallen embers tour </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Sun, Sep 23, 2022 at 12:00 PM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> Mumbai </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+65</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested3" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested3"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare3">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                    { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/04.jpg" alt="" />
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Live show</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Comedy on the green </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Fri, Oct 05, 2022 at 1:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> Miami </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+56</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                            {/* checked */}
                              <input type="checkbox" className="btn-check d-block" id="Interested4"  />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested4"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare4" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare4">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/05.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Beach
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Meeting</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Beach event </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Wen, Dec 16, 2022 at 5:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> London </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+36</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested5" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested5"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare5" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare5">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                  </div>
                </div>
                { /* <!-- Event top tab END -->  */ }

                { /* <!-- Event local tab START -->  */ }
                <div className="tab-pane fade" id="tab-2">
                  <div className="row g-4">
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/04.jpg" alt="" />
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Live show</Link>
                          <h6 className="mt-3"> <Link to="event-details"> America 50th anniversary </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Fri, Oct 05, 2022 at 1:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> Miami </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+20</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                            {/* checked */}
                              <input type="checkbox" className="btn-check d-block" id="Interested6"  />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested6"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare6" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare6">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/05.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Beach
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Meeting</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Back to abnormal </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Wen, Dec 16, 2022 at 5:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> London </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+45</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested7" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested7"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare7" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare7">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                  </div>
                </div>
                { /* <!-- Event local tab END -->  */ }

                { /* <!-- Event This week tab START -->  */ }
                <div className="tab-pane fade" id="tab-3">
                  <div className="row g-4">
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/03.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Beach
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Meeting</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Old dominion </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Wen, Dec 16, 2022 at 5:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> London </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+85</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested8" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested8"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare8" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare8">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                  </div>
                </div>
                { /* <!-- Event This week tab END -->  */ }

                { /* <!-- Event Online tab START -->  */ }
                <div className="tab-pane fade" id="tab-4">
                  <div className="row g-4">
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/01.jpg" alt="" />
                          <div className="badge bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
                            Online
                          </div>
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Spa training </Link>
                          <h6 className="mt-3"> <Link to="event-details"> Beach event </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Mon, Sep 25, 2020 at 9:30 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> San francisco </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+46</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                            {/* checked */}
                              <input type="checkbox" className="btn-check d-block" id="Interested9"  />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested9"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare9" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare9">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      { /* <!-- Event item START -->  */ }
                      <div className="card h-100">
                        <div className="position-relative">
                          <img className="img-fluid rounded-top" src="assets/images/events/04.jpg" alt="" />
                        </div>
                        { /* <!-- Card body START -->  */ }
                        <div className="card-body position-relative pt-0">
                          { /* <!-- Tag -->  */ }
                          <Link className="btn btn-xs btn-primary mt-n3" to="event-details">Live show</Link>
                          <h6 className="mt-3"> <Link to="event-details"> Lewis black tickets </Link> </h6>
                          { /* <!-- Date time -->  */ }
                          <p className="mb-0 small"> <i className="bi bi-calendar-check pe-1"></i> Fri, Oct 05, 2022 at 1:00 AM </p>
                          <p className="small"> <i className="bi bi-geo-alt pe-1"></i> Miami </p>
                          { /* <!-- Avatar group START -->  */ }
                          <ul className="avatar-group list-unstyled align-items-center mb-0">
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                              <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+75</span></div>
                            </li>
                            <li className="ms-3">
                              <small> are attending</small>
                            </li>
                          </ul>
                          { /* <!-- Avatar group END -->  */ }
                          { /* <!-- Button -->  */ }
                          <div className="d-flex mt-3 justify-content-between">
                            { /* <!-- Interested button -->  */ }
                            <div className="w-100">
                              <input type="checkbox" className="btn-check d-block" id="Interested10" />
                              <label className="btn btn-sm btn-outline-success d-block" htmlFor="Interested10"><i className="fa-solid fa-thumbs-up me-1"></i> Interested</label>
                            </div>
                            <div className="dropdown ms-3">
                              <Link to="#" className="btn btn-sm btn-primary-soft" id="eventActionShare10" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-share-fill"></i>
                              </Link>
                              { /* <!-- Dropdown menu -->  */ }
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="eventActionShare10">
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-1"></i> Send via Direct Message</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-1"></i> Share to News Feed </Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-people fa-fw pe-1"></i> Share to a group</Link></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-1"></i> Share post via …</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Share on a friend's profile</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        { /* <!-- Card body END -->  */ }
                     </div>
                     { /* <!-- Event item END -->  */ }
                    </div>
                  </div>
                </div>
                { /* <!-- Event Online tab END -->  */ }

                { /* <!-- Event Friends tab START -->  */ }
                <div className="tab-pane fade text-center" id="tab-5">
                  { /* <!-- Add events -->  */ }
                  <div className="my-sm-5 py-sm-5">
                    <i className="display-1 text-muted bi bi-calendar2-event"> </i>
                    <h4 className="mt-2 mb-3 text-body">No events found</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> Click here to add </button>
                  </div>
                </div>
                { /* <!-- Event Friends tab END -->  */ }

                { /* <!-- Event Following tab START -->  */ }
                <div className="tab-pane fade text-center" id="tab-6">
                  { /* <!-- Add events -->  */ }
                  <div className="my-sm-5 py-sm-5">
                    <i className="display-1 text-muted bi bi-calendar2-event"> </i>
                    <h4 className="mt-2 mb-3 text-body">No events found</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> Click here to add </button>
                  </div>
                </div>
                { /* <!-- Event Following tab END -->  */ }
            </div>
            { /* <!-- Tab content END -->  */ }
          </div>
          { /* <!-- Card body END -->  */ }
        </div>
        { /* <!-- Card END -->  */ }
      </div>
    
    </>
  )
}
