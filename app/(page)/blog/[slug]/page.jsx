import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogShare from "@/components/blog/blog-share";
import BlogGrid from "@/components/blog/blog-grid";
import { BLOGS } from "@/data/blog-data";
import Breadcrumb from "@/components/landingPage/breadcrumb-new";

export function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const toc = blog.content.filter((b) => b.type === "h2");
  const otherBlogs = BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl = `${siteUrl}/blog/${blog.slug}`;

  return (
    <main className="w-full">
      <Breadcrumb />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(10rem,5vw,12rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
          <aside className="hidden lg:block sticky top-[6rem]">
            <p className="text-sm font-semibold mb-4">On this page</p>

            <ul className="flex flex-col gap-3 text-sm text-neutral-600">
              {toc.map((item, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="max-w-none">
            {/* Hero */}
            <div className="relative aspect-[16/9] overflow-hidden mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-500 mb-6">
              <div className="flex items-center gap-2">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.read}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>

              <div className="ml-auto">
                <BlogShare title={blog.title} url={shareUrl} />
              </div>
              <hr className="w-full color-[#E5E7EB]" />
            </div>

            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="prose prose-neutral max-w-none">
              {blog.content.map((block, i) => {
                if (block.type === "p") return <p key={i}>{block.text}</p>;

                if (block.type === "h2")
                  return (
                    <h2
                      key={i}
                      id={`section-${toc.findIndex(
                        (t) => t.text === block.text,
                      )}`}
                    >
                      {block.text}
                    </h2>
                  );

                if (block.type === "ul")
                  return (
                    <ul key={i}>
                      {block.items?.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );

                return null;
              })}
            </div>
          </article>
        </div>

        <section className="mt-[clamp(4rem,6vw,6rem)]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold">
              You may also like
            </h2>

            <Link href="/blog" className="text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>

          <BlogGrid blogs={otherBlogs} />
        </section>
      </section>
    </main>
  );
}
