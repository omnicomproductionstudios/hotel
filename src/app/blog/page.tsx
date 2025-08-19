import BlogCard from "@/components/BlogCard"

const page = () => {
  return (
    <>
        <div className="space">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Blog</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-4">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page