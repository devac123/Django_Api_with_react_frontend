import ProfileFeeds from "../components/MyProfile/ProfileFeeds"
import ProfileHeader from "../components/MyProfile/ProfileHeader"
import ProfileInfo from "../components/MyProfile/ProfileInfo"
import ProfileConnection from "../components/MyProfile/ProfileConnection"
import ProfileMedia from "../components/MyProfile/ProfileMedia"
import ProfileVideos from "../components/MyProfile/ProfileVideos"
import ProfileEvents from "../components/MyProfile/ProfileEvents"
import ProfileActivity from "../components/MyProfile/ProfileActivity"
import AboutCard from "../components/MyProfile/RightSidebar/AboutCard"
import ProfileExperienceCard from "../components/MyProfile/RightSidebar/ProfileExperienceCard"
import PhotosCard from "../components/MyProfile/RightSidebar/PhotosCard"
import FriendsCard from "../components/MyProfile/RightSidebar/FriendsCard"


export default function MyProfile(props) {

  const pageComponents = {
    "my-profile": <ProfileFeeds />,
    "my-profile-about": <ProfileInfo />,
    "my-profile-connections": <ProfileConnection />,
    "my-profile-media": <ProfileMedia />,
    "my-profile-videos": <ProfileVideos />,
    "my-profile-events": <ProfileEvents />,
    "my-profile-activity": <ProfileActivity />
  }

  return (
    <>
      <div className="col-lg-8 vstack gap-4">
        <ProfileHeader />
        {pageComponents[props.page]}
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
