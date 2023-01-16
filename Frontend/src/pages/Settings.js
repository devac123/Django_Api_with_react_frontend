import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCol from '../components/Home/ProfileCol'

export default function Settings() {
  return (
    <>
    <div className='col-lg-3'>
        <ProfileCol />
    </div>
    
    { /* <!-- Main content START --> */ }
        <div className="col-lg-6 vstack gap-4">
          { /* <!-- Setting Tab content START --> */ }
          <div className="tab-content py-0 mb-0">

            { /* <!-- Account setting tab START --> */ }
            <div className="tab-pane show active fade" id="nav-setting-tab-1">
              { /* <!-- Account settings START --> */ }
              <div className="card mb-4">
                
                { /* <!-- Title START --> */ }
                <div className="card-header border-0 pb-0">
                  <h1 className="h5 card-title">Account Settings</h1>
                  <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                </div>
                { /* <!-- Card header START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body">
                  { /* <!-- Form settings START --> */ }
                  <form className="row g-3">
                    { /* <!-- First name --> */ }
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">First name</label>
                      <input type="text" className="form-control" placeholder="" defaultValue="Sam" />
                    </div>
                    { /* <!-- Last name --> */ }
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Last name</label>
                      <input type="text" className="form-control" placeholder="" defaultValue="Lanson" />
                    </div>
                    { /* <!-- Additional name --> */ }
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Additional name</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    { /* <!-- User name --> */ }
                    <div className="col-sm-6">
                      <label className="form-label">User name</label>
                      <input type="text" className="form-control" placeholder="" defaultValue="@samlanson" />
                    </div>
                    { /* <!-- Birthday --> */ }
                    <div className="col-lg-6">
                      <label className="form-label">Birthday </label>
                      <input type="text" className="form-control flatpickr" defaultValue="12/12/1990" />
                    </div>
                    { /* <!-- Allow checkbox --> */ }
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="allow" />
                        <label className="form-check-label" htmlFor="allow">
                          Allow anyone to add you to their team
                        </label>
                      </div>
                    </div>
                    { /* <!-- Phone number --> */ }
                    <div className="col-sm-6">
                      <label className="form-label">Phone number</label>
                      <input type="text" className="form-control" placeholder="" defaultValue="(678) 324-1251" />
                      { /* <!-- Add new number --> */ }
                      <Link className="btn btn-sm btn-dashed rounded mt-2" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add new phone number</Link>
                    </div>
                    { /* <!-- Phone number --> */ }
                    <div className="col-sm-6">
                      <label className="form-label">Email</label>
                      <input type="text" className="form-control" placeholder="" defaultValue="sam@webestica.com" />
                      { /* <!-- Add new email --> */ }
                      <Link className="btn btn-sm btn-dashed rounded mt-2" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add new email address</Link>
                    </div>
                    { /* <!-- Page information --> */ }
                    <div className="col-12">
                      <label className="form-label">Overview</label>
                      <textarea className="form-control" rows="4" placeholder="Description (Required)">Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</textarea>
                      <small>Character limit: 300</small>
                    </div>
                    { /* <!-- Button  --> */ }
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                    </div>
                  </form>
                  { /* <!-- Settings END --> */ }
                </div>
              { /* <!-- Card body END --> */ }
              </div>
              { /* <!-- Account settings END --> */ }

              { /* <!-- Change your password START --> */ }
              <div className="card">
                { /* <!-- Title START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Change your password</h5>
                  <p className="mb-0">See resolved goodness felicity shy civility domestic had but.</p>
                </div>
                { /* <!-- Title START --> */ }
                <div className="card-body">
                  { /* <!-- Settings START --> */ }
                  <form className="row g-3">
                    { /* <!-- Current password --> */ }
                    <div className="col-12">
                      <label className="form-label">Current password</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    { /* <!-- New password --> */ }
                    <div className="col-12">
                      <label className="form-label">New password</label>
                      { /* <!-- Input group --> */ }
                      <div className="input-group">
                        <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                        <span className="input-group-text p-0">
                          <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                        </span>
                      </div>
                      { /* <!-- Pswmeter --> */ }
                      <div id="pswmeter" className="mt-2"></div>
                      <div id="pswmeter-message" className="rounded mt-1"></div>
                    </div>
                    { /* <!-- Confirm password --> */ }
                    <div className="col-12">
                      <label className="form-label">Confirm password</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    { /* <!-- Button  --> */ }
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary mb-0">Update password</button>
                    </div>
                  </form>
                  { /* <!-- Settings END --> */ }
                </div>
              </div>
              { /* <!-- Card END --> */ }
            </div>
            { /* <!-- Account setting tab END --> */ }

            { /* <!-- Notification tab START --> */ }
            <div className="tab-pane fade" id="nav-setting-tab-2">
              { /* <!-- Notification START --> */ }
              <div className="card">
                { /* <!-- Card header START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Notification</h5>
                  <p className="mb-0">Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed. </p>
                </div>
                { /* <!-- Card header START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body pb-0">
                  { /* <!-- Notification START --> */ }
                  <ul className="list-group list-group-flush">
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Likes and Comments</h6>
                        <p className="small mb-0">Joy say painful removed reached end.</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Reply to My comments</h6>
                        <p className="small mb-0">Ask a quick six seven offer see among.</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck2" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Subscriptions</h6>
                        <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck3" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Birthdays</h6>
                        <p className="small mb-0">Contented he gentleman agreeable do be</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck4" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Events</h6>
                        <p className="small mb-0">Fulfilled direction use continually.</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck5" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item px-0 py-3">
                      { /* <!-- Accordion START --> */ }
                      <div className="accordion accordion-flush border-0" id="emailNotifications">
                        { /* <!-- Accordion item --> */ }
                        <div className="accordion-item bg-transparent">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <Link to="#!" className="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <span>
                                <span className="mb-0 h6 d-block">Email notifications</span>
                                <small className="small mb-0 text-secondary">As hastened oh produced prospect. </small>
                              </span>
                            </Link>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#emailNotifications">
                            <div className="accordion-body p-0 pt-3">
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue="" id="NotiSwitchCheck6" />
                                  <label className="form-check-label" htmlFor="NotiSwitchCheck6">
                                    Product emails
                                  </label>
                                </div>
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue="" id="NotiSwitchCheckChecke7" />
                                  <label className="form-check-label" htmlFor="NotiSwitchCheckChecke7">
                                    Feedback emails
                                  </label>
                                </div>
                                <hr />
                              <div className="mt-3">
                                <h6>Email frequency</h6>
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio1" />
                                  <label className="form-check-label" htmlFor="NotiRadio1">
                                    Daily
                                  </label>
                                </div>
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio2" /> 
                                  <label className="form-check-label" htmlFor="NotiRadio2">
                                    Weekly
                                  </label>
                                </div>
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio3" />
                                  <label className="form-check-label" htmlFor="NotiRadio3">
                                    Periodically
                                  </label>
                                </div>
                                { /* <!-- Notification list item --> */ }
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio4" />
                                  <label className="form-check-label" htmlFor="NotiRadio4">
                                    Off
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      { /* <!-- Accordion END --> */ }
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Push notifications</h6>
                        <p className="small mb-0">Rendered six say his striking confined. </p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck8" />
                      </div>
                    </li>
                    { /* <!-- Notification list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div className="me-2">
                        <h6 className="mb-0">Weekly account summary <span className="badge bg-primary smaller"> Pro only</span> </h6>
                        <p className="small mb-0">Rendered six say his striking confined. </p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheck9" />
                      </div>
                    </li>
                  </ul>
                  { /* <!-- Notification END --> */ }
                  
                </div>
              { /* <!-- Card body END --> */ }
              { /* <!-- Button save --> */ }
              <div className="card-footer pt-0 text-end border-0">
                <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
            </div>
              { /* <!-- Notification END --> */ }
            </div>
            { /* <!-- Notification tab END --> */ }

            { /* <!-- Privacy and safety tab START --> */ }
            <div className="tab-pane fade" id="nav-setting-tab-3">
              { /* <!-- Privacy and safety START --> */ }
              <div className="card">
                { /* <!-- Card header START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Privacy and safety</h5>
                  <p className="mb-0">See information about your account, download an archive of your data, or learn about your account deactivation options</p>
                </div>
                { /* <!-- Card header START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body">
                  { /* <!-- Privacy START --> */ }
                  <ul className="list-group">
                    
                    { /* <!-- Privacy item --> */ }
                    <li className="list-group-item d-md-flex justify-content-between align-items-start">
                      <div className="me-md-3">
                        <h6 className="mb-0">	Use two-factor authentication</h6>  
                        <p className="small mb-0">Unaffected occasional thoroughly. Adieus it no wonders spirit houses. </p>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>

                    { /* <!-- Privacy item --> */ }
                    <li className="list-group-item d-md-flex justify-content-between align-items-start">
                      <div className="me-md-3">
                        <h6 className="mb-0">Login activity</h6>  
                        <p className="small mb-0">Select the language you use on social</p>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0" data-bs-toggle="modal" data-bs-target="#modalLoginActivity"> <i className="bi bi-eye"></i> View</button>
                    </li>

                    { /* <!-- Privacy item --> */ }
                    <li className="list-group-item d-md-flex justify-content-between align-items-start">
                      <div className="me-md-3">
                        <h6 className="mb-0">Manage your data and activity</h6>  
                        <p className="small mb-0">Select a language for translation</p>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>

                    { /* <!-- Privacy item --> */ }
                    <li className="list-group-item d-md-flex justify-content-between align-items-start">
                      <div className="me-md-3">
                        <h6 className="mb-0">Search history</h6>  
                        <p className="small mb-0">Choose to autoplay videos on social</p>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>

                    { /* <!-- Privacy item --> */ }
                    <li className="list-group-item d-md-flex justify-content-between align-items-start">
                      <div className="me-md-3">
                        <h6 className="mb-0">Permitted services</h6>  
                        <p className="small mb-0">Choose if this feature appears on your profile</p>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>
                  </ul>
                  { /* <!-- Privacy END --> */ }
                </div>
                { /* <!-- Card body END --> */ }
                { /* <!-- Button save --> */ }
                <div className="card-footer pt-0 text-end border-0">
                  <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                </div>
              </div>
              { /* <!-- Privacy and safety END --> */ }
            </div>
            { /* <!-- Privacy and safety tab END --> */ }

            { /* <!-- Communications tab START --> */ }
            <div className="tab-pane fade" id="nav-setting-tab-4">
              { /* <!-- Communications START --> */ }
              <div className="card">
                { /* <!-- Title START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Who can connect with you?</h5>
                  <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                </div>
                { /* <!-- Title START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body">
                  { /* <!-- Accordion START --> */ }
                  <div className="accordion" id="communications">
                    { /* <!-- Accordion item --> */ }
                    <div className="accordion-item bg-transparent">
                      <h2 className="accordion-header" id="communicationOne">
                        <button className="accordion-button mb-0 h6" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseOne" aria-expanded="true" aria-controls="communicationcollapseOne">
                         Connection request
                        </button>
                      </h2>
                      { /* <!-- Accordion info --> */ }
                      <div id="communicationcollapseOne" className="accordion-collapse collapse show" aria-labelledby="communicationOne" data-bs-parent="#communications">
                        <div className="accordion-body">
                           { /* <!-- Notification list item --> */ }
                           <div className="form-check">
                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio5" />
                            <label className="form-check-label" htmlFor="ComRadio5">
                              Everyone on social (recommended)
                            </label>
                          </div>
                          { /* <!-- Notification list item --> */ }
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio2" />
                            <label className="form-check-label" htmlFor="ComRadio2">
                              Only people who know your email address
                            </label>
                          </div>
                          { /* <!-- Notification list item --> */ }
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio3" />
                            <label className="form-check-label" htmlFor="ComRadio3">
                              Only people who appear in your mutual connection list
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    { /* <!-- Accordion item --> */ }
                    <div className="accordion-item bg-transparent">
                      <h2 className="accordion-header" id="communicationTwo">
                        <button className="accordion-button mb-0 h6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseTwo" aria-expanded="false" aria-controls="communicationcollapseTwo">
                          Who can message you
                        </button>
                      </h2>
                      { /* <!-- Accordion info --> */ }
                      <div id="communicationcollapseTwo" className="accordion-collapse collapse" aria-labelledby="communicationTwo" data-bs-parent="#communications">
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Enable message request notifications</p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck" />
                              </div>
                            </li>
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Allow connections to add you on group </p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck2" />
                              </div>
                            </li>
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Allow Sponsored Messages </p>
                                <p className="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck3" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    { /* <!-- Accordion item --> */ }
                    <div className="accordion-item bg-transparent">
                      <h2 className="accordion-header" id="communicationThree">
                        <button className="accordion-button mb-0 h6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseThree" aria-expanded="false" aria-controls="communicationcollapseThree">
                          How people can find you
                        </button>
                      </h2>
                      { /* <!-- Accordion info --> */ }
                      <div id="communicationcollapseThree" className="accordion-collapse collapse" aria-labelledby="communicationThree" data-bs-parent="#communications">
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Allow search engines to show your profile?</p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck4" />
                              </div>
                            </li>
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Allow people to search by your email address? </p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck5" />
                              </div>
                            </li>
                            { /* <!-- Notification list item --> */ }
                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                              <div className="me-2">
                                <p className="mb-0">Allow Sponsored Messages </p>
                                <p className="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                              </div>
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheck6" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 { /* <!-- Accordion END --> */ }
                </div>
              { /* <!-- Card body END --> */ }
               { /* <!-- Button save --> */ }
               <div className="card-footer pt-0 text-end border-0">
                <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
              </div>
              { /* <!-- Communications  END --> */ }
            </div>
            { /* <!-- Communications tab END --> */ }

            { /* <!-- Messaging tab START --> */ }
            <div className="tab-pane fade" id="nav-setting-tab-5">
              { /* <!-- Messaging privacy START --> */ }
              <div className="card mb-4">
                { /* <!-- Title START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Messaging privacy settings</h5>
                  <p className="mb-0">As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived. </p>
                </div>
                { /* <!-- Title START --> */ }
                <div className="card-body">
                  { /* <!-- Settings style START --> */ }
                  <ul className="list-group list-group-flush">
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Enable message request notifications</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck" />
                      </div>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Invitations from your network</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck2" />
                      </div>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Allow connections to add you on group</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck3" />
                      </div>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Reply to comments</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck4" />
                      </div>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Messages from activity on my page or channel</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck5" />
                      </div>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Personalise tips for my page</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheck6" />
                      </div>
                    </li>
                  </ul>
                  { /* <!-- Message END --> */ }
              </div>
               { /* <!-- Button save --> */ }
               <div className="card-footer pt-0 text-end border-0">
                <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
              </div>
              { /* <!-- Messaging privacy END --> */ }
              { /* <!-- Messaging experience START --> */ }
              <div className="card">
                { /* <!-- Card header START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Messaging experience</h5>
                  <p className="mb-0">Arrived off she elderly beloved him affixed noisier yet. </p>
                </div>
                { /* <!-- Card header START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body">
                  { /* <!-- Message START --> */ }
                  <ul className="list-group list-group-flush">
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Read receipts and typing indicators</h6>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Message suggestions</h6>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>
                    { /* <!-- Message list item --> */ }
                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div className="me-2">
                        <h6 className="mb-0">Message nudges</h6>
                      </div>
                      <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                    </li>
                  </ul>
                  { /* <!-- Message END --> */ }
                </div>
              { /* <!-- Card body END --> */ }
               { /* <!-- Button save --> */ }
               <div className="card-footer pt-0 text-end border-0">
                <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
              </div>
              { /* <!-- Messaging experience END --> */ }
            </div>
            { /* <!-- Messaging tab END --> */ }

            { /* <!-- Close account tab START --> */ }
            <div className="tab-pane fade" id="nav-setting-tab-6">
              { /* <!-- Card START --> */ }
              <div className="card">
                { /* <!-- Card header START --> */ }
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">Delete account</h5>
                  <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                </div>
                { /* <!-- Card header START --> */ }
                { /* <!-- Card body START --> */ }
                <div className="card-body">
                  { /* <!-- Delete START --> */ }
                  <h6>Before you go...</h6>
                  <ul>
                    <li>Take a backup of your data <Link to="#">Here</Link> </li>
                    <li>If you delete your account, you will lose your all data.</li>
                  </ul>
                  <div className="form-check form-check-md my-4">
                    <input className="form-check-input" type="checkbox" defaultValue="" id="deleteaccountCheck" />
                    <label className="form-check-label" htmlFor="deleteaccountCheck">Yes, I'd like to delete my account</label>
                  </div>
                  <Link to="#" className="btn btn-success-soft btn-sm mb-2 mb-sm-0">Keep my account</Link>
                  <Link to="#" className="btn btn-danger btn-sm mb-0">Delete my account</Link>
                  { /* <!-- Delete END --> */ }
                </div>
              { /* <!-- Card body END --> */ }
              </div>
              { /* <!-- Card END --> */ }
            </div>
            { /* <!-- Close account tab END --> */ }

          </div>
          { /* <!-- Setting Tab content END --> */ }
        </div>



    </>
  )
}
