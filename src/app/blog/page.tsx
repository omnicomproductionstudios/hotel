import BlogCard from "@/components/BlogCard"

const page = () => {
  return (
    <>
        <div className="space">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Blogs</h2>
                </div>
                <div className="row g-5">
                   {[...Array(6)].map((_, i) => (
                        <div className="col-md-4" key={i}>
                            <BlogCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default page