"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export default function BlogShare({ title, url }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="text-neutral-500 hover:text-neutral-900 cursor-pointer"
      >
        <Facebook className="w-4 h-4" />
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="text-neutral-500 hover:text-neutral-900 cursor-pointer"
      >
        <Twitter className="w-4 h-4" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="text-neutral-500 hover:text-neutral-900 cursor-pointer"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      {/* Copy */}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="
          text-neutral-500 hover:text-neutral-900
          cursor-pointer
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900
          rounded
        "
      >
        <LinkIcon className="w-4 h-4" />
      </button>

      {/* Toast */}
      {copied && (
        <span
          role="status"
          aria-live="polite"
          className="
            absolute -bottom-8 right-0
            rounded-md bg-neutral-900 px-3 py-1
            text-xs text-white
            shadow-md
          "
        >
          Link copied
        </span>
      )}
    </div>
  );
}
