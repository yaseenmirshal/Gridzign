import BackgroundParallax from "@/components/animation/BackgroundParallax";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Cta from "@/components/common/Cta";
import MarqueeSlider from "@/components/homes/home-digital-agency/MarqueeSlider";
import Footer2 from "@/components/homes/home-digital-agency/Footer2";

import ContactForm from "@/components/other-pages/contact/ContactForm";

import PageTitle from "@/components/other-pages/contact/PageTitle";
import Socials from "@/components/other-pages/contact/Socials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Gridzign ",
  description:
    "Contact",
};
export default function ContactPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PageTitle />
        <ContactForm />
        <MarqueeSlider/>
        <Socials />
        {/* <Locations /> */}
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
