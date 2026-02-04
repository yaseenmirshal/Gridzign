"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";


export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`/`} className="mxd-logo">
          {/* logo icon */}
          <Image
  src="/img/icons/gridzign-logo.png"
  alt="GridZign"
  width={100}
  height={100}
  className="w-30 h-20 rounded-lg"
/>
          {/* logo text */}
          {/* <span className="mxd-logo__text">
            GridZign
          </span> */}
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />

        {pathname == "/" || pathname == "/preview" ? (
          <AnimatedButton
            text="Ping Us"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/Contact"
            
          >
           <i className="ph-bold ph-arrow-right" />
          </AnimatedButton>
        ) : (
          <AnimatedButton
            text="Say Hello"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/contact"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        )}
      </div>
    </header>
  );
}
