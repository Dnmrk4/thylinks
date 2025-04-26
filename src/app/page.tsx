import Footer from "@/components/footer";
import Music from "@/components/music";
import Navbarz from "@/components/navbar";
import Videos from "@/components/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcus THY Rapper",
};

export default function Home() {
  return (
    <>
      <div className="relative w-full justify-center h-screen flex flex-col items-center object-center overflow-hidden">
        <div className="fixed top-0 h-auto left-0 w-full  ">
          <Navbarz />
        </div>
        <div className="mx-auto ">
          <Music />
        </div>
        <div className="flex items-center mx-auto flex-col md:flex-row">
          <Videos />
        </div>
        <Footer />
      </div>
    </>
  );
}
