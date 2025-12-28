import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages }) {
  const visiblePages = 5;

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-14 flex justify-center items-center gap-4"
    >
      {/* Prev Arrow */}
      <Link
        href={`?page=${Math.max(currentPage - 1, 1)}`}
        aria-disabled={currentPage === 1}
        className={`min-w-[44px] min-h-[44px] flex items-center justify-center
          ${currentPage === 1 ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      {/* Page Numbers */}
      <ul className="flex items-center gap-3">
        {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
          const page = startPage + i;

          return (
            <li key={page}>
              <Link
                href={`?page=${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={`
                  min-w-[44px] min-h-[44px]
                  flex items-center justify-center
                  text-sm font-medium
                  transition
                  ${
                    page === currentPage
                      ? "rounded-full bg-neutral-900 text-white"
                      : "text-neutral-900 hover:underline"
                  }
                `}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {/* Ellipsis */}
        {endPage < totalPages - 1 && (
          <li className="px-2 text-neutral-500">…</li>
        )}

        {/* Last Page */}
        {endPage < totalPages && (
          <li>
            <Link
              href={`?page=${totalPages}`}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-sm font-medium hover:underline"
            >
              {totalPages}
            </Link>
          </li>
        )}
      </ul>

      {/* Next Arrow */}
      <Link
        href={`?page=${Math.min(currentPage + 1, totalPages)}`}
        aria-disabled={currentPage === totalPages}
        className={`min-w-[44px] min-h-[44px] flex items-center justify-center
          ${
            currentPage === totalPages ? "pointer-events-none opacity-40" : ""
          }`}
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </nav>
  );
}
