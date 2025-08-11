'use client'

import Link from "next/link"

export default function Footer(){
    return(
    <footer className="py-3 my-4"> 
    <div className="text-center">
        <img src="images/logo.png" alt="logo" width="110" />
    </div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li> 
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> 
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Rooms</a></li> 
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Restaurants</a></li> 
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Blog</a></li> 
        </ul> 
        <p className="text-center text-body-secondary">© 2025 Company, Inc</p> 
    </footer>
    )
}