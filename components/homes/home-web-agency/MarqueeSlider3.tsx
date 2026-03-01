"use client";

import Image from "next/image";
import VelocityMarquee from "@/components/animation/VelocityMarquee";

export default function MarqueeSlider3() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container fullwidth-container">

        <div className="mxd-block">

          {/* ================= TOP LINE ================= */}
          <VelocityMarquee direction="left" className="marquee marquee--gsap">

            {Array.from({ length: 25 }, (_, i) => i + 1).map((n) => (
              <div key={n} className="clientcontainer">
                <span className="clientlogonew">
                  <Image
                    className="clientimage"
                    alt={`Client ${n}`}
                    src={`/img/clientslogonew/${n}.jpeg`}
                    width={1200}
                    height={1000}
                  />
                </span>
              </div>
            ))}

          </VelocityMarquee>

          {/* ================= BOTTOM LINE ================= */}
          <VelocityMarquee className="marquee marquee--gsap">

            {Array.from({ length: 25 }, (_, i) => i + 26).map((n) => (
              <div key={n} className="clientcontainer">
                <span className="clientlogonew">
                  <Image
                    className="clientimage"
                    alt={`Client ${n}`}
                    src={`/img/clientslogonew/${n}.jpeg`}
                    width={1200}
                    height={1000}
                  />
                </span>
              </div>
            ))}

          </VelocityMarquee>

        </div>

      </div>
    </div>
  );
}