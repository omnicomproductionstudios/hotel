import BlogCard from "@/components/BlogCard";
import { Calendar, User } from "lucide-react";

const page = () => {
  return (
    <div className="space blog_detail">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-7">
              <h1>New Chef and Spring Special Menu</h1>
            <div className="blog_info mt-3 mb-3 text-muted">
              <span className="me-3"><User /> Shoeb Ali</span>
              <span><Calendar /> 22 Aug 2025</span>
            </div>
            <img src="/images/blog.jpg" alt="blog detail" />
            <div className="content mt-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci.</p>
              <p>Lorem, ipsum <strong>dolor</strong> sit amet <em>consectetur adipisicing elit</em>. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci.</p>
              <h2>New Chef and Spring Special Menu</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci.</p>
              <h3>New Chef and Spring Special Menu</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab aliquam, dolor, dignissimos molestiae commodi inventore fugit rerum obcaecati laborum ut in cupiditate recusandae! Mollitia accusamus quia aut beatae adipisci.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_sidebar">
              {[...Array(3)].map((_, i) => (
                        <div className="mb-4" key={i}>
                            <BlogCard />
                        </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
