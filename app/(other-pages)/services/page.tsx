import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/homes/home-digital-agency/Footer2";
import Hero from "@/components/other-pages/services/Hero";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import Services from "@/components/other-pages/services/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Gridzign | Services",
  description:
    "Digital Agency",
};
export default function ServicesPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <Services />
        {/* <ParallaxDivider /> */}
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
