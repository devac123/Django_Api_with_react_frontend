import React from 'react'
import { Link } from 'react-router-dom'

export default function PhotosCard() {
    return (
        <>
            { /* <!-- Card START --> */}
            <div className="col-sm-6 col-lg-12">
                <div className="card">
                    {/* <!-- Card header START --> */}
                    <div className="card-header d-sm-flex justify-content-between border-0">
                        <h5 className="card-title">Photos</h5>
                        <Link className="btn btn-primary-soft btn-sm" to="#!"> See all photo</Link>
                    </div>
                    {/* <!-- Card header END --> */}
                    {/* <!-- Card body START --> */}
                    <div className="card-body position-relative pt-0">
                        <div className="row g-2">
                            {/* <!-- Photos item --> */}
                            <div className="col-6">
                                <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                </Link>
                            </div>
                            {/* <!-- Photos item --> */}
                            <div className="col-6">
                                <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                </Link>
                            </div>
                            {/* <!-- Photos item --> */}
                            <div className="col-4">
                                <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                </Link>
                            </div>
                            {/* <!-- Photos item --> */}
                            <div className="col-4">
                                <Link to="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                                    <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                                </Link>
                            </div>
                            {/* <!-- Photos item --> */}
                            <div className="col-4">
                                <Link to="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                                    <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
                                </Link>
                                {/* <!-- glightbox Albums left bar END  --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card body END --> */}
                </div>
            </div>
            {/* <!-- Card END --> */}

        </>
    )
}
