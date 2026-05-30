"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "@/commonComponents/title";
import { EncryptedText } from "../ui/encrypted-text";
import { Button } from "@/commonComponents/Button";
import { ArrowRight } from "lucide-react";
import GlossyText from "../ui/canvas-text";

export default function InspirationSection({ blogs = [] }) {
  // Only popular blogs (max 3)
  const popularBlogs = blogs.filter((blog) => blog.isPopular).slice(0, 3);

  if (!popularBlogs.length) return null;

  return (
    <section className="white-section w-full py-20 xl:px-24  text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mx-auto px-6 mb-16">
        <div className="flex-col">
          <EncryptedText
            normaltext=""
            text="BLOGS"
            className="text-sm"
            normalClassName=""
            encryptedClassName="text-[#535658]"
            revealedClassName="text-[#535658] dark:text-[#535658]"
            revealDelayMs={30}
          />
          <div className="mb-6 pb-4">
            <Title className="flex items-center gap-2">
              Latest
              <GlossyText text=" Blog Posts" />
            </Title>
          </div>
        </div>

        <Link
          href="/blog"
          className="mt-6 md:mt-0  text-black px-6 py-3 font-medium hover:opacity-90 transition"
        ></Link>
        <Button
          variant="outlined"
          label={"Explore the Blog"}
          iconRight={<ArrowRight />}
          className="hover:text-white hover:bg-black"
        ></Button>
      </div>

      {/* Cards */}
      <div className="mx-auto px-6 grid gap-8 md:grid-cols-3">
        {popularBlogs.map((blog) => (
          <motion.article
            key={blog.slug}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden "
          >
            <Link
              href={`/blog/${blog.slug}`}
              aria-label={`Read article: ${blog.title}`}
              className="flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {/* Content */}
              <div className="p-0 flex flex-col gap-3 py-3 flex-grow">
                <div className="text-sm text-neutral-500 flex gap-4 mt-auto justify-between">
                  <span>{blog.date}</span>
                  <span>{blog.read}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {blog.title}
                </h3>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
