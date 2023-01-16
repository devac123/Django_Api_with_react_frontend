import React from 'react'
import { Link } from 'react-router-dom'

export default function AllGroups() {
  return (
    <>
       { /* <!-- Card START -->  */ }
          <div className="card">
            { /* <!-- Card header START -->  */ }
            <div className="card-header border-0 pb-0">
              <div className="row g-2">
                <div className="col-lg-2">
                  { /* <!-- Card title -->  */ }
                  <h1 className="h4 card-title mb-lg-0">Group</h1>
                </div>
                <div className="col-sm-6 col-lg-3 ms-lg-auto">
                  { /* <!-- Select Groups -->  */ }
                  <select className="form-select js-choice choice-select-text-none" data-search-enabled="false">
                    <option value="AB">Alphabetical</option>
                    <option value="NG">Newest group</option>
                    <option value="RA">Recently active</option>
                    <option value="SG">Suggested</option>
                  </select>
                </div>
                  <div className="col-sm-6 col-lg-3">
                  { /* <!-- Button modal -->  */ }
                  <Link className="btn btn-primary-soft ms-auto w-100" to="#" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> <i className="fa-solid fa-plus pe-1"></i> Create group</Link>
                </div>
              </div>
            </div>
            { /* <!-- Card header START -->  */ }
            { /* <!-- Card body START -->  */ }
            <div className="card-body">
              { /* <!-- Tab nav line -->  */ }
              <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" to="#tab-1"> Friends' groups </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-2"> Suggested for you </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-3"> Popular near you </Link> </li>
                <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-4"> More suggestions </Link> </li>
              </ul>
              <div className="tab-content mb-0 pb-0">

                { /* <!-- Friends groups tab START -->  */ }
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/01.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/08.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"> <Link to="group-details">All in the Mind</Link> </h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">20</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+22</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-success-soft btn-sm" to="#!"> Join group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/02.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/02.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"><Link to="group-details">Beauty queens</Link></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">23k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">12</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+13</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-success-soft btn-sm" to="#!"> Join group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/03.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/09.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"> <Link to="group-details">Eternal triangle</Link></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">45k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">16</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+12</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-danger-soft btn-sm" to="#!"> Leave group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/04.jpg)","backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/10.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"> <Link to="group-details">Mountain movers</Link></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">05</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/14.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/13.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+08</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                          </div>
                          { /* <!-- Card body END -->  */ }
                          { /* <!-- Card Footer START -->  */ }
                          <div className="card-footer text-center">
                            <Link className="btn btn-danger-soft btn-sm" to="#!"> Leave group </Link>
                          </div>
                          { /* <!-- Card Footer END -->  */ }
                        </div>
                        { /* <!-- Card END -->  */ }
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        { /* <!-- Card START -->  */ }
                        <div className="card">
                          <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/05.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                            { /* <!-- Card body START -->  */ }
                            <div className="card-body text-center pt-0">
                              { /* <!-- Avatar -->  */ }
                              <div className="avatar avatar-lg mt-n5 mb-3">
                                <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/12.svg" alt="" /></Link>
                              </div>
                              { /* <!-- Info -->  */ }
                              <h5 className="mb-0"> <Link to="group-details">Hard workers</Link></h5>
                              <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                              { /* <!-- Group stat START -->  */ }
                              <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                { /* <!-- Group stat item -->  */ }
                                <div>
                                  <h6 className="mb-0">12k</h6>
                                  <small>Members</small>
                                </div>
                                { /* <!-- Divider -->  */ }
                                <div className="vr"></div>
                                { /* <!-- Group stat item -->  */ }
                                <div>
                                  <h6 className="mb-0">05</h6>
                                  <small>Post per day</small>
                                </div>
                              </div>
                              { /* <!-- Group stat END -->  */ }
                              { /* <!-- Avatar group START -->  */ }
                              <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                </li>
                                <li className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                                </li>
                                <li className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+23</span></div>
                                </li>
                              </ul>
                              { /* <!-- Avatar group END -->  */ }
                          </div>
                          { /* <!-- Card body END -->  */ }
                          { /* <!-- Card Footer START -->  */ }
                          <div className="card-footer text-center">
                            <Link className="btn btn-success-soft btn-sm" to="#!"> Join group </Link>
                          </div>
                          { /* <!-- Card Footer END -->  */ }
                        </div>
                        { /* <!-- Card END -->  */ }
                      </div>
                    </div>
                  </div>
                  { /* <!-- Friends' groups tab END -->  */ }

                { /* <!-- Suggested for you START -->  */ }
                <div className="tab-pane fade" id="tab-2">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/01.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/01.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"><Link to="group-details">Real humans</Link></h5>
                            <small> <i className="bi bi-globe pe-1"></i> Public Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">23k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">12</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+12</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-danger-soft btn-sm" to="#!"> Leave group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/02.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/03.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"><Link to="group-details">Strong signals</Link></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">45k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">16</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+05</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-success-soft btn-sm" to="#!"> Join group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      { /* <!-- Card START -->  */ }
                      <div className="card">
                        <div className="h-80px rounded-top" style={{"backgroundImage":"url(assets/images/bg/03.jpg)", "backgroundPosition": "center", "backgroundSize": "cover", "backgroundRepeat": "no-repeat"}}></div>
                          { /* <!-- Card body START -->  */ }
                          <div className="card-body text-center pt-0">
                            { /* <!-- Avatar -->  */ }
                            <div className="avatar avatar-lg mt-n5 mb-3">
                               <Link to="group-details"><img className="avatar-img rounded-circle border border-white border-3 bg-white" src="assets/images/logo/05.svg" alt="" /></Link>
                            </div>
                            { /* <!-- Info -->  */ }
                            <h5 className="mb-0"><Link to="group-details">Team yes, we can</Link></h5>
                            <small> <i className="bi bi-lock pe-1"></i> Private Group</small>
                            { /* <!-- Group stat START -->  */ }
                            <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">32k</h6>
                                <small>Members</small>
                              </div>
                              { /* <!-- Divider -->  */ }
                              <div className="vr"></div>
                              { /* <!-- Group stat item -->  */ }
                              <div>
                                <h6 className="mb-0">05</h6>
                                <small>Post per day</small>
                              </div>
                            </div>
                            { /* <!-- Group stat END -->  */ }
                            { /* <!-- Avatar group START -->  */ }
                            <ul className="avatar-group list-unstyled align-items-center justify-content-center mb-0 mt-3">
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/14.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/13.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </li>
                              <li className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+08</span></div>
                              </li>
                            </ul>
                            { /* <!-- Avatar group END -->  */ }
                        </div>
                        { /* <!-- Card body END -->  */ }
                        { /* <!-- Card Footer START -->  */ }
                        <div className="card-footer text-center">
                          <Link className="btn btn-success-soft btn-sm" to="#!"> Join group </Link>
                        </div>
                        { /* <!-- Card Footer END -->  */ }
                      </div>
                      { /* <!-- Card END -->  */ }
                    </div>
                  </div>
                </div>
                { /* <!-- Suggested for you END -->  */ }

                { /* <!-- Popular near you START -->  */ }
                <div className="tab-pane fade" id="tab-3">
                   { /* <!-- Add group -->  */ }
                  <div className="my-sm-5 py-sm-5 text-center">
                    <i className="display-1 text-muted bi bi-people"> </i>
                    <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> Click here to add </button>
                  </div>
                </div>
                { /* <!-- Popular near you END -->  */ }

                { /* <!-- More suggestions START -->  */ }
                <div className="tab-pane fade" id="tab-4">
                   { /* <!-- Add group -->  */ }
                  <div className="my-sm-5 py-sm-5 text-center">
                    <i className="display-1 text-muted bi bi-people"> </i>
                    <h4 className="mt-2 mb-3 text-body">No group founds</h4>
                    <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateGroup"> Click here to add </button>
                  </div>
                </div>
                { /* <!-- More suggestions END -->  */ }

            </div>
          </div>
          { /* <!-- Card body END -->  */ }
        </div>
        { /* <!-- Card END -->  */ }
    </>
  )
}
