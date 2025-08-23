'use client'

import Link from "next/link"



const BlogCard = () => {
  return (
    <div className="blog_card">
        <div className="image">
            <Link href="/"><img src="/images/blog.jpg" alt="blog" /></Link>
        </div>
        <div className="content">
            <h2><Link href="/blog/1">New Chef and Spring Special Menu</Link></h2>
            <div className="info"><span>By Sean Kelly</span> | <span>Updated August 15, 2025</span></div>
        </div>
    </div>
  )
}

export default BlogCard