import Title from "@/commonComponents/title";
import InspirationSection from "@/components/landingPage/blogSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HoverImage from "@/components/ui/hover-image";
import AlternatingSection from "@/components/ui/image-alteration";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BLOGS } from "@/data/blog-data";

const POPULAR_BLOGS = BLOGS.filter((b) => b.isPopular);
const Page = () => {
  return (
    <div>
      <AuroraBackground>
        <TextGenerateEffect words={"Signature Industries"} />{" "}
      </AuroraBackground>
      <HoverImage />

      <AlternatingSection
        badgeText="PRODUCT DESIGN"
        badgeEncryptedText="AND DEVELOPMENT AGENCY"
        title={
          <>
            Record Proven :<br /> We Build <br /> Digital Excellence
          </>
        }
        description="We are a full-service IT company delivering innovative digital solutions..."
        primaryImage="/hero_img1.png"
        secondaryImage="/education.jpg"
        bgClass="bg-black"
        textColor="text-white"
      />

      <AlternatingSection
        badgeText="TECHNOLOGY"
        badgeEncryptedText="AND INNOVATION"
        title={
          <>
            Engineering <br /> Scalable <br /> Solutions
          </>
        }
        description="Our team builds scalable platforms designed for performance and growth."
        primaryImage="/education.jpg"
        secondaryImage="/hero_img1.png"
        reverse
        bgClass="bg-black"
        textColor="text-white"
      />
      <InspirationSection blogs={POPULAR_BLOGS} />
    </div>
  );
};

export default Page;
