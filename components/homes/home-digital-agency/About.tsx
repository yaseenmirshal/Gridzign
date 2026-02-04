import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function About() {
  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <RevealText as="h1" className="reveal-type anim-uni-in-up">
                    Digital DNA
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                    Gridzign builds high-performance digital products
                    where strategic design meets robust engineering. Our
                    focus is on creating solutions that are visually refined,
                    technically sound, and business-driven. 
                    </p>
                    <p className="anim-uni-in-up">
                    We work with startups, enterprises, and growing brands
                    to deliver scalable websites, applications, and
                    platforms. Every project is approached with precision,
                    modern technology, and long-term growth in mind.
                    </p>
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <AnimatedButton
                        text="More About Us"
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href={`/about-us`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
