import GalleryPage from "@/components/GalleryPage"

const page = () => {
  return (
    <div className="container space">
        <div className="title text-center">
            <h2>Gallery</h2>
            <p>Check out latest seasonal promotions</p>
        </div>
        <GalleryPage />
    </div>
  )
}

export default page