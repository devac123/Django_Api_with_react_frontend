import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PostCol() {
 
  return (
    <>
      { /* <!-- Story START --> */ }
      {/* <TinySlider /> */}
      { /* <!-- Story END --> */ }
      { /* <!-- Share feed START --> */ }
      <div className="card card-body">
        <div className="d-flex mb-3">
          { /* <!-- Avatar --> */ }
          <div className="avatar avatar-xs me-2">
            <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" /> </Link>
          </div>
          
          { /* <!-- Post input --> */ }
          <form className="w-100">
            <textarea className="form-control pe-4 border-0" rows="2" data-autoresize placeholder="Share your thoughts..."></textarea>
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
          <li className="nav-item dropdown ms-lg-auto">
            <Link className="nav-link bg-light py-1 px-2 mb-0" to="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </Link>
            { /* <!-- Dropdown menu --> */ }
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
              <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll</Link></li>
              <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Help</Link></li>
            </ul>
          </li>
        </ul>
        { /* <!-- Share feed toolbar END --> */ }
      </div>
      { /* <!-- Share feed END --> */ }

      { /* <!-- Card feed item START --> */ }
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
                <li><hr className="dropdown-divider"  /></li>
                <li><Link className="dropdown-item" to="#" > <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
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
      { /* <!-- Card feed item END --> */ }

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar me-2">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt="" /> </Link>
              </div>
              { /* <!-- Info --> */ }
              <div>
                <h6 className="card-title mb-0"><Link to="#!"> Bootstrap: Front-end framework </Link></h6>
                <Link to="#!" className="mb-0 text-body">Sponsored <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."></i> </Link>
              </div>
            </div>
            { /* <!-- Card share action START --> */ }
            <div className="dropdown">
              <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction2" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                <li><hr className="dropdown-divider"  /></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
              </ul>
            </div>
            { /* <!-- Card share action START --> */ }
          </div>
        </div>
        { /* <!-- Card header START --> */ }
        
        { /* <!-- Card body START --> */ }
        <div className="card-body">
          <p className="mb-0">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
        </div>
        <img src="assets/images/post/3by2/02.jpg" alt="" />
        { /* <!-- Card body END --> */ }
        { /* <!-- Card footer START --> */ }
        <div className="card-footer border-0 d-flex justify-content-between align-items-center">
          <p className="mb-0">Currently v5.1.3 </p>
          <Link className="btn btn-primary-soft btn-sm" to="#"> Download now </Link>
        </div>
        { /* <!-- Card footer END --> */ }

      </div>
      { /* <!-- Card feed item END --> */ }

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header border-0 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar me-2">
                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
              </div>
              { /* <!-- Info --> */ }
              <div>
                <h6 className="card-title mb-0"> <Link to="#"> Judy Nguyen </Link></h6>
                  <div className="nav nav-divider">
                    <p className="nav-item mb-0 small">Web Developer at Webestica</p>
                    <span className="nav-item small" data-bs-toggle="tooltip" data-bs-placement="top" title="Public"> <i className="bi bi-globe"></i> </span>
                  </div>
              </div>
            </div>
            { /* <!-- Card share action START --> */ }
            <div className="dropdown">
              <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
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
        </div>
        { /* <!-- Card header START --> */ }
        { /* <!-- Card body START --> */ }
        <div className="card-body">
          <p>I'm so privileged to be involved in the <Link to="#!">@bootstrap </Link>hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! <Link to="#!"> #inclusivebusiness</Link> <Link to="#!"> #internship</Link> <Link to="#!"> #hiring</Link> <Link to="#"> #apply </Link></p>
          { /* <!-- Card feed grid START --> */ }
          <div className="d-flex justify-content-between">
            <div className="row g-3">
              <div className="col-6">
                { /* <!-- Grid img --> */ }
                <Link className="h-100" to="assets/images/post/1by1/03.jpg" data-glightbox data-gallery="image-popup">
                  <img className="rounded img-fluid" src="assets/images/post/1by1/03.jpg" alt="img1" />
                </Link>
              </div>
              <div className="col-6">
                { /* <!-- Grid img --> */ }
                <Link to="assets/images/post/3by2/01.jpg" data-glightbox data-gallery="image-popup">
                  <img className="rounded img-fluid" src="assets/images/post/3by2/01.jpg" alt="Img2" />
                </Link>
                { /* <!-- Grid img --> */ }
                <div className="position-relative bg-dark mt-3 rounded">
                  <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                    <Link className="btn btn-link text-white" to="#"> View all </Link>
                  </div>
                  <Link to="assets/images/post/3by2/02.jpg" data-glightbox data-gallery="image-popup">
                    <img className="img-fluid opacity-50 rounded" src="assets/images/post/3by2/02.jpg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          { /* <!-- Card feed grid END --> */ }
          
          { /* <!-- Feed react START --> */ }
          <ul className="nav nav-stack py-3 small">
            <li className="nav-item">
              <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
            </li>
            <li className="nav-item ms-sm-auto">
              <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
            </li>
          </ul>
          { /* <!-- Feed react END --> */ }

          { /* <!-- Feed react START --> */ }
          <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
            <li className="nav-item">
              <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
            </li>
            { /* <!-- Card share action menu START --> */ }
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link mb-0" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
              </Link>
                { /* <!-- Card share action dropdown menu --> */ }
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction4">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
              </ul>
            </li>
            { /* <!-- Card share action menu END --> */ }
            <li className="nav-item">
              <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
            </li>
          </ul>
          { /* <!-- Feed react START --> */ }
        
          { /* <!-- Comment wrap START --> */ }
          <ul className="comment-wrap list-unstyled">
            { /* <!-- Comment item START --> */ }
            <li className="comment-item">
              <div className="d-flex">
                { /* <!-- Avatar --> */ }
                <div className="avatar avatar-xs">
                  <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /> </Link>
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
                  { /* <!-- Comment rect --> */ }
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
                      { /* <!-- Comment rect --> */ }
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
                    <div className="avatar avatar-xs">
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
                      { /* <!-- Comment rect --> */ }
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
                    <div className="d-flex justify-content-center">
                      <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link> </h6>
                      <small className="ms-2">4min</small>
                    </div>
                    <p className="small mb-0">Congratulations:)</p>
                    <div className="card p-2 border border-2 rounded mt-2 shadow-none">
                      <img src="assets/images/elements/12.svg" alt="" />
                    </div>
                  </div>
                  { /* <!-- Comment rect --> */ }
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
      { /* <!-- Card feed item END --> */ }

      { /* <!-- Card feed item START --> */ }
      <div className="card">
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

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
          <h6 className="card-title mb-0">People you may know</h6>
          <button className="btn btn-sm btn-primary-soft"> See all </button>
        </div>      
        { /* <!-- Card header START --> */ }

        { /* <!-- Card body START --> */ }
        <div className="card-body">
          <div className="tiny-slider arrow-hover">
            <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="false" data-items-xl="3" data-items-lg="2" data-items-md="2" data-items-sm="2" data-items-xs="1" data-gutter="12" data-edge="30">
              { /* <!-- Slider items --> */ }
              <div> 
                { /* <!-- Card add friend item START --> */ }
                <div className="card shadow-none text-center">
                  { /* <!-- Card body --> */ }
                  <div className="card-body p-2 pb-0">
                    <div className="avatar avatar-xl">
                      <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="" /></Link>
                    </div>
                    <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Amanda Reed </Link></h6>
                    <p className="mb-0 small lh-sm">50 mutual connections</p>
                  </div>
                  { /* <!-- Card footer --> */ }
                  <div className="card-footer p-2 border-0">
                    <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                  </div>
                </div>
                { /* <!-- Card add friend item END --> */ }
              </div>
              <div>
                { /* <!-- Card add friend item START --> */ }
                <div className="card shadow-none text-center">
                  { /* <!-- Card body --> */ }
                  <div className="card-body p-2 pb-0">
                    <div className="avatar avatar-story avatar-xl">
                      <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" /></Link>
                    </div>
                    <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Larry Lawson </Link></h6>
                    <p className="mb-0 small lh-sm">33 mutual connections</p>
                  </div>
                  { /* <!-- Card footer --> */ }
                  <div className="card-footer p-2 border-0">
                    <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                  </div>
                </div>
                { /* <!-- Card add friend item END --> */ }
              </div>
              <div>
                { /* <!-- Card add friend item START --> */ }
                <div className="card shadow-none text-center">
                  { /* <!-- Card body --> */ }
                  <div className="card-body p-2 pb-0">
                    <div className="avatar avatar-xl">
                      <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" /></Link>
                    </div>
                    <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Louis Crawford </Link></h6>
                    <p className="mb-0 small lh-sm">45 mutual connections</p>
                  </div>
                  { /* <!-- Card footer --> */ }
                  <div className="card-footer p-2 border-0">
                    <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                  </div>
                </div>
                { /* <!-- Card add friend item END --> */ }
              </div>
              <div>
                { /* <!-- Card add friend item START --> */ }
                <div className="card shadow-none text-center">
                  { /* <!-- Card body --> */ }
                  <div className="card-body p-2 pb-0">
                    <div className="avatar avatar-xl">
                      <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /></Link>
                    </div>
                    <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Dennis Barrett </Link></h6>
                    <p className="mb-0 small lh-sm">21 mutual connections</p>
                  </div>
                  { /* <!-- Card footer --> */ }
                  <div className="card-footer p-2 border-0">
                    <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                  </div>
                </div>
                { /* <!-- Card add friend item END --> */ }
              </div>
            </div>
          </div>
        </div>
        { /* <!-- Card body END --> */ }
      </div>
      { /* <!-- Card feed item END --> */ }

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header border-0 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar me-2">
                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
              </div>
              { /* <!-- Title --> */ }
              <div>
                <h6 className="card-title mb-0"> <Link to="#!"> All in the Mind </Link></h6>
                <p className="mb-0 small">9 November at 23:29</p>
              </div>
            </div>
            { /* <!-- Card share action menu --> */ }
            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction7" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </Link>
            { /* <!-- Card share action dropdown menu --> */ }
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction7">
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
          <p>How do you protect your business against cyber-crime?</p>
           <div className="vstack gap-2">
             { /* <!-- Feed poll item --> */ }
            <div>
              <input type="radio" className="btn-check" name="poll" id="option" />
              <label className="btn btn-outline-primary w-100" htmlFor="option">We have cybersecurity insurance coverage</label>
            </div>
            { /* <!-- Feed poll item --> */ }
            <div>
              <input type="radio" className="btn-check" name="poll" id="option2" />
              <label className="btn btn-outline-primary w-100" htmlFor="option2">Our dedicated staff will protect us</label>
            </div>
            { /* <!-- Feed poll item --> */ }
            <div>
              <input type="radio" className="btn-check" name="poll" id="option3" />
              <label className="btn btn-outline-primary w-100" htmlFor="option3">We give regular training for best practices</label>
            </div>
            { /* <!-- Feed poll item --> */ }
            <div>
              <input type="radio" className="btn-check" name="poll" id="option4" />
              <label className="btn btn-outline-primary w-100" htmlFor="option4">Third-party vendor protection</label>
            </div>
         </div> 

         { /* <!-- Feed poll votes START --> */ }
          <ul className="nav nav-divider mt-2 mb-0">
            <li className="nav-item">
              <Link className="nav-link" to="#">263 votes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">2d left</Link>
            </li>
          </ul>
          { /* <!-- Feed poll votes ED --> */ }

          { /* <!-- Feed react START --> */ }
          <ul className="nav nav-stack pb-2 small mt-4">
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
            { /* <!-- Card share action dropdown START --> */ }
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link mb-0" id="feedActionShare6" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare6">
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

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header border-0 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar me-2">
                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
              </div>
              { /* <!-- Title --> */ }
              <div>
                <h6 className="card-title mb-0"> <Link to="#!"> All in the Mind </Link></h6>
                <p className="mb-0 small">9 November at 23:29</p>
              </div>
            </div>
            { /* <!-- Card share action menu --> */ }
            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction10" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </Link>
            { /* <!-- Card share action dropdown menu --> */ }
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction10">
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
          <p>How do you protect your business against cyber-crime?</p>
          <div className="card card-body mt-4">
            { /* <!-- Title --> */ }
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <span className="small">16/20 responded</span>
              <span className="small">Results not visible to participants</span>
            </div>

            { /* <!-- Results --> */ }
            <div className="vstack gap-4 gap-sm-3 mt-3">
              { /* <!-- Option 1 result START --> */ }
              <div className="d-flex align-items-center justify-content-between">
                { /* <!-- Progress bar --> */ }
                <div className="overflow-hidden w-100 me-3">
                  <div className="progress bg-primary bg-opacity-10 position-relative" style={{"height": "30px"}}>
                    <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We have cybersecurity insurance coverage </span>
                  </div>
                </div>
                <div className="flex-shrink-0">25%</div>
              </div>
              { /* <!-- Option 1 result END --> */ }

              { /* <!-- Option 2 result START --> */ }
              <div className="d-flex align-items-center justify-content-between">
                { /* <!-- Progress bar --> */ }
                <div className="overflow-hidden w-100 me-3">
                  <div className="progress bg-primary bg-opacity-10 position-relative" style={{"height": "30px"}}>
                    <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{"width": "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Our dedicated staff will protect us</span>
                  </div>
                </div>
                <div className="flex-shrink-0">15%</div>
              </div>
              { /* <!-- Option 2 result END --> */ }

              { /* <!-- Option 3 result START --> */ }
              <div className="d-flex align-items-center justify-content-between">
                { /* <!-- Progress bar --> */ }
                <div className="overflow-hidden w-100 me-3">
                  <div className="progress bg-primary bg-opacity-10 position-relative" style={{"height": "30px"}}>
                    <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We give regular training for best practices</span>
                  </div>
                </div>
                <div className="flex-shrink-0">10%</div>
              </div>
              { /* <!-- Option 3 result END --> */ }

              { /* <!-- Option 4 result START --> */ }
              <div className="d-flex align-items-center justify-content-between">
                { /* <!-- Progress bar --> */ }
                <div className="overflow-hidden w-100 me-3">
                  <div className="progress bg-primary bg-opacity-10 position-relative" style={{"height": "30px"}}>
                    <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{"width": "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Third-party vendor protection</span>
                  </div>
                </div>
                <div className="flex-shrink-0">55%</div>
              </div>
              { /* <!-- Option 4 result END --> */ }
            </div>
          </div>

          { /* <!-- Feed poll votes START --> */ }
          <ul className="nav nav-divider mt-2 mb-0">
            <li className="nav-item">
              <Link className="nav-link" to="#">263 votes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">2d left</Link>
            </li>
          </ul>
          { /* <!-- Feed poll votes ED --> */ }

          { /* <!-- Feed react START --> */ }
          <ul className="nav nav-stack pb-2 small mt-4">
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
            { /* <!-- Card share action dropdown START --> */ }
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link mb-0" id="feedActionShare8" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare8">
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
      

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar me-2">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/11.svg" alt="" /> </Link>
              </div>
              { /* <!-- Info --> */ }
              <div>
                <h6 className="card-title mb-0"> <Link to="#!"> Webestica </Link></h6>
                <p className="small mb-0">9 December at 10:00 </p>
              </div>
            </div>
            { /* <!-- Card share action START --> */ }
            <div className="dropdown">
              <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
              </ul>
            </div>
            { /* <!-- Card share action START --> */ }
          </div>
        </div>
        { /* <!-- Card header START --> */ }
        
        { /* <!-- Card body START --> */ }
        <div className="card-body">
          <p className="mb-0">The next-generation blog, news, and magazine theme for you to start sharing your content today with beautiful aesthetics! This minimal & clean Bootstrap 5 based theme is ideal for all types of sites that aim to provide users with content. <Link to="#!"> #bootstrap</Link> <Link to="#!"> #webestica </Link> <Link to="#!"> #getbootstrap</Link> <Link to="#"> #bootstrap5 </Link></p>
        </div>
        { /* <!-- Card body END --> */ }
        <Link to="#!"> <img src="assets/images/post/3by2/03.jpg" alt="" /> </Link>
        { /* <!-- Card body START --> */ }
        <div className="card-body position-relative bg-light">
          <Link to="#!" className="small stretched-link">https://blogzine.webestica.com</Link>
          <h6 className="mb-0 mt-1">Blogzine - Blog and Magazine Bootstrap 5 Theme</h6>
          <p className="mb-0 small">Bootstrap based News, Magazine and Blog Theme</p>
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
              <Link to="#" className="nav-link mb-0" id="feedActionShare7" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
              </Link>
              { /* <!-- Card share action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare7">
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

      { /* <!-- Card feed item START --> */ }
      <div className="card">
        { /* <!-- Card header START --> */ }
        <div className="card-header border-0 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              { /* <!-- Avatar --> */ }
              <div className="avatar avatar-story me-2">
                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </Link>
              </div>
              { /* <!-- Info --> */ }
              <div>
                <div className="nav nav-divider">
                  <h6 className="nav-item card-title mb-0"> <Link to="#!"> Joan Wallace </Link></h6>
                  <span className="nav-item small"> 1day</span>
                </div>
                <p className="mb-0 small">12 January at 12:00</p>
              </div>
            </div>
            { /* <!-- Card feed action dropdown START --> */ }
            <div className="dropdown">
              <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction2" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </Link>
              { /* <!-- Card feed action dropdown menu --> */ }
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">
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
        <div className="card-body pb-0">
          <p>Comfort reached gay perhaps chamber his <Link to="#!">#internship</Link>  <Link to="#!">#hiring</Link> <Link to="#!">#apply</Link> </p>
        </div>
          { /* <!-- Card img --> */ }
          <div className="overflow-hidden fullscreen-video w-100">

            { /* <!-- HTML video START --> */ }
            <div className="player-wrapper overflow-hidden">
              {/* <video className="player-html" controls crossorigin="anonymous" poster="assets/images/videos/poster.jpg">
                <source src="assets/images/videos/video-feed.mp4" type="video/mp4">
              </video> */}
            </div>
            { /* <!-- HTML video END --> */ }
        
            { /* <!-- Plyr resources and browser polyfills are specified in the pen settings --> */ }
          </div>
          { /* <!-- Feed react START --> */ }
          <div className="card-body pt-0">
            <ul className="nav nav-stack py-3 small">
              <li className="nav-item">
                <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
              </li>
              { /* <!-- Card share action START --> */ }
              <li className="nav-item dropdown ms-sm-auto">
                <Link className="nav-link mb-0" to="#" id="cardShareAction9" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                </Link>
                { /* <!-- Card share action dropdown menu --> */ }
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction9">
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
              { /* <!-- Comment box  --> */ }
              <form className="position-relative w-100">
                <textarea data-autoresize className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                { /* <!-- Emoji button --> */ }
                
              </form>
            </div>
            { /* <!-- Comment wrap START --> */ }
            <ul className="comment-wrap list-unstyled mb-0">
              { /* <!-- Comment item START --> */ }
              <li className="comment-item">
                <div className="d-flex">
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
                      <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
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
                          <p className="small mb-0">Dependent on so extremely delivered by. Yet ﻿no jokes worse her why.</p>
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
                </ul>
                { /* <!-- Comment item nested END --> */ }
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
        { /* <!-- Card feed item END --> */ }

        { /* <!-- Load more button START --> */ }
        <Link to="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
          <span className="load-text"> Load more </span>
          <div className="load-icon">
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Link>
        { /* <!-- Load more button END --> */ }

    </>
    
   

  )
}
