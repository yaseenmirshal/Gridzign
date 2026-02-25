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

        {/* Floating WhatsApp Button — Large */}
<a
  href="https://wa.me/971555784992"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 left-8 z-[9999]"
  aria-label="Chat on WhatsApp"
>
  <div className="relative w-20 h-20">
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

    {/* Main button */}
    <div className="relative flex items-center justify-center w-full h-full rounded-full bg-green-500 shadow-2xl hover:bg-green-600 transition-all duration-300">
      <svg viewBox="0 0 32 32" fill="white" className="w-10 h-10">
        <path d="M19.11 17.38c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.57.65.21 1.25.18 1.72.11.52-.08 1.58-.65 1.8-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 .67C7.53.67.67 7.53.67 16c0 2.82.74 5.57 2.15 7.97L.67 31.33l7.58-2.12A15.25 15.25 0 0016 31.33c8.47 0 15.33-6.86 15.33-15.33S24.47.67 16 .67zm0 28c-2.48 0-4.9-.66-7.01-1.9l-.5-.3-4.5 1.26 1.2-4.38-.33-.51A12.67 12.67 0 013.33 16c0-7 5.67-12.67 12.67-12.67S28.67 9 28.67 16 23 28.67 16 28.67z" />
      </svg>
    </div>
  </div>
</a>


      </main>

      <Footer2 />
    </>
  );
}
