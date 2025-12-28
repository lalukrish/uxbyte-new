import Image from "next/image";
import Link from "next/link";

export default function PopularBlogs({
  blogs,
  heading = "Popular Blogs",
  url = "blog",
}) {
  return (
    <aside>
      <h3 className="text-lg font-semibold mb-4 border-b pb-4 xl:mt-11">
        {heading}
      </h3>

      <ul className="flex flex-col divide-y">
        {blogs.map((blog) => (
          <li key={blog.slug} className="py-4">
            <Link
              href={`/${url}/${blog.slug}`}
              aria-label={`Read article: ${blog.title}`}
              className="
                group flex gap-4 items-start
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-neutral-900
              "
            >
              <div className="relative w-20 aspect-square overflow-hidden shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="80px"
                  className="
                    object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium leading-snug group-hover:underline">
                  {blog.title}
                </span>

                <div className="text-xs text-neutral-500 flex gap-3">
                  <span>{blog.date}</span>
                  <span>{blog.read}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
