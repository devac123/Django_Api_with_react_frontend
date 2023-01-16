import { Link } from "react-router-dom"



export default function ProfileFeeds() {
  return (
    <>
     <div className="card card-body">
            <div className="d-flex mb-3">
           { /* <!-- Avatar --> */ } 
              <div className="avatar avatar-xs me-2">
                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /> </Link>
              </div>
               { /* <!-- Post input --> */ } 
              <form className="w-100">
                <input className="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
              </form>
            </div>
            { /* <!-- Share feed toolbar START --> */ } 
            <ul className="nav nav-pills nav-stack small fw-normal">
              <li className="nav-item">
                <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-image-fill text-success pe-2"></i>Photo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="bi bi-camera-reels-fill text-info pe-2"></i>Video</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>Event </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling /Activity</Link>
              </li>
              <li className="nav-item dropdown ms-sm-auto">
                <Link className="nav-link bg-light py-1 px-2 mb-0" to="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots"></i>
                </Link>
                { /* <!-- Dropdown menu --> */ } 
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </Link></li>
                  <li><hr className="dropdown-divider"  /></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Help</Link></li>
                </ul>
              </li>
            </ul>
            { /* <!-- Share feed toolbar END --> */ } 
          </div>
     {/* Crd Header Start */}
     <div className="card">
          { /* <!-- Card header START --> */ }
          <div className="card-header border-0 pb-0">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                { /* <!-- Avatar --> */ }
                <div className="avatar avatar-story me-2">
                  <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
                </div>
                { /* <!-- Info --> */ }
                <div>
                  <div className="nav nav-divider">
                    <h6 className="nav-item card-title mb-0"> <Link to="#!"> Lori Ferguson </Link></h6>
                    <span className="nav-item small"> 2hr</span>
                  </div>
                  <p className="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              { /* <!-- Card feed action dropdown START --> */ }
              <div className="dropdown">
                <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots"></i>
                </Link>
                { /* <!-- Card feed action dropdown menu --> */ }
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                </ul>
              </div>
              { /* <!-- Card feed action dropdown END --> */ }
            </div>
          </div>
          { /* <!-- Card header END --> */ }
          { /* <!-- Card body START --> */ }
          <div className="card-body">
            <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
            { /* <!-- Card img --> */ }
            <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="Post" />
            { /* <!-- Feed react START --> */ }
            <ul className="nav nav-stack py-3 small">
              <li className="nav-item">
                <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
              </li>
              { /* <!-- Card share action START --> */ }
              <li className="nav-item dropdown ms-sm-auto">
                <Link className="nav-link mb-0" to="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                </Link>
                { /* <!-- Card share action dropdown menu --> */ }
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                </ul>
              </li>
              { /* <!-- Card share action END --> */ }
            </ul>
            { /* <!-- Feed react END --> */ }

            { /* <!-- Add comment --> */ }
            <div className="d-flex mb-3">
              { /* <!-- Avatar --> */ }
              <div className="avatar avatar-xs me-2">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </Link>
              </div>
              { /* <!-- Comment box  --> */ }
              <form className="w-100">
                <textarea data-autoresize className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
              </form>
            </div>
            { /* <!-- Comment wrap START --> */ }
            <ul className="comment-wrap list-unstyled">
              { /* <!-- Comment item START --> */ }
              <li className="comment-item">
                <div className="d-flex position-relative">
                  { /* <!-- Avatar --> */ }
                  <div className="avatar avatar-xs">
                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                  </div>
                  <div className="ms-2">
                    { /* <!-- Comment by --> */ }
                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                        <small className="ms-2">5hr</small>
                      </div>
                      <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                    </div>
                    { /* <!-- Comment react --> */ }
                    <ul className="nav nav-divider py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> Like (3)</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> Reply</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> View 5 replies</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                { /* <!-- Comment item nested START --> */ }
                <ul className="comment-item-nested list-unstyled">
                  { /* <!-- Comment item START --> */ }
                  <li className="comment-item">
                    <div className="d-flex">
                      { /* <!-- Avatar --> */ }
                      <div className="avatar avatar-xs">
                        <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" /></Link>
                      </div>
                      { /* <!-- Comment by --> */ }
                      <div className="ms-2">
                        <div className="bg-light p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1"> <Link to="#!"> Lori Stevens </Link> </h6>
                            <small className="ms-2">2hr</small>
                          </div>
                          <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                        </div>
                        { /* <!-- Comment react --> */ }
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <Link className="nav-link" to="#!"> Like (5)</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#!"> Reply</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  { /* <!-- Comment item END --> */ }
                  { /* <!-- Comment item START --> */ }
                  <li className="comment-item">
                    <div className="d-flex">
                      { /* <!-- Avatar --> */ }
                      <div className="avatar avatar-story avatar-xs">
                        <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /></Link>
                      </div>
                      { /* <!-- Comment by --> */ }
                      <div className="ms-2">
                        <div className="bg-light p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1"> <Link to="#!"> Billy Vasquez </Link> </h6>
                            <small className="ms-2">15min</small>
                          </div>
                          <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                        </div>
                        { /* <!-- Comment react --> */ }
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <Link className="nav-link" to="#!"> Like</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#!"> Reply</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  { /* <!-- Comment item END --> */ }
                </ul>
                { /* <!-- Load more replies --> */ }
                <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load more replies 
                </Link>
                { /* <!-- Comment item nested END --> */ }
              </li>
              { /* <!-- Comment item END --> */ }
              { /* <!-- Comment item START --> */ }
              <li className="comment-item">
                <div className="d-flex">
                  { /* <!-- Avatar --> */ }
                  <div className="avatar avatar-xs">
                  <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                  </div>
                  { /* <!-- Comment by --> */ }
                  <div className="ms-2">
                    <div className="bg-light p-3 rounded">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link> </h6>
                        <small className="ms-2">4min</small>
                      </div>
                      <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                    </div>
                    { /* <!-- Comment react --> */ }
                    <ul className="nav nav-divider pt-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> Like (1)</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> Reply</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> View 6 replies</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              { /* <!-- Comment item END --> */ }
            </ul>
            { /* <!-- Comment wrap END --> */ }
          </div>
          { /* <!-- Card body END --> */ }
          { /* <!-- Card footer START --> */ }
          <div className="card-footer border-0 pt-0">
            { /* <!-- Load more comments --> */ }
            <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
              <div className="spinner-dots me-2">
                <span className="spinner-dot"></span>
                <span className="spinner-dot"></span>
                <span className="spinner-dot"></span>
              </div>
              Load more comments 
            </Link>
          </div>
          { /* <!-- Card footer END --> */ }
        </div>
     {/* Crd Header End */}
     { /* <!-- Card feed item START --> */ }
          <div className="card">
            
            <div className="border-bottom">
              <p className="small mb-0 px-4 py-2"><i className="bi bi-heart-fill text-danger pe-1"></i>Sam Lanson likes this post</p>
            </div>
            { /* <!-- Card header START --> */ }
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  { /* <!-- Avatar --> */ }
                  <div className="avatar me-2">
                    <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/logo/13.svg" alt="" /> </Link>
                  </div>
                  { /* <!-- Title --> */ }
                  <div>
                    <h6 className="card-title mb-0"> <Link to="#!"> Apple Education </Link></h6>
                    <p className="mb-0 small">9 November at 23:29</p>
                  </div>
                </div>
                { /* <!-- Card share action menu --> */ }
                <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots"></i>
                </Link>
                { /* <!-- Card share action dropdown menu --> */ }
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                </ul>
              </div>
                { /* <!-- Card share action END --> */ }
            </div>
            { /* <!-- Card header START --> */ }

            { /* <!-- Card body START --> */ }
            <div className="card-body pb-0">
              <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start  recognition your first Apple Teacher badge today!</p>
              { /* <!-- Feed react START --> */ }
              <ul className="nav nav-stack pb-2 small">
                <li className="nav-item">
                  <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
                </li>
                <li className="nav-item ms-sm-auto">
                  <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                </li>
              </ul>
              { /* <!-- Feed react END --> */ }
            </div>
            { /* <!-- Card body END --> */ }
            { /* <!-- Card Footer START --> */ }
            <div className="card-footer py-3">
              { /* <!-- Feed react START --> */ }
              <ul className="nav nav-fill nav-stack small">
                <li className="nav-item">
                  <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mb-0" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                </li>
                { /* <!-- Card share action dropdown START --> */ }
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                  </Link>
                  { /* <!-- Card share action dropdown menu --> */ }
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                  </ul>
                </li>
                { /* <!-- Card share action dropdown END --> */ }
                <li className="nav-item">
                  <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                </li>
              </ul>
              { /* <!-- Feed react END --> */ }
            </div>
            { /* <!-- Card Footer END --> */ }
          </div>
          { /* <!-- Card feed item END --> */ }

    </>
  )
}

