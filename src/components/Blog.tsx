'use client'

import Link from "next/link"

export default function Blog(){
    return(
        <div className="blogs space">
            <div className="container">
                <div className="title text-center">
                    <span>News & Blog</span>
                    <h2>Check Latest Blog</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="blog">
                            <div className="image">
                                <Link href='/'><img src="images/activity1.jpg" alt="activity" /></Link>
                            </div>
                            <div className="info"><span>12 Aug 2025</span> <span>Tips & Tricks</span></div>
                            <h3><Link href="/">New Chef and Spring Special Menu</Link></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog">
                            <div className="image">
                                <Link href='/'><img src="images/activity2.jpg" alt="activity" /></Link>
                            </div>
                            <div className="info"><span>12 Aug 2025</span> <span>Tips & Tricks</span></div>
                            <h3><Link href="/">Introducing New Restaurants</Link></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog">
                            <div className="image">
                                <Link href='/'><img src="images/activity3.jpg" alt="activity" /></Link>
                            </div>
                            <div className="info"><span>12 Aug 2025</span> <span>Tips & Tricks</span></div>
                            <h3><Link href="/">Tour Tips When Visiting Zermatt</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}