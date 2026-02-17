"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects5 } from "@/data/projects.json";
gsap.registerPlugin(ScrollTrigger);
import VelocityMarquee from "@/components/animation/VelocityMarquee";

export default function Hero() {
  const staticAnimRefs = useRef<Array<HTMLDivElement | null>>([]);
  const fadeOutRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Static Anim Elements (scale + fade out)
    staticAnimRefs.current.forEach((el) => {
      if (el) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".hero-02-static__tl-trigger",
              start: "top 14%",
              end: "top 0.2%",
              scrub: true,
            },
            ease: "sine",
          })
          .fromTo(
            el,
            { transform: "translate3d(0, 0, 0)", scaleY: 1, opacity: 1 },
            { transform: "translate3d(0, -5rem, 0)", scaleY: 1.3, opacity: 0 }
          );
      }
    });

    // Fade Out Elements
    fadeOutRefs.current.forEach((el) => {
      if (el) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".mxd-pinned-fullscreen__tl-trigger",
              start: "top 80%",
              end: "top 10%",
              scrub: true,
            },
            ease: "sine",
          })
          .fromTo(el, { opacity: 1 }, { opacity: 0 });
      }
    });

    // Cleanup triggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // group images by row
  const grouped = projects5.reduce<
    Record<string, (typeof projects5)[number][]>
  >((acc, item) => {
    acc[item.row] = acc[item.row] || [];
    acc[item.row].push(item);
    return acc;
  }, {});
  return (
    <div className="mxd-section">
      <div className="mxd-hero-02 mxd-pinned-fullscreen">
        <div
          className="mxd-pinned-fullscreen__static hero-02-fade-out-scroll loading-wrap"
          ref={(el) => {
            fadeOutRefs.current[0] = el;
          }}
        >
          <div className="hero-02-static__tl-trigger" />
          {/* static top */}
          <div
            className="mxd-hero-02-static__top hero-02-static-anim-el"
            ref={(el) => {
              staticAnimRefs.current[0] = el;
            }}
          >
            <div className="mxd-container fullwidth-container grid-container">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="hero-02-static__caption loading__item">
                      <p className="text-xxl sm:text-2xl lg:text-5xl font-medium text-white">
    Engineering Digital Excellences
  </p>
 <p className="text-xxl sm:text-2xl lg:text-5xl mt-0 sm:!mt-3 font-medium text-gray-400">
    The Drive Growth
  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="mxd-hero-02-static__center">
            <div className="mxd-hero-02-marquee">
              <div className="mxd-hero-02-marquee__image loading__item">
                <Image
                  className="mxd-move"
                  alt="Hero Image"
                  src="/img/hero/floating metal.webp"
                  width={700}
                  height={704}
                />
              </div>
              <div className="mxd-hero-02-marquee__line loading__item">
                <VelocityMarquee
                  direction="left"
                  className="marquee marquee-left--gsap"
                >
                  {/* single item */}
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">Dèsigning Thè Digitàl Grid</p>
                    <div className="marquee__image mr-24">
                      <svg
                        className="mxd-pulse"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                        />
                      </svg>
                    </div>
                  </div>
                  {/* single item */}
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">Dèsigning Thè Digitàl Grid</p>
                    <div className="marquee__image mr-24">
                      <svg
                        className="mxd-pulse"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                        />
                      </svg>
                    </div>
                  </div>
                  {/* single item */}
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">Dèsigning Thè Digitàl Grid</p>
                    <div className="marquee__image mr-24">
                      <svg
                        className="mxd-pulse "
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                        />
                      </svg>
                    </div>
                  </div>
                </VelocityMarquee>
              </div>
            </div>
          </div>
          <div
            className="mxd-hero-02-static__bottom hero-02-static-anim-el"
            ref={(el) => {
              staticAnimRefs.current[1] = el;
            }}
          >
            <div className="mxd-container fullwidth-container grid-container">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-md-6 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-paragraph__lists loading__fade">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  Web Development
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  App Development
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  UI/UX Design
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  Brand Identity
                                </p>
                              </li>
                            
                            </ul>
                          </div>
                          <div className="col-6 col-xl-7">
                            <ul>
                            
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  SEO & Digital Marketing
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  Cloud & Hosting Services
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  Custom Software
                                </p>
                              </li>
                              <li>
                                <p className="t-small anim-uni-in-up">
                                  E-commerce Solutions
                                </p>
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mxd-hero-02-static__btn hero-02-static-anim-el loading__fade"
            ref={(el) => {
              staticAnimRefs.current[2] = el;
            }}
          >
            <a href="/contact" className="btn-rotating btn-rotating-160">
              {/* SVG rotating text */}
              <svg
                version="1.1"
                id="scrollDown"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 160 160"
                enableBackground={"new 0 0 160 160"}
                xmlSpace="preserve"
                className="btn-rotating__text mxd-rotate-slow"
                data-value={360}
              >
                <defs>
                  <path
                    id="textPath"
                    d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                  />
                </defs>
                <g>
                  <use xlinkHref="#textPath" fill="none" />
                  <text>
                    {/* button text here!!! */}
                    <textPath xlinkHref="#textPath">
                      Lets Build Someting Great * Lets Build Someting Great * 
                    </textPath>
                  </text>
                </g>
              </svg>
              {/* image */}
              {/* <Image class="btn-rotating__image" src="/img/icons/60x60_obj-btn-02.svg" alt="Object"> */}
              <svg
                className="btn-rotating__image"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="60px"
                height="60px"
                viewBox="0 0 60 60"
                enableBackground={"new 0 0 60 60"}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                    .icon-star-scroll {\n                      fill: #6d9bdf;\n                    }\n                  ",
                  }}
                />
                <path
                  className="icon-star-scroll"
                  d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7
            c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1
            c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5
            c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7
            c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
            c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7
            c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"
                />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mxd-pinned-fullscreen__tl-trigger" />
      </div>
{/* Floating WhatsApp Button — Large */}
<a
  href="https://wa.me/971555784992"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-[9999]"
  aria-label="Chat on WhatsApp"
>
  <div className="relative w-20 h-20">
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

    {/* Main button */}
    <div className="relative flex items-center justify-center w-full h-full rounded-full bg-green-500 shadow-2xl hover:bg-green-600 transition-all duration-300">
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-10 h-10"
      >
        <path d="M19.11 17.38c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.57.65.21 1.25.18 1.72.11.52-.08 1.58-.65 1.8-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 .67C7.53.67.67 7.53.67 16c0 2.82.74 5.57 2.15 7.97L.67 31.33l7.58-2.12A15.25 15.25 0 0016 31.33c8.47 0 15.33-6.86 15.33-15.33S24.47.67 16 .67zm0 28c-2.48 0-4.9-.66-7.01-1.9l-.5-.3-4.5 1.26 1.2-4.38-.33-.51A12.67 12.67 0 013.33 16c0-7 5.67-12.67 12.67-12.67S28.67 9 28.67 16 23 28.67 16 28.67z" />
      </svg>
    </div>
  </div>
</a>


    </div>

    
  );
}
