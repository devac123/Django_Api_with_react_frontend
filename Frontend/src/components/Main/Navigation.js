import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <header className="navbar-light fixed-top header-static bg-mode">
            { /* <!-- Logo Nav START -->  */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    { /* <!-- Logo START -->  */}
                    <Link className="navbar-brand" to="/">
                        <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
                        <img className="dark-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
                    </Link>
                    { /* <!-- Logo END -->  */}

                    { /* <!-- Responsive navbar toggler -->  */}
                    <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    { /* <!-- Main navbar START -->  */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        { /* <!-- Nav Search START -->  */}
                        <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                            <div className="nav-item w-100">
                                <form className="rounded position-relative">
                                    <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                                    <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5"> </i></button>
                                </form>
                            </div>
                        </div>
                        { /* <!-- Nav Search END -->  */}

                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            { /* <!-- Nav item 1 Demos -->  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</Link>
                                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                    <li> <Link className="dropdown-item active" to="index-2">Home default</Link></li>
                                    <li> <Link className="dropdown-item" to="index-classic">Home classic</Link></li>
                                    <li> <Link className="dropdown-item" to="index-post">Home post</Link></li>
                                    <li> <Link className="dropdown-item" to="index-video">Home video</Link></li>
                                    <li> <Link className="dropdown-item" to="index-event">Home event</Link></li>
                                    <li> <Link className="dropdown-item" to="landing">Landing page</Link></li>
                                    <li> <Link className="dropdown-item" to="app-download">App download</Link></li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <Link className="dropdown-item" to="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                            <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Social!
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            { /* <!-- Nav item 2 Pages -->  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li> <Link className="dropdown-item" to="albums">Albums</Link></li>
                                    <li> <Link className="dropdown-item" to="celebration">Celebration</Link></li>
                                    <li> <Link className="dropdown-item" to="messaging">Messaging</Link></li>
                                    { /* <!-- Dropdown submenu -->  */}
                                    <li className="dropdown-submenu dropend">
                                        <Link className="dropdown-item dropdown-toggle" to="#!">Profile</Link>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" to="my-profile">Feed</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-about">About</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-connections">Connections</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-media">Media</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-videos">Videos</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-events">Events</Link> </li>
                                            <li> <Link className="dropdown-item" to="my-profile-activity">Activity</Link> </li>
                                        </ul>
                                    </li>
                                    <li> <Link className="dropdown-item" to="events">Events</Link></li>
                                    <li> <Link className="dropdown-item" to="events-2">Events 2</Link></li>
                                    <li> <Link className="dropdown-item" to="event-details">Event details</Link></li>
                                    <li> <Link className="dropdown-item" to="event-details-2">Event details 2</Link></li>
                                    <li> <Link className="dropdown-item" to="groups">Groups</Link></li>
                                    <li> <Link className="dropdown-item" to="group-details">Group details</Link></li>
                                    <li> <Link className="dropdown-item" to="post-videos">Post videos</Link></li>
                                    <li> <Link className="dropdown-item" to="post-video-details">Post video details</Link></li>
                                    <li> <Link className="dropdown-item" to="post-details">Post details</Link></li>
                                    <li> <Link className="dropdown-item" to="video-details">Video details</Link></li>
                                    <li> <Link className="dropdown-item" to="blog">Blog</Link></li>
                                    <li> <Link className="dropdown-item" to="blog-details">Blog details</Link></li>

                                    { /* <!-- Dropdown submenu levels -->  */}
                                    <li className="dropdown-divider"></li>
                                    <li className="dropdown-submenu dropend">
                                        <Link className="dropdown-item dropdown-toggle" to="#">Dropdown levels</Link>
                                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" to="#">Dropdown item</Link> </li>
                                            <li> <Link className="dropdown-item" to="#">Dropdown item</Link> </li>
                                            { /* <!-- dropdown submenu open left -->  */}
                                            <li className="dropdown-submenu dropstart">
                                                <Link className="dropdown-item dropdown-toggle" to="#">Dropdown (start)</Link>
                                                <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                    <li> <Link className="dropdown-item" to="#">Dropdown item</Link> </li>
                                                    <li> <Link className="dropdown-item" to="#">Dropdown item</Link> </li>
                                                </ul>
                                            </li>
                                            <li> <Link className="dropdown-item" to="#">Dropdown item</Link> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            { /* <!-- Nav item 3 Post -->  */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account </Link>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">
                                    <li> <Link className="dropdown-item" to="create-page">Create a page</Link></li>
                                    <li> <Link className="dropdown-item" to="settings">Settings</Link> </li>
                                    <li> <Link className="dropdown-item" to="notifications">Notifications</Link> </li>
                                    <li> <Link className="dropdown-item" to="help">Help center</Link> </li>
                                    <li> <Link className="dropdown-item" to="help-details">Help details</Link> </li>
                                    { /* <!-- dropdown submenu open left -->  */}
                                    <li className="dropdown-submenu dropstart">
                                        <Link className="dropdown-item dropdown-toggle" to="#">Authentication</Link>
                                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" to="sign-in">Sign in</Link> </li>
                                            <li> <Link className="dropdown-item" to="sign-up">Sing up</Link> </li>
                                            <li> <Link className="dropdown-item" to="forgot-password">Forgot password</Link> </li>
                                            <li className="dropdown-divider"></li>
                                            <li> <Link className="dropdown-item" to="sign-in-advance">Sign in advance</Link> </li>
                                            <li> <Link className="dropdown-item" to="sign-up-advance">Sing up advance</Link> </li>
                                            <li> <Link className="dropdown-item" to="forgot-password-advance">Forgot password advance</Link> </li>
                                        </ul>
                                    </li>
                                    <li> <Link className="dropdown-item" to="error-404">Error 404</Link> </li>
                                    <li> <Link className="dropdown-item" to="offline">Offline</Link> </li>
                                    <li> <Link className="dropdown-item" to="privacy-and-terms">Privacy & terms</Link> </li>
                                </ul>
                            </li>

                            { /* <!-- Nav item 4 Mega menu -->  */}
                            <li className="nav-item">
                                <Link className="nav-link" to="my-profile-connections">My network</Link>
                            </li>
                        </ul>
                    </div>
                    { /* <!-- Main navbar END -->  */}

                    { /* <!-- Nav right START -->  */}
                    <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                        <li className="nav-item ms-2">
                            <Link className="nav-link icon-md btn btn-light p-0" to="messaging">
                                <i className="bi bi-chat-left-text-fill fs-6"> </i>
                            </Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link icon-md btn btn-light p-0" to="settings">
                                <i className="bi bi-gear-fill fs-6"> </i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown ms-2">
                            <Link className="nav-link icon-md btn btn-light p-0" to="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <span className="badge-notif animation-blink"></span>
                                <i className="bi bi-bell-fill fs-6"> </i>
                            </Link>
                            <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                                        <Link className="small" to="#">Clear all</Link>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush list-unstyled p-2">
                                            { /* <!-- Notif item -->  */}
                                            <li>
                                                <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3">
                                                        <div className=" d-flex">
                                                            <p className="small mb-2"><b>Judy Nguyen</b> sent you a friend request.</p>
                                                            <p className="small ms-3 text-nowrap">Just now</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <button className="btn btn-sm py-1 btn-primary me-2">Accept </button>
                                                            <button className="btn btn-sm py-1 btn-danger-soft">Delete </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            { /* <!-- Notif item -->  */}
                                            <li>
                                                <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3 d-flex">
                                                        <div>
                                                            <p className="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                                                            <button className="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                                                        </div>
                                                        <p className="small ms-3">2min</p>
                                                    </div>
                                                </div>
                                            </li>
                                            { /* <!-- Notif item -->  */}
                                            <li>
                                                <Link to="#" className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <div className="avatar-img rounded-circle bg-success"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                                                    </div>
                                                    <div className="ms-sm-3">
                                                        <div className="d-flex">
                                                            <p className="small mb-2">Webestica has 15 like and 1 new activity</p>
                                                            <p className="small ms-3">1hr</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            { /* <!-- Notif item -->  */}
                                            <li>
                                                <Link to="#" className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3 d-flex">
                                                        <p className="small mb-2"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.</p>
                                                        <p className="small ms-3">4hr</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link to="#" className="btn btn-sm btn-primary-soft">See all incoming activity</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        { /* <!-- Notification dropdown END -->  */}

                        <li className="nav-item ms-2 dropdown">
                            <Link className="nav-link btn icon-md p-0" to="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="avatar-img rounded-2" src="assets/images/avatar/07.jpg" alt="" />
                            </Link>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
                                { /* <!-- Profile info -->  */}
                                <li className="px-3">
                                    <div className="d-flex align-items-center position-relative">
                                        { /* <!-- Avatar -->  */}
                                        <div className="avatar me-3">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                        </div>
                                        <div>
                                            <Link className="h6 stretched-link" to="#">Lori Ferguson</Link>
                                            <p className="small m-0">Web Developer</p>
                                        </div>
                                    </div>
                                    <Link className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" to="my-profile">View profile</Link>
                                </li>
                                { /* <!-- Links -->  */}
                                <li><Link className="dropdown-item" to="settings"><i className="bi bi-gear fa-fw me-2"></i>Settings & Privacy</Link></li>
                                <li>
                                    <Link className="dropdown-item" to="https://support.webestica.com/" target="_blank">
                                        <i className="fa-fw bi bi-life-preserver me-2"></i>Support
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="docs/index" target="_blank">
                                        <i className="fa-fw bi bi-card-text me-2"></i>Documentation
                                    </Link>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li><Link className="dropdown-item bg-danger-soft-hover" to="sign-in-advance"><i className="bi bi-power fa-fw me-2"></i>Sign Out</Link></li>
                                <li> <hr className="dropdown-divider" /></li>
                                { /* <!-- Dark mode switch START -->  */}
                                <li>
                                    <div className="modeswitch-wrap" id="darkModeSwitch">
                                        <div className="modeswitch-item">
                                            <div className="modeswitch-icon"></div>
                                        </div>
                                        <span>Dark mode</span>
                                    </div>
                                </li>
                                { /* <!-- Dark mode switch END -->  */}
                            </ul>
                        </li>
                        { /* <!-- Profile START -->  */}

                    </ul>
                    { /* <!-- Nav right END -->  */}
                </div>
            </nav>
            { /* <!-- Logo Nav END -->  */}
        </header>
    )
}
