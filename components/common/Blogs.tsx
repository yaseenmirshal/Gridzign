import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

const defaultDesc = `Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey.`;

interface BlogsProps {
  title?: string;
  desc?: string;
}

export default function Blogs({
  title = "Recent insights",
  desc = defaultDesc,
}: BlogsProps) {
  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up">
                      {title}
                    </RevealText>
                  </div>
                </div>

                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">{desc}</p>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text="All Articles"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={`/blog-standard`}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}

        {/* Block - Blog Preview Cards Start */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* Blog Card 1 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <Link className="mxd-blog-preview__media" href={`/blog-article`}>
                    <div className="mxd-blog-preview__image relative overflow-hidden">
                      <Image
                        src="/img/blog/frontend.png"
                        alt="Blog 1"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <Image
                          alt="Eye Icon"
                          src="/img/icons/icon-eye.svg"
                          width={38}
                          height={21}
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">Design</span>
                      <span className="tag tag-default tag-permanent">UI/UX</span>
                    </div>
                  </Link>

                  <div className="mxd-blog-preview__data">
                    <Link className="anim-uni-in-up" href={`/blog-article`}>
                      How to build <span>Modern UI</span> in 2026
                    </Link>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <Link className="mxd-blog-preview__media" href={`/blog-article`}>
                    <div className="mxd-blog-preview__image relative overflow-hidden">
                      <Image
                        src="https://cdn.searchenginejournal.com/wp-content/uploads/2023/03/untitled-design-43-6405cb01dcfc7-sej.png"
                        alt="Blog 2"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <Image
                          alt="Eye Icon"
                          src="/img/icons/icon-eye.svg"
                          width={38}
                          height={21}
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">Tech</span>
                      <span className="tag tag-default tag-permanent">Next.js</span>
                    </div>
                  </Link>

                  <div className="mxd-blog-preview__data">
                    <Link className="anim-uni-in-up" href={`/blog-article`}>
                      Boost your <span>Website Speed</span> like a Pro
                    </Link>
                  </div>
                </div>

                {/* Blog Card 3 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <Link className="mxd-blog-preview__media" href={`/blog-article`}>
                    <div className="mxd-blog-preview__image relative overflow-hidden">
                      <Image
                        src="https://png.pngtree.com/thumb_back/fh260/background/20260112/pngtree-comprehensive-corporate-brand-identity-mockup-set-displayed-on-an-office-desk-image_20997254.webp"
                        alt="Blog 3"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <Image
                          alt="Eye Icon"
                          src="/img/icons/icon-eye.svg"
                          width={38}
                          height={21}
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">Branding</span>
                      <span className="tag tag-default tag-permanent">Creative</span>
                    </div>
                  </Link>

                  <div className="mxd-blog-preview__data">
                    <Link className="anim-uni-in-up" href={`/blog-article`}>
                      Create a <span>Strong Brand</span> identity fast
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Blog Preview Cards End */}
      </div>
    </div>
  );
}
