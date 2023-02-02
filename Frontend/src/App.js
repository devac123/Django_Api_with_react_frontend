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
import ProfileFeeds from './components/MyProfile/ProfileFeeds'
import ProfileConnections from './components/MyProfile/ProfileConnection'
import ProfileMedia from './components/MyProfile/ProfileMedia'
import ProfileActivity from './components/MyProfile/ProfileActivity'
import ProfileEvents from './components/MyProfile/ProfileEvents'
import ProfileVideos from './components/MyProfile/ProfileVideos'
import AuthProvider from './components/context/UserContext'

function App() {
  
  return (
    <>
    <AuthProvider>
    
      <div>
        <input type='text' ></input>
      </div>
    <Navigation/>
      <main>
        <div className="container">
          <div className="row g-4">
              <Routes>
                <Route path="/" element={<PrivateRoute  component={<Home />}/>} />
                <Route path={"my-profile"} element={<MyProfile />} >
                  <Route path="" element={<ProfileFeeds />} /> 
                  <Route path="my-profile-about" element={<ProfileInfo />} /> 
                  <Route path="my-profile-connections" element={<ProfileConnections />} /> 
                  <Route path="my-profile-media" element={<ProfileMedia />} /> 
                  <Route path="my-profile-activity" element={<ProfileActivity />} /> 
                  <Route path="my-profile-events" element={<ProfileEvents />} /> 
                  <Route path="my-profile-videos" element={<ProfileVideos />} /> 
                </Route>

                <Route path="blog" element={<Blog />} />
                <Route path="events" element={<Events />} /> 
                <Route path="notifications" element={<Notifications />} /> 
                <Route path="groups" element={<Group />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="sign-in-advance" element={<SignIn />}></Route>
                <Route path="sign-up" element={<SignUp />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              
              </Routes>
          </div>
        </div>
      </main>
      </AuthProvider>
    </>
  )

}

export default App