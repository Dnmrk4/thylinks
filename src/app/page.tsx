import Music from "@/components/music";
import Videos from "@/components/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcus THY Rapper",
};

export default function Home() {
  return (
    <>
      <div className="relative w-full  flex flex-col items-center justify-start text-center gap-12 overflow-hidden">
        {/* Music Section */}
        <div className="mx-auto mt-4 md:mt-6 w-full px-4">
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
