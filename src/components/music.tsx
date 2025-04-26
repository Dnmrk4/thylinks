"use client";

import React from "react";
import Image from "next/image";

function Music() {
  return (
    <>
      <div className="flex flex-row  items-center">
        {/* the row */}
        <div className="flex flex-col">
          {/* card 1, for shiro */}
          <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
            <div className="relative md:h-47 md:w-47 h-20 w-20">
              <Image src="/shiro.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto py-1">
            <div className="font-bold text-sm w-30 ">
              SHIRO - Marcus THY Rapper
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex flex-col">
          {/* card 2, for shiro */}
          <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
            <div className="relative md:h-47 md:w-47 h-20 w-20">
              <Image src="" alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto py-1">
            <div className="font-bold w-30 text-sm ">
              Timing ya God - Marcus THY Rapper
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex flex-col">
          {/* card 3, for shiro */}
          <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
            <div className="relative md:h-47 md:w-47 h-20 w-20">
              <Image src="" alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto py-1">
            <div className="font-bold w-30  text-sm">
              Like Yuuh! - Marcus THY Rapper
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Music;
