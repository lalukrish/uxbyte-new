import IconCard from "@/components/ui/IconCard";
import Paragraphs from "@/components/ui/Paragraphs";
import Titles from "@/components/ui/Titles";

export default function IconCardGridSection({
  className,
  title,
  description,
  iconCards,

  cardClassName,
}) {
  return (
    <div className={`${className}`}>
      {title && (
        <Titles
          text={title}
          className="text-center !mb-6 mt-16 px-4 md:px-32 2xl:px-52"
        />
      )}
      {description && (
        <Paragraphs
          text={description}
          className="px-4 md:px-56 2xl:px-52  mb-16 text-center"
        />
      )}
      <div className="mx-auto w-full px-4 md:px-32 2xl:px-52 flex gap-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {iconCards.map((card) => (
            <IconCard
              key={card.id}
              {...card}
              className={`bg-[#FCF7F1]  ${cardClassName}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
