import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UsersComp(users) {
   
  let userData = users?.users?.user;
  const [usersDataLimit,setusersDataLimit] = useState(3); 
  return (
    <>
      { /* <!-- Card follow START -->*/}
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          { /* <!-- Card header START -->*/}
          <div className="card-header pb-0 border-0">
            <h5 className="card-title mb-0">Who to follow</h5>
          </div>
          { /* <!-- Card header END -->*/}
          { /* <!-- Card body START -->*/}
          <div className="card-body">
            {/* user data goes here */}
           {userData?.data.map((data , index) => { 
            if (index < usersDataLimit ){
              return <><div className="hstack gap-2 mb-3">
              <div className="avatar">
                <Link to="#!"><img className="avatar-img rounded-circle" src={data.avatar_url} alt="" /></Link>
              </div>
              <div className="overflow-hidden">
                <Link className="h6 mb-0" to="#!">{data?.login}</Link>
                <p className="mb-0 small text-truncate">News anchor</p>
              </div>
              <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto" to="#"><i className="fa-solid fa-plus"> </i></Link>
            </div></>
            }
            })} 
            {/* user data ends here  */}
            <div className="d-grid mt-3">
              <button className="btn btn-sm btn-primary-soft" onClick={()=> {setusersDataLimit(usersDataLimit + 2)}} >View more</button>
            </div>
          </div>
          { /* <!-- Card body END -->*/}
        </div>
      </div>
      { /* <!-- Card follow START -->*/}
    </>
  )
}
