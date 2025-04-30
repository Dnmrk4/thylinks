"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
function Music() {
  return (
    <>
      <div className="flex flex-col max-w-screen w-full overflow-hidden justify-center mx-auto ">
        <h2 className="text-3xl text-center p-3 flowty mx-auto ">Music</h2>
        <div className="flex flex-row md:flex-wrap  mx-auto justify-center  w-full overflow-hidden scroll-auto scrollbar-hide">
          {/* Card 1 */}
          <Link href="/shiro">
            <div className="flex flex-col m-1 items-center ">
              <div className="mt-1  rounded-sm overflow-hidden shadow-lg">
                <div className="relative  md:hover:h-49 md:hover:w-49 h-23 w-23 md:h-48 md:w-48">
                  <Image
                    src="/shiro.jpg"
                    alt="Shiro"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-[10px] md:text-lg w-25 md:w-48 gotham">
                  SHIRO - Marcus THY Rapper
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/timing-ya-God">
            <div className="flex flex-col m-1 items-center">
              <div className="mt-1  rounded-sm overflow-hidden shadow-lg">
                <div className="relative md:hover:h-49 md:hover:w-49 h-23 w-23 md:h-48 md:w-48">
                  <Image
                    src="/timing.jpg"
                    alt="Timing ya God"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-[10px] md:text-lg w-20 md:w-48 gotham">
                  Timing ya God - Marcus THY Rapper
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/like-yuuh">
            <div className="flex flex-col m-1 items-center">
              <div className="mt-1  rounded-sm overflow-hidden shadow-lg">
                <div className="relative  md:hover:h-49 md:hover:w-49 h-23 w-23 md:h-48 md:w-48">
                  <Image
                    src="/yuuh.jpg"
                    alt="Like Yuuh!"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-[10px] md:text-lg w-22 md:w-48 gotham">
                  Like Yuuh! - Marcus THY Rapper ft Blacowp
                </p>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/fyi">
            <div className="flex flex-col m-1 items-center">
              <div className="mt-1 rounded-sm overflow-hidden shadow-lg">
                <div className="relative  md:hover:h-49 md:hover:w-49 h-23 w-23 md:h-48 md:w-48">
                  <Image
                    src="/fyi.jpg"
                    alt="FYI"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-[10px] md:text-lg w-20 md:w-48 gotham">
                  FYI - Mutwiri ft Marcus THY Rapper
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Music;
