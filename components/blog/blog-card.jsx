import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  author,
  date,
  read,
  image,
  slug,
  url = "blog",
}) {
  return (
    <article className="flex flex-col gap-3">
      {/* Image */}
      <Link
        href={`/${url}/${slug}`}
        aria-label={`Read article: ${title}`}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Meta */}
      <div className="flex justify-between text-xs text-neutral-500">
        <span>{date}</span>
        <span>{read}</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold leading-snug">
        <Link
          href={`/${url}/${slug}`}
          className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
        >
          {title}
        </Link>
      </h3>

      {/* Author */}
      {author && <p className="text-xs text-neutral-500">By {author}</p>}
    </article>
  );
}
