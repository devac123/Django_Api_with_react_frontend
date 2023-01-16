import Navigation from "../components/Main/Navigation"
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"
import Home from "./Home"
import MyProfile from "./MyProfile"
import Blog from "./Blog"
import Events from "./Events"
import Notifications from "./Notifications"
import Group from "./Group"
import Settings from "./Settings"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from "./Form"
import SignIn from "./SignIn"
import md5 from "md5"
import SignUp from "./SignUp"

export default function Main() {

  const[stater,setstatr]=useState(false)
  const [dataa, setData] = useState();
  const options = {
    method: 'GET',
    url: 'https://api.github.com/users'
  }

  useEffect(()=>{
    async function getdata(){
      await axios.request(options).then(function (response) {
        setData(response);
        }).catch(function (error) {
          console.error(error);
      });
    }
    getdata()
  },[0])
  
  return (
    <>
    <BrowserRouter>
      <div>
        <input type='text' onChange={()=>{setstatr(true)}}></input>
      </div>
    <Navigation/>
      <main>
        <div className="container">
          <div className="row g-4">
            {/* pages start here */}
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<Home user = {dataa}/>} />
                {/* Profile Page */}

                <Route path={"/my-profile"} element={<MyProfile page="my-profile"/>} />  
                {/* Profile About Page */}

                <Route path="/my-profile-about" element={<MyProfile page="my-profile-about"/>} />  
                {/* Profile About Connections */}

                <Route path="/my-profile-connections" element={<MyProfile page="my-profile-connections"/>} />  

                {/* Profile About Media */}
                <Route path="my-profile-media" element={<MyProfile page="my-profile-media"/>} />

                {/* Profile About Media */}
                <Route path="my-profile-media" element={<MyProfile page="my-profile-media"/>} />  
                
                {/* Profile About Videos */}
                <Route path="my-profile-videos" element={<MyProfile page="my-profile-videos"/>} />  
                
                {/* Profile About Events */}
                <Route path="my-profile-events" element={<MyProfile page="my-profile-events"/>} /> 
                
                {/* Profile About Activity */}
                <Route path="my-profile-activity" element={<MyProfile page="my-profile-activity"/>} />

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

                {/* Settings */}
                <Route path="form" element={<Form />}></Route>

                {/* sign-in-advance */}
                <Route path="sign-in-advance" element={<SignIn />}></Route>
                
                {/* sign-Up */}
                <Route path="sign-up" element={<SignUp />}></Route>
              
              </Routes>
            {/* pages end here */}
          </div>
        </div>
      </main>
      </BrowserRouter>
    </>
  )
}
