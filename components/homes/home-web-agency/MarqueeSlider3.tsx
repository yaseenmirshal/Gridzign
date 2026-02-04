import Link from "next/link";
import Image from "next/image";

import VelocityMarquee from "@/components/animation/VelocityMarquee";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function MarqueeSlider3() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container fullwidth-container">
        {/* Block - Marquee Images Two Lines Start */}
        <div className="mxd-block">
          {/* top line */}
          <VelocityMarquee direction="left" className="marquee marquee--gsap">
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/8.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>

            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/9.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>

            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/10.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>

             {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/11.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>

             {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/12.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/13.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>

            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/14.png"
                  width={1100}
                  height={1000}
                />
              </Link>
            </div>

            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/15.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
          
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/1.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/2.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
            
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/3.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
          </VelocityMarquee>
          {/* bottom line */}
          <VelocityMarquee className="marquee marquee--gsap">
           
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/4.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/5.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
      
           
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/6.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/img/clientslogo/7.png"
                  width={1200}
                  height={1000}
                />
              </Link>
            </div>
          </VelocityMarquee>
        </div>
        {/* Block - Marquee Images Two Lines End */}
      </div>
    </div>
  );
}
