import Music from "@/components/music";
import IndexPage from "@/components/title";
import Videos from "@/components/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcus THY Rapper",
};

export default function Home() {
  return (
    <>
      <IndexPage title="Home" />

      <div className="relative w-screen right-0 left-0 flex flex-col items-center justify-start text-center gap-12 overflow-hidden">
        {/* Music Section */}
        <div className="mx-auto m-4 mt-17 md:mt-20 ">
          <Music />
        </div>

        {/* Videos Section */}
        <div className="flex items-center mx-auto px-4 mt-8 md:mt-10 w-full">
          <Videos />
        </div>
      </div>
    </>
  );
}
