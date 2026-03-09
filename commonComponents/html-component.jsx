// import Titles from "@/components/ui/Titles";
import Image from "next/image";
import Title from "./title";

export default function HTMLImageComponent({
  title = "",
  content = "",
  image = "",
  imageAlt = "",
  imagePosition = "right",
  mobileImagePosition = "top",
  className = "",
}) {
  const isRight = imagePosition === "right";
  const isMobileBottom = mobileImagePosition === "bottom";

  return (
    <section
      className={`bg-neutral-50 w-full mx-auto px-4 md:px-24 lg:px-28 2xl:px-52 py-5 md:py-10 ${className}`}
    >
      <div
        className={`grid gap-6 md:gap-14 2xl:gap-24 items-start md:items-center ${
          image ? "md:grid-cols-12 " : "grid-cols-1"
        }`}
      >
        {/* Image Section */}
        {image && (
          <div
            className={`
              col-span-12 md:col-span-4 2xl:col-span-4
              ${isMobileBottom ? "order-2" : "order-1"}
              ${isRight ? "md:order-2 xl:mr-10 2xl: 2xl:mr-36" : "md:order-1 xl:ml-10 2xl:ml-24 2xl:mr-10"}
            `}
          >
            <div className="relative w-full max-w-[340px] h-[420px] 2xl:max-w-[320px] 2xl:h-[400px] mx-auto md:mx-0">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div
          className={`
            col-span-12 ${image ? "md:col-span-8 2xl:col-span-8" : ""}
            ${isMobileBottom ? "order-1" : "order-2"}
            ${isRight ? "md:order-1 xl:ml-10 2xl:ml-24" : "md:order-2 xl:mr-10 2xl:mr-36"}
          `}
        >
          <Title text={title} className="mb-4 md:mb-8 font-light" />
          <div
            className="rich-content-styles"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}
