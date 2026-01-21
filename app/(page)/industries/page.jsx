import Title from "@/commonComponents/title";
import InspirationSection from "@/components/landingPage/blogSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MonitorHero from "@/components/ui/deskotp-section";
import PillarHero from "@/components/ui/hero-box";
import HoverImageGrid from "@/components/ui/hover-image";
import HoverImage from "@/components/ui/hover-image";
import AlternatingSection from "@/components/ui/image-alteration";
import EnergyScrollSections from "@/components/ui/scrolling-section";
import IndustrySignature, {
  TextGenerateEffect,
} from "@/components/ui/text-generate-effect";
import { BLOGS } from "@/data/blog-data";

const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);
const myItems = [
  {
    text: "E-Commerce",
    image: "/ecommerce.jpg",
    backgroundColor: "white",
    // iconName: "ecommerce",
  },
  {
    text: "FinTech",
    image: "/fintech.webp",
    backgroundColor: "white",
    // iconName: "fintech",
  },
  {
    text: "Healthcare",
    image: "/health.webp",
    backgroundColor: "white",
    // iconName: "healthcare",
  },
  {
    text: "SaaS",
    image: "https://picsum.photos/800/600?random=4",
    backgroundColor: "white",
    // iconName: "saas",
  },

  {
    text: "Fashion",
    image: "/fashion.webp",
    backgroundColor: "white",
    // icon: Building2,
  },
  {
    text: "Education",
    image: "/education.jpg",
    backgroundColor: "white",
    // icon: GraduationCap,
  },
  {
    text: "Entertainment",
    image: "/entertainment1.webp",
    backgroundColor: "white",
    // icon: Film,
  },
  {
    text: "Food",
    image: "https://picsum.photos/800/600?random=9",
    backgroundColor: "white",
    // icon: Utensils,
  },
  {
    text: "Event Management",
    image: "/event.webp",
    backgroundColor: "white",
    // icon: Calendar,
  },

  {
    text: "Media",
    image: "/media.webp",
    backgroundColor: "white",
    // icon: Newspaper,
  },
  {
    text: "Travel And Tourism",
    image: "/travel.jpg",
    backgroundColor: "white",
    // icon: Plane,
  },
  {
    text: "Manufacturing",
    image: "https://picsum.photos/800/600?random=12",
    backgroundColor: "white",
    // icon: Factory,
  },
];

const Page = () => {
  return (
    <div>
      <AuroraBackground>
        <IndustrySignature />{" "}
      </AuroraBackground>
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
