import BlogGrid from "@/components/blog/blog-grid";
import BlogPaginationClient from "@/components/blog/blog-pagination-section";
import FeaturedBlog from "@/components/blog/featured-blogs";
import PopularBlogs from "@/components/blog/popular-blogs";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";
import { BLOGS } from "@/data/blog-data";
import { Suspense } from "react";

const GRID_BLOGS = BLOGS;
const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);
const FEATURED_BLOG = BLOGS.find((b) => b.isFeatured) || BLOGS[0];

export default function BlogPage() {
  return (
    <main className="w-full">
      <Breadcrumb
        title="Services"
        path={["Home", "Services"]}
        shape="Triangle"
      />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(8rem,5vw,12rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <FeaturedBlog blog={FEATURED_BLOG} />
          <PopularBlogs blogs={POPULAR_BLOGS} />
        </div>
        <Suspense fallback={null}>
          <BlogPaginationClient blogs={GRID_BLOGS} />
        </Suspense>
      </section>
    </main>
  );
}
