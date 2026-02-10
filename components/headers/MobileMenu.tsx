"use client";

import Link from "next/link";
import Image from "next/image";
import rawMenuItems from "@/data/menu.json";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { Flip } from "gsap/dist/Flip";

import AnimatedButton from "../animation/AnimatedButton";

/* =======================
   TYPES (IMPORTANT FIX)
======================= */
type SubMenuItem = {
  label: string;
  href: string;
};

type MenuItem = {
  title: string;
  href?: string;
  submenu?: SubMenuItem[];
};

const menuItems = rawMenuItems as MenuItem[];

gsap.registerPlugin(Flip);

// Safe layout effect for Next.js
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useEffect : useEffect;

export default function MobileMenu() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(-1);

  const submenuRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [submenuHeights, setSubmenuHeights] = useState<number[]>([]);

  // containers
  const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuContainRef = useRef<HTMLDivElement | null>(null);

  // flip element
  const flipBaseRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
      setTimeout(() => setIsMenuOpen(false), 800);
    } else {
      setIsMenuOpen(true);
      setTimeout(() => setIsActive(true), 600);
    }
  };

  const isMenuActive = (link?: string) =>
    link?.split("/")[1] === pathname.split("/")[1];

  // measure submenu heights
  useEffect(() => {
    const heights = submenuRefs.current.map((el) =>
      el ? el.scrollHeight : 0
    );
    setSubmenuHeights(heights);
  }, []);

  // close menu on route change
  useEffect(() => {
    setActiveSubmenu(-1);
    if (isActive) handleToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // GSAP FLIP animation
  useIsomorphicLayoutEffect(() => {
    const flipEl = flipBaseRef.current;
    if (!flipEl || !hamburgerBtnRef.current || !menuContainRef.current) return;

    const state = Flip.getState(flipEl);

    if (isMenuOpen) {
      menuContainRef.current.appendChild(flipEl);
    } else {
      hamburgerBtnRef.current.appendChild(flipEl);
    }

    Flip.from(state, {
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, [isMenuOpen]);

  return (
    <nav
      className={`mxd-nav__wrap ${isActive ? "active_menu" : ""}`}
      data-lenis-prevent=""
    >
      {/* Hamburger */}
      <div className="mxd-nav__contain loading__fade">
        <button
          type="button"
          onClick={handleToggle}
          className={`mxd-nav__hamburger ${isMenuOpen ? "nav-open" : ""}`}
          ref={hamburgerBtnRef}
        >
          <div className="hamburger__base" ref={flipBaseRef} />
          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </button>
      </div>

      {/* Menu */}
      <div className={`mxd-menu__wrapper ${isActive ? "active_menu" : ""}`}>
        <div className="mxd-menu__base" />

        <div className="mxd-menu__contain" ref={menuContainRef}>
          <div className="mxd-menu__inner">
            {/* LEFT */}
            <div className="mxd-menu__left">
              <p
                className="mxd-menu__caption fade-in-elm"
                style={{ transitionDelay: "0.4s" }}
              >
                Crafting Digital Experiences
                <br />
                That Perform
              </p>

              <nav className="main-menu__content">
                <ul className="main-menu__accordion">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="main-menu__item fade-in-up-elm"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {item.submenu ? (
                        <>
                          <div
                            className="main-menu__toggle"
                            onClick={() =>
                              setActiveSubmenu((prev) =>
                                prev === index ? -1 : index
                              )
                            }
                          >
                            <AnimatedButton
                              text={item.title}
                              as="span"
                              className="main-menu__link btn btn-anim"
                            />
                            <svg width={20} height={20} viewBox="0 0 20 20">
                              <path d="M19.6 9.6h-3.9c-.4 0-1.8-.2-1.8-.2-.6 0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4 0 0 0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0 .4-.2 1.5-.2 1.5 0 .5-.2 1-.5 1.4-.3.5-.7.9-1.2 1.2s-1 .5-1.6.6c0 0-1.2 0-1.7.2H.4c-.2 0-.4.2-.4.4s.2.4.4.4h4.1c.4 0 1.7.2 1.7.2.6 0 1.1.2 1.6.6.4.3.8.7 1.1 1.1.3.5.5 1 .6 1.6 0 0 0 1.3.2 1.7v4.1c0 .2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7 0-.6.2-1.1.6-1.6.3-.4.7-.8 1.1-1.1.5-.3 1-.5 1.6-.6 0 0 1.3 0 1.8-.2h3.9c.2 0 .4-.2.4-.4s-.2-.4-.4-.4Z" />
                            </svg>
                          </div>

                        <ul
  className="submenu"
  style={{
    height:
      activeSubmenu === index
        ? `calc(${submenuHeights[index]}px + 2rem)`
        : 0,
    paddingTop: activeSubmenu === index ? "2rem" : 0,
    transition: "all 0.3s ease",
  }}
  ref={(el) => {
    submenuRefs.current[index] = el;
  }}
>
                            {item.submenu.map((sub, i) => (
                              <li
                                key={i}
                                className={`submenu__item ${
                                  isMenuActive(sub.href) ? "active" : ""
                                }`}
                              >
                                <Link href={sub.href}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        item.href && (
                          <AnimatedButton
                            text={item.title}
                            className="main-menu__link btn btn-anim"
                            href={item.href}
                          />
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* RIGHT */}
            <div className="mxd-menu__right">
              <div className="menu-promo__content">
                  <p
                  className="menu-promo__caption fade-in-elm"
                  style={{ transitionDelay: "0.4s" }}
                >
                  We bring concepts to life
                  with precision, innovation,
                  and scalability. Each project
                  reflects our commitment to
                  quality, usability, and
                  business growth.
                </p>
                <Image
                  src="https://i.ibb.co/7J2SSg3j/2150010127.jpg"
                  alt="GridZign"
                  width={120}
                  height={120}
                  className="menu-promo__video fade-in-up-elm"
                  style={{ borderRadius: "35px", transitionDelay: "0.3s" }}
                />

              
              </div>
            </div>

            {/* FOOTER */}
            <div
              className="mxd-menu__data fade-in-up-elm"
              style={{ transitionDelay: "0.4s" }}
            >
              <p className="t-xsmall">Design. Develop. Deliver.</p>
              <p className="t-xsmall">
                <Link
                  href="https://hostimpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Together with Hostimpress
                </Link>
              </p>
            </div>
          </div>

          <div className="hamburger__parking-slot" />
        </div>
      </div>
    </nav>
  );
}
