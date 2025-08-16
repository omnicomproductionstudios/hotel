'use client'
export default function Header(){
    return(
        <header className="site_header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="images/logo1.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rooms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Restaurant</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Activities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link cta" href="#">Book Now</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}