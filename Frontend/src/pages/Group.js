import React from 'react'
import AllGroups from '../components/Group/AllGroups'
import ProfileCol from '../components/Home/ProfileCol'


export default function Group() {
  return (
    <>
    <div className='col-lg-3'>
    <ProfileCol />
    </div>

    <div className='col-md-8 col-lg-6 vstack gap-4'>
      <AllGroups />
    </div>
    
    </>
  )
}
