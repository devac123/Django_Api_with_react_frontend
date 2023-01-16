import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileMedia() {
  return (
    <>
      { /* <!-- media START --> */ }
            <div className="card">
              { /* <!-- Card header START --> */ }
              <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
                <h5 className="card-title">Photos</h5>
                { /* <!-- Button modal --> */ }
                <Link className="btn btn-sm btn-primary-soft" to="#" data-bs-toggle="modal" data-bs-target="#modalCreateAlbum"> <i className="fa-solid fa-plus pe-1"></i> Create album</Link>
              </div>
              { /* <!-- Card header END --> */ }
              { /* <!-- Card body START --> */ }
              <div className="card-body">
                { /* <!-- Photos of you tab START --> */ }
                <div className="row g-3">

                  { /* <!-- Add photo START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="border border-2 py-5 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                      <Link className="stretched-link" to="#!">
                        <i className="fa-solid fa-camera-retro fs-1"></i>
                        <h6 className="mt-2">Add photo</h6>
                      </Link>
                    </div>
                  </div>
                  { /* <!-- Add photo END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    { /* <!-- Photo --> */ }
                    <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                    </Link>
                  { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>22k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>3k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
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
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="one form-control pe-4 bg-light" data-autoresize rows="1" placeholder="Add a comment..."></textarea>
                          { /* <!-- Emoji button --> */ }
                          <div className="position-absolute top-0 end-0">
                            <button className="btn" type="button">🙂</button>
                          </div>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3 position-relative">
                    { /* <!-- Photo --> */ }
                    <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                    </Link>
                    { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>32k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>12k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">Web Developer at Webestica</p>
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                          </Link>
                          { /* <!-- Card share action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
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
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    { /* <!-- PHoto --> */ }
                    <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                    </Link>
                    { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>21k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>4k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">Web Developer at Webestica</p>
                          </div>
                        </div>
                        { /* <!-- Card feed action dropdown START --> */ }
                        <div className="dropdown">
                          <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                          </Link>
                          { /* <!-- Card feed action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction3">
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                          </Link>
                          { /* <!-- Card share action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
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
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    { /* <!-- Photo --> */ }
                    <Link to="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                    </Link>
                    { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>32k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>16k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">Web Developer at Webestica</p>
                          </div>
                        </div>
                        { /* <!-- Card feed action dropdown START --> */ }
                        <div className="dropdown">
                          <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction4" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                          </Link>
                          { /* <!-- Card feed action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction4">
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      { /* <!-- likes --> */ }
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
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
                        { /* <!-- Card share action END --> */ }
                      </ul>
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    { /* <!-- Photo --> */ }
                    <Link to="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
                    </Link>
                    { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>20k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>8k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">Web Developer at Webestica</p>
                          </div>
                        </div>
                        { /* <!-- Card feed action dropdown START --> */ }
                        <div className="dropdown">
                          <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction5" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                          </Link>
                          { /* <!-- Card feed action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction5">
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                          </Link>
                          { /* <!-- Card share action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
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
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }

                  { /* <!-- Photo item START --> */ }
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    { /* <!-- Photo --> */ }
                    <Link to="assets/images/albums/06.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                      <img className="rounded img-fluid" src="assets/images/albums/06.jpg" alt="" />
                    </Link>
                    { /* <!-- likes --> */ }
                    <ul className="nav nav-stack py-2 small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>56k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>12k </Link>
                      </li>
                    </ul>
                    { /* <!-- glightbox Albums left bar START --> */ }
                    <div className="glightbox-desc custom-desc2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          { /* <!-- Avatar --> */ }
                          <div className="avatar me-2">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                          </div>
                          { /* <!-- Info --> */ }
                          <div>
                            <div className="nav nav-divider">
                              <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                              <span className="nav-item small"> 2hr</span>
                            </div>
                            <p className="mb-0 small">Web Developer at Webestica</p>
                          </div>
                        </div>
                        { /* <!-- Card feed action dropdown START --> */ }
                        <div className="dropdown">
                          <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction6" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                          </Link>
                          { /* <!-- Card feed action dropdown menu --> */ }
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction6">
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
                      <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                      { /* <!-- likes --> */ }
                      <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                          <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                        </li>
                        { /* <!-- Card share action START --> */ }
                        <li className="nav-item dropdown ms-auto">
                          <Link className="nav-link mb-0" to="#" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
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
                        { /* <!-- Card share action END --> */ }
                      </ul>
                      { /* <!-- Add comment --> */ }
                      <div className="d-flex mb-3">
                        { /* <!-- Avatar --> */ }
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                        </div>
                        { /* <!-- Comment box  --> */ }
                        <form className="position-relative w-100">
                          <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                        </form>
                      </div>
                      { /* <!-- Comment wrap START --> */ }
                      <ul className="comment-wrap list-unstyled ">
                        { /* <!-- Comment item START --> */ }
                        <li className="comment-item">
                          <div className="d-flex">
                            { /* <!-- Avatar --> */ }
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                            </div>
                            <div className="ms-2">
                              { /* <!-- Comment by --> */ }
                              <div className="bg-light rounded-start-top-0 p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
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
                        </li>
                      </ul>
                      { /* <!-- Comment wrap END --> */ }
                    </div>
                    { /* <!-- glightbox Albums left bar END  --> */ }
                  </div>
                  { /* <!-- Photo item END --> */ }
                </div>
                { /* <!-- Photos of you tab END --> */ }
              </div>
              { /* <!-- Card body END --> */ }
            </div>
            { /* <!-- media END --> */ }
    </>
  )
}
