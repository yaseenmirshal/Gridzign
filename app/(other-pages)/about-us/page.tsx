import BackgroundParallax from "@/components/animation/BackgroundParallax";
import Approch from "@/components/common/Approch";
import Awards from "@/components/common/Awards";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Facts from "@/components/common/Facts";
import MarqueeSlider from "@/components/homes/home-digital-agency/MarqueeSlider";
import Footer2 from "@/components/homes/home-digital-agency/Footer2";
import MarqueeSlider3 from "@/components/homes/home-web-agency/MarqueeSlider3";
import Hero2 from "@/components/other-pages/about/Hero2";
import MarqueeSlider2 from "@/components/other-pages/about/MarqueeSlider2";
import Team from "@/components/other-pages/about/Team";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "GridZign | About Us",
  description:
    "Digital Agency",
};
export default function AboutUsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero2 />
        <MarqueeSlider/>
        {/* <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <BackgroundParallax className="mxd-divider__image divider-image-8 parallax-img" />
            </div>
          </div>
        </div> */}
        <Awards />
        <MarqueeSlider />
        <Team />
        <MarqueeSlider3/>
        <Facts />
        <Approch />
        {/* <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <BackgroundParallax className="mxd-divider__image divider-image-9 parallax-img" />
            </div>
          </div>
        </div> */}
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
