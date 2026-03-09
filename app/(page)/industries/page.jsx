import Title from "@/commonComponents/title";
import InspirationSection from "@/components/landingPage/blogSection";
import HeroNew from "@/components/landingPage/hero-new";
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
        <IndustrySignature />
      </AuroraBackground>
      <HoverImageGrid items={myItems} bgColor="white" />
      <AlternatingSection
        badgeText="UXBYTE STUDIO"
        badgeEncryptedText="PRODUCT DESIGN & DEVELOPMENT AGENCY"
        title={
          <>
            We Design & Build <br /> Digital Experiences That Perform
          </>
        }
        description="UXBYTE Studio is a product design and development agency focused on creating high-impact digital solutions. We combine strategic thinking, user-centered design, and modern engineering to build scalable web and mobile experiences. From idea validation to full-scale product launches, we help startups and enterprises turn complex problems into elegant, high-performing digital products."
        primaryImage="/hero_img1.png"
        secondaryImage="/education.jpg"
        bgClass="bg-white"
        textColor="text-black"
      />
      {/* <PillarHero /> */}
      {/* <HeroNew /> */}

      <AlternatingSection
        badgeText="TECHNOLOGY"
        badgeEncryptedText="SCALABLE ENGINEERING"
        title={
          <>
            Future-Ready <br /> Systems Built to Scale
          </>
        }
        description="UXBYTE Studio builds robust digital infrastructures that evolve with your business. We leverage modern technologies, modular architectures, and performance-driven development practices to create products that are secure, scalable, and ready for growth. Our team focuses on clean code, optimized performance, and long-term maintainability."
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
