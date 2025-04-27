import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbarz from "@/components/navbar";

const ShiroLinks = () => {
  return (
    <>
      {/* <div className="fixed top-0 h-auto left-0 w-full  ">
        <Navbarz />
      </div> */}
      <div className="flex flex-col  justify-center m-7 p-7 mx-auto">
        <Image
          src="/shiro.jpg"
          alt=""
          fill
          className="object-cover min-h-screen z-[-1] blur-md"
        />
        <div className="flex flex-col  mx-auto justify-center">
          {/* card 1, for shiro */}
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden ">
            <div className="relative md:h-47 md:w-47 h-20 w-20 shadow-lg drop-shadow-black ">
              <Image src="/shiro.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto mt-[-3px]">
            <div className="font-bold md:text-xl text-background stroke-3 stroke-white md:w-40 text-[7px] w-20 ">
              SHIRO - Marcus THY Rapper
            </div>
          </div>
        </div>
        <div className="w-70 h-auto mx-auto p-12 mt-12 rounded-md shadow-md bg-blue-50 shadow-blue text-black">
          links
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};
export default ShiroLinks;
