import BlogGrid from "@/components/blog/blog-grid";
import FeaturedBlog from "@/components/blog/featured-blogs";
import Pagination from "@/components/blog/pagination";
import PopularBlogs from "@/components/blog/popular-blogs";
import { BLOGS } from "@/data/blog-data";

const GRID_BLOGS = BLOGS;
const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);
const FEATURED_BLOG = BLOGS.find((b) => b.isFeatured) || BLOGS[0];

const POSTS_PER_PAGE = 3;

export default async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams.page || 1);

  const totalPages = Math.ceil(GRID_BLOGS.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const blogs = GRID_BLOGS.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="w-full">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(8rem,5vw,12rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <FeaturedBlog blog={FEATURED_BLOG} />
          <PopularBlogs blogs={POPULAR_BLOGS} />
        </div>

        <BlogGrid blogs={blogs} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    </main>
  );
}
