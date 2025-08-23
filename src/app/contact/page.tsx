
const page = () => {
  return (
    <div className="contact space">
        <div className="container">
            <div className="title text-center">
                <h2>Hotel Mud Fort</h2>
                <p>Query & Information</p>
            </div>
            <div className="row justify-content-between g-5">
                <div className="col-md-7">
                    <input type="text" name="name" className="form-control mb-4" placeholder="Full name" />
                    <input type="email" name="email" className="form-control mb-4" placeholder="Email address" />
                    <input type="phone" name="phone" className="form-control mb-4" placeholder="Phone number" />
                    <textarea name="comment" className="form-control mb-4" placeholder="Enter your Query" id=""></textarea>
                    <button type="submit" className="cta">Submit</button>
                </div>
                <div className="col-md-5">
                    <div className="address">
                        <h3>Address & Contact</h3>
                        <hr />
                        <p><strong>SALES & RESERVATION</strong></p>
                        <p>Mobile: +91 9871587150, +91 9910295370</p>
                        <p>EMail: info@mudfortkuchesar.com</p>

                        <p><strong>MUD FORT KUCHESAR</strong></p>
                        <p>Village Kuchesar Fort, Distt Bulandshahar 245 402 (UP)</p>
                        <p>Email: info@mudfortkuchesar.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page