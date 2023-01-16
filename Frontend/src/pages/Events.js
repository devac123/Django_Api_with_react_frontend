import React from 'react'
import AllEvents from '../components/Events/AllEvents'
import ProfileCol from '../components/Home/ProfileCol'

export default function Events() {
  return (
    <>
     <div className="col-lg-3">
        <ProfileCol />
    </div>
     <AllEvents />
    </>
  )
}
