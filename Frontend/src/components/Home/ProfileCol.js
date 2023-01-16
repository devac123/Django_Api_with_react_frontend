import React, { createContext } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../pages/Home';

export default function ProfileCol() {
  const value = useContext(Context);
  
  return (
    <>
  { /* <!-- Advanced filter responsive toggler START --> */ }
  <div className="d-flex align-items-center d-lg-none">
    <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
      <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
      <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
    </button>
  </div>
  { /* <!-- Advanced filter responsive toggler END --> */ }

  { /* <!-- Navbar START--> */ }
  <nav className="navbar navbar-expand-lg mx-0">
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSideNavbar">
      { /* <!-- Offcanvas header --> */ }
      <div className="offcanvas-header">
        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>

      { /* <!-- Offcanvas body --> */ }
      <div className="offcanvas-body d-block px-2 px-lg-0">
        { /* <!-- Card START --> */ }
        <div className="card overflow-hidden">
          { /* <!-- Cover image --> */ }
          <div className="h-50px"
            style={{
              "backgroundImage":"url(assets/images/bg/01.jpg)",
              "backgroundPosition": "center","backgroundSize": "cover",
              "backgroundRepeat": "no-repeat"
            }}>
          </div>
          { /* <!-- Card body START --> */ }
          <div className="card-body pt-0">
            <div className="text-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar avatar-lg mt-n5 mb-3">
                <Link to="#!"><img className="avatar-img rounded border border-white border-3"
                    src="assets/images/avatar/07.jpg" alt="" /></Link>
              </div>
              { /* <!-- Info --> */ }
              <Context.Consumer>
                {value =>  <><h5 className="mb-0"> <Link to="#!">{value.firstname}</Link> </h5>
              <small>Web Developer at Webestica</small>
              <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p></> }
              </Context.Consumer>
              { /* <!-- User stat START --> */ }
              <div className="hstack gap-2 gap-xl-3 justify-content-center">
                { /* <!-- User stat item --> */ }
                <div>
                  <h6 className="mb-0">256</h6>
                  <small>Post</small>
                </div>
                { /* <!-- Divider --> */ }
                <div className="vr"></div>
                { /* <!-- User stat item --> */ }
                <div>
                  <h6 className="mb-0">2.5K</h6>
                  <small>Followers</small>
                </div>
                { /* <!-- Divider --> */ }
                <div className="vr"></div>
                { /* <!-- User stat item --> */ }
                <div>
                  <h6 className="mb-0">365</h6>
                  <small>Following</small>
                </div>
              </div>
              { /* <!-- User stat END --> */ }
            </div>

            { /* <!-- Divider --> */ }
            <hr />

            { /* <!-- Side Nav START --> */ }
            <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/my-profile"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-profile-connections"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/earth-outline-filled.svg" alt="" /><span>Latest News </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/calendar-outline-filled.svg" alt="" /><span>Events </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/groups"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/chat-outline-filled.svg" alt=""/><span>Groups </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notifications"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings"> <img className="me-2 h-20px fa-fw"
                    src="assets/images/icon/cog-outline-filled.svg" alt="" /><span>Settings </span></Link>
              </li>
            </ul>
            { /* <!-- Side Nav END --> */ }
          </div>
          { /* <!-- Card body END --> */ }
          { /* <!-- Card footer --> */ }
          <div className="card-footer text-center py-2">
            <Link className="btn btn-link btn-sm" to="my-profile">View Profile </Link>
          </div>
        </div>
        { /* <!-- Card END --> */ }

        { /* <!-- Helper link START --> */ }
        <ul className="nav small mt-4 justify-content-center lh-1">
          <li className="nav-item">
            <Link className="nav-link" to="my-profile-about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" target="_blank" to="docs/index">Docs </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="help">Help</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="privacy-and-terms">Privacy &amp; terms</Link>
          </li>
        </ul>
        { /* <!-- Helper link END --> */ }
        { /* <!-- Copyright --> */ }
        <p className="small text-center mt-1">©2022 <Link className="text-body" target="_blank"
            to="https://www.webestica.com/"> Webestica </Link></p>
      </div>
    </div>
  </nav>

  { /* <!-- Navbar END--> */ }

      
    </>
  )
}
