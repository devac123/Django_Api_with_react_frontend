
import ProfileHeader from "../components/MyProfile/ProfileHeader"
import AboutCard from "../components/MyProfile/RightSidebar/AboutCard"
import ProfileExperienceCard from "../components/MyProfile/RightSidebar/ProfileExperienceCard"
import PhotosCard from "../components/MyProfile/RightSidebar/PhotosCard"
import FriendsCard from "../components/MyProfile/RightSidebar/FriendsCard"
import { UserContext } from "../components/context/UserContext"
import { useContext } from "react"

export default function MyProfile() {
  
  return (
    <>
      <div className="col-lg-8 vstack gap-4">
        <ProfileHeader />
      </div>
      <div className="col-lg-4">
        <div className="row g-4">
          <AboutCard />
          <ProfileExperienceCard />
          <PhotosCard />
          <FriendsCard />
        </div>
      </div>
    </>
  )
}
