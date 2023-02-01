import React from 'react'

import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"
import Home from "./pages/Home"
import MyProfile from "./pages/MyProfile"
import Blog from "./pages/Blog"
import Events from "./pages/Events"
import Notifications from "./pages/Notifications"
import Group from "./pages/Group"
import Settings from "./pages/Settings"
import axios from 'axios'
import md5 from "md5"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Navigation from './components/Main/Navigation'
import PrivateRoute from './pages/private/PrivateRoute'
import ProfileInfo from './components/MyProfile/ProfileInfo'
import NotFound from './components/NotFound'
function App() {
  
  return (
    
    <>
      <div>
        <input type='text' ></input>
      </div>
    <Navigation/>
      <main>
        <div className="container">
          <div className="row g-4">
            {/* pages start here */}
              <Routes>
              <Route path="/" element={<PrivateRoute  component={<Home />}/>} />
              <Route path={"my-profile"} element={<MyProfile />} >
                <Route path="my-profile-about" element={<ProfileInfo />} /> 
              </Route>

                
                {/* Blog */}
                <Route path="blog" element={<Blog />} />

                {/* Events */}
                <Route path="events" element={<Events />} /> 

                {/* Notifications */}
                <Route path="notifications" element={<Notifications />} /> 

                {/* Notifications */}
                <Route path="groups" element={<Group />}></Route>
                
                {/* Settings */}
                <Route path="settings" element={<Settings />}></Route>

                {/* sign-in-advance */}
                <Route path="sign-in-advance" element={<SignIn />}></Route>
                
                {/* sign-Up */}
                <Route path="sign-up" element={<SignUp />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              
              </Routes>
            {/* pages end here */}
          </div>
        </div>
      </main>
   
    </>
  )

}

export default App