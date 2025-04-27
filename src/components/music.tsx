"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Music() {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto">
        <h2 className="text-md text-center font-bold mx-auto ">Music</h2>
        <div className="flex md:flex-row flex-wrap justify-center">
          {/* the row */}
          <Link href="/shirolinks">
            <div className="flex flex-col">
              {/* card 1, for shiro */}
              <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
                <div className="relative md:h-47 md:w-47 h-20 w-20">
                  <Image
                    src="/shiro.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mx-auto items-center text-center px-auto mt-[-12px]">
                <div className="font-bold md:text-xl md:w-40 text-[7px] w-20 ">
                  SHIRO - Marcus THY Rapper
                </div>
              </div>
            </div>
          </Link>
          {/* card 2 */}
          <Link href="/timingyaGodlinks">
            <div className="flex flex-col">
              {/* card 2, for shiro */}
              <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
                <div className="relative md:h-47 md:w-47 h-20 w-20">
                  <Image
                    src="/timing.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mx-auto items-center text-center px-auto mt-[-12px]">
                <div className="font-bold w-20 md:w-40 md:text-xl text-[7px] ">
                  Timing ya God - Marcus THY Rapper
                </div>
              </div>
            </div>
          </Link>
          {/* card 3 */}
          <Link href="/likeyuuhlinks">
            <div className="flex flex-col">
              {/* card 3, for shiro */}
              <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
                <div className="relative md:h-47 md:w-47 h-20 w-20">
                  <Image src="/yuuh.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="mx-auto items-center text-center px-auto mt-[-12px]">
                <div className="font-bold w-20 md:w-40 md:text-xl text-[7px]">
                  Like Yuuh! - Marcus THY Rapper ft Blacowp
                </div>
              </div>
            </div>
          </Link>
          <Link href="/fyilinks">
            <div className="flex flex-col">
              {/* card 3, for shiro */}
              <div className="mt-1 p-3 max-w-sm rounded-sm overflow-hidden shadow-lg">
                <div className="relative md:h-47 md:w-47 h-20 w-20">
                  <Image src="/fyi.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="mx-auto items-center text-center px-auto mt-[-12px]">
                <div className="font-bold w-20 md:w-40 md:text-xl text-[7px]">
                  FYI - Mutwiri ft Marcus THY Rapper
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Music;
