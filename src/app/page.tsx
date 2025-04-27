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
      <div className="relative w-full justify-center h-full flex flex-col items-center object-center overflow-hidden">
        <div className="mx-auto mt-20">
          <Music />
        </div>
        <div className="flex m-3 items-center mx-auto flex-col md:flex-row">
          <Videos />
        </div>
      </div>
    </>
  );
}
