import Title from "@/commonComponents/title";
import InspirationSection from "@/components/landingPage/blogSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MonitorHero from "@/components/ui/deskotp-section";
import PillarHero from "@/components/ui/hero-box";
import HoverImageGrid from "@/components/ui/hover-image";
import HoverImage from "@/components/ui/hover-image";
import AlternatingSection from "@/components/ui/image-alteration";
import IndustrySignature, {
  TextGenerateEffect,
} from "@/components/ui/text-generate-effect";
import { BLOGS } from "@/data/blog-data";

const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);
const myItems = [
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
  },
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
  },
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "",
  },
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "",
  },
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "white",
  },
  {
    text: "Project Alpha",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "",
    icon: "https://example.com/icon.svg",
  },
  {
    text: "Project Beta",
    image: "https://picsum.photos/800/600?random=${index + 1}",
    backgroundColor: "",
  },
];
const Page = () => {
  return (
    <div>
      <AuroraBackground>
        <IndustrySignature />{" "}
      </AuroraBackground>
      {/* <HoverImage /> */}
      <HoverImageGrid items={myItems} bgColor="white" />
      <AlternatingSection
        badgeText="PRODUCT DESIGN"
        badgeEncryptedText="AND DEVELOPMENT AGENCY"
        title={
          <>
            Record Proven We Build <br /> Digital Excellence
          </>
        }
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        primaryImage="/hero_img1.png"
        secondaryImage="/education.jpg"
        bgClass="bg-white"
        textColor="text-black"
      />
      <PillarHero />

      <AlternatingSection
        badgeText="TECHNOLOGY"
        badgeEncryptedText="AND INNOVATION"
        title={
          <>
            Engineering <br /> Scalable Solutions
          </>
        }
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        primaryImage="/education.jpg"
        secondaryImage="/hero_img1.png"
        reverse
        bgClass="bg-white"
        textColor="text-black"
      />
      <InspirationSection blogs={POPULAR_BLOGS} />
    </div>
  );
};

export default Page;
