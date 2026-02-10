import Cta from "@/components/common/Cta";
import Footer2 from "@/components/homes/home-digital-agency/Footer2";

import MarqueeSlider from "@/components/portfolios/MarqueeSlider";
import ParallaxDivider from "@/components/portfolios/ParallaxDivider";
import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import Testimonials from "@/components/common/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "GridZign - Works Masonry",
  description:
    "Explore our portfolio of innovative design and development projects, showcasing our expertise in creating visually stunning and user-friendly digital experiences. From concept to execution, our works masonry highlights our commitment to excellence and creativity in every project we undertake.",
};
export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
        {/* <ParallaxDivider />  */}
        {/* <MarqueeSlider /> */}
        {/* <Testimonials /> */}
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
