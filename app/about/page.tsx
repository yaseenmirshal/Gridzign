
import Footer2 from '@/components/homes/home-digital-agency/Footer2';
import { Metadata } from "next";
import Hero2 from '@/components/other-pages/about/Hero2';

export const metadata: Metadata = {
  title:
    "Gridzign ",
  description:
    "About",
};

export default function About() {
  return (
     <>
             <Hero2/>
             <Footer2 />
           </>
        
  )
}


