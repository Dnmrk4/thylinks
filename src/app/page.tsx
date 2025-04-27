import Music from "@/components/music";
import Videos from "@/components/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcus THY Rapper",
};

export default function Home() {
  return (
    <>
      <div className="relative w-full max-h-screen justify-center text-center gap-3 h-full flex flex-col items-center overflow-hidden">
        {/* Music Section */}
        <div className="mx-auto  mt-12 md:mt-100 w-full m-1 p-1 bottom-0">
          <Music />
        </div>

        {/* Videos Section */}
        <div className="flex m-3 items-center mx-auto  px-2 mt-12 w-full h-auto p-1 bottom-0">
          <Videos />
        </div>
      </div>
    </>
  );
}
