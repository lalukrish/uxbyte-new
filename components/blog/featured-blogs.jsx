import Image from "next/image";
import Link from "next/link";

export default function FeaturedBlog({
  blog,
  heading = "Latest Blog",
  url = "blog",
}) {
  return (
    <div>
      <h1 className="text-[clamp(1.875rem,4vw,3rem)] font-semibold mb-6 border-b pb-4">
        {heading}
      </h1>

      <article className="flex flex-col gap-4">
        <Link
          href={`/${url}/${blog.slug}`}
          aria-label={`Read article: ${blog.title}`}
          className="block"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        <div className="flex justify-between text-sm text-neutral-500">
          <span>{blog.date}</span>
          <span>{blog.read}</span>
        </div>

        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight">
          <Link
            href={`/${url}/${blog.slug}`}
            className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
          >
            {blog.title}
          </Link>
        </h2>

        <p className="text-sm text-neutral-500">By {blog.author}</p>
      </article>
    </div>
  );
}
