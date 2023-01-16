import React from 'react'



export default function AboutCard() {
  return (
    <>
    { /* <!-- Card START --> */ }
            <div className='col-md-6 col-lg-12'> 
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">About</h5>
                  { /* <!-- Button modal --> */ }
                </div>
                { /* <!-- Card body START --> */ }
                <div className="card-body position-relative pt-0">
                  <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                  { /* <!-- Date time --> */ }
                  <ul className="list-unstyled mt-3 mb-0">
                    <li className="mb-2"> <i className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                    <li className="mb-2"> <i className="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                    <li> <i className="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                  </ul>
                </div>
                { /* <!-- Card body END --> */ }
              </div>
           
            { /* <!-- Card END --> */ }
         </div>
    </>
  )
}
