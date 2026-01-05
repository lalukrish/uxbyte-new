"use client";

import { useSearchParams } from "next/navigation";
import BlogGrid from "@/components/blog/blog-grid";
import Pagination from "@/components/blog/pagination";

const POSTS_PER_PAGE = 3;

export default function BlogPaginationClient({ blogs }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = blogs.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <BlogGrid blogs={paginatedBlogs} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
