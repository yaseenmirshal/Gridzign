import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs2 from "@/components/blogs/Blogs2";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/homes/home-digital-agency/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Gridzign | Blog3",
  description:
    "Blogs",
};
export default function BlogSinglePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs2/>
        <Blogs desc="" title="More on topic" />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
