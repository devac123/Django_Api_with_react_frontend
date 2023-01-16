import React from 'react'
import BlogList from '../components/Blog/BlogList'
import BlogSidebar from '../components/Blog/BlogSidebar'

export default function Blog() {
  return (
    <>
    <div className="col-lg-8">
        <BlogList />
    </div>
    <div className="col-lg-4">
      <div className="row g-4">
        <BlogSidebar />
      </div>
    </div>
    </>
  )
}
