import PreviewPage from "./preview/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Gridzign",
  description:
    "Digital Agency",
};
export default function Home() {
  return (
    <>
      <PreviewPage />
    </>
  );
}
