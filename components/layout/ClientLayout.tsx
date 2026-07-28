"use client";

import { usePathname } from "next/navigation";
import MobileMenu from "@/components/headers/MobileMenu";
import Header1 from "@/components/headers/Header1";
import WhatsappFloat from "@/components/common/WhatsappFloat";
import InitScroll from "@/components/scroll/InitScroll";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  return (
    <>
      {!isAdminRoute && <MobileMenu />}
      {!isAdminRoute && <Header1 />}
      {children}
      <InitScroll />
      {!isAdminRoute && <ScrollTop />}
      {!isAdminRoute && <WhatsappFloat />}
      <LenisSmoothScroll />
    </>
  );
}
