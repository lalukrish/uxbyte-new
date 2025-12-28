import BlogCard from "./blog-card";

export default function BlogGrid({ blogs, url = "blog" }) {
  return (
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, i) => (
        <BlogCard key={i} {...blog} url={url} />
      ))}
    </div>
  );
}
