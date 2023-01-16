import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileVideos() {
  return (
    <>
    
    { /* <!-- Video START --> */ }
        <div className="card">
          { /* <!-- Card header START --> */ }
          <div className="card-header border-0 pb-0">
            <h5 className="card-title">Videos</h5>
            { /* <!-- Button modal --> */ }
          </div>
          { /* <!-- Card header END --> */ }
          { /* <!-- Card body START --> */ }
          <div className="card-body">
            { /* <!-- Video of you tab START --> */ }
            <div className="row g-3">

              { /* <!-- Add Video START --> */ }
              <div className="col-sm-6 col-md-4">
                <div className="border border-2 py-5 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                  <Link className="stretched-link" to="#!">
                    <i className="fa-solid fa-camera-retro fs-1"></i>
                    <h6 className="mt-2">Add Video</h6>
                  </Link>
                </div>
              </div>
              { /* <!-- Add Video END --> */ }

              <div className="col-sm-6 col-md-4">
                { /* <!-- Video START --> */ }
                <div className="card p-0 shadow-none border-0 position-relative">
                  { /* <!-- Video image --> */ }
                  <div className="position-relative">
                    <img className="rounded" src="assets/images/albums/01.jpg" alt="" />
                    { /* <!-- Play icon --> */ }
                    <div className="position-absolute top-0 end-0 p-3">
                      <Link className="icon-md bg-danger text-white rounded-circle" data-glightbox to="assets/images/videos/video-call.mp4"> <i className="bi bi-play-fill fs-5"> </i> </Link>
                    </div>
                    { /* <!-- Duration --> */ }
                    <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                      <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">02:20</span>
                    </div>
                  </div>
                  { /* <!-- Video info --> */ }
                  <div className="card-body px-0 pb-0 pt-2">
                    <ul className="nav nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>22k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>3k </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                { /* <!-- Video END --> */ }
              </div>

              <div className="col-sm-6 col-md-4">
                { /* <!-- Video START --> */ }
                <div className="card p-0 shadow-none border-0 position-relative">
                  { /* <!-- Video image --> */ }
                  <div className="position-relative">
                    <img className="rounded" src="assets/images/albums/03.jpg" alt="" />
                    { /* <!-- Play icon --> */ }
                    <div className="position-absolute top-0 end-0 p-3">
                      <Link className="icon-md bg-danger text-white rounded-circle" data-glightbox to="assets/images/videos/video-call.mp4"> <i className="bi bi-play-fill fs-5"> </i> </Link>
                    </div>
                    { /* <!-- Duration --> */ }
                    <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                      <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">01:15</span>
                    </div>
                  </div>
                  { /* <!-- Video info --> */ }
                  <div className="card-body px-0 pb-0 pt-2">
                    <ul className="nav nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>232k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>43k </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                { /* <!-- Video END --> */ }
              </div>

              <div className="col-sm-6 col-md-4">
                { /* <!-- Video START --> */ }
                <div className="card p-0 shadow-none border-0 position-relative">
                  { /* <!-- Video image --> */ }
                  <div className="position-relative">
                    <img className="rounded" src="assets/images/albums/04.jpg" alt="" />
                    { /* <!-- Play icon --> */ }
                    <div className="position-absolute top-0 end-0 p-3">
                      <Link className="icon-md bg-danger text-white rounded-circle" data-glightbox to="assets/images/videos/video-call.mp4"> <i className="bi bi-play-fill fs-5"> </i> </Link>
                    </div>
                    { /* <!-- Duration --> */ }
                    <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                      <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">02:00</span>
                    </div>
                  </div>
                  { /* <!-- Video info --> */ }
                  <div className="card-body px-0 pb-0 pt-2">
                    <ul className="nav nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>10k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>2k </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                { /* <!-- Video END --> */ }
              </div>

              <div className="col-sm-6 col-md-4">
                { /* <!-- Video START --> */ }
                <div className="card p-0 shadow-none border-0 position-relative">
                  { /* <!-- Video image --> */ }
                  <div className="position-relative">
                    <img className="rounded" src="assets/images/albums/05.jpg" alt="" />
                    { /* <!-- Play icon --> */ }
                    <div className="position-absolute top-0 end-0 p-3">
                      <Link className="icon-md bg-danger text-white rounded-circle" data-glightbox to="assets/images/videos/video-call.mp4"> <i className="bi bi-play-fill fs-5"> </i> </Link>
                    </div>
                    { /* <!-- Duration --> */ }
                    <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                      <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">01:00</span>
                    </div>
                  </div>
                  { /* <!-- Video info --> */ }
                  <div className="card-body px-0 pb-0 pt-2">
                    <ul className="nav nav-stack small">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>56k </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>4k </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                { /* <!-- Video END --> */ }
              </div>
            </div>
            { /* <!-- Video of you tab END --> */ }
          </div>
          { /* <!-- Card body END --> */ }
          { /* <!-- Card footer START --> */ }
          <div className="card-footer border-0 pt-0">
          </div>
          { /* <!-- Card footer END --> */ }
        </div>
        { /* <!-- Video item END --> */ }
    
    </>
  )
}
