"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Music() {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault(); // Prevent default link behavior
    setShowIframe(!showIframe); // Toggle iframe visibility
  };

  return (
    <>
      <div className="flex flex-col max-w-screen w-full overflow-hidden justify-center mx-auto ">
        {!showIframe ? (
          <a href="#" onClick={handleClick}>
            <p className="text-sm p-7 m-3 flowty animate-pulse text-center text-white drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]">
              Listen to my latest Hit!! 🔥
            </p>
          </a>
        ) : (
          <button
            onClick={handleClick}
            className="mx-auto mt-12 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-500 text-white hover:bg-neutral-600"
          >
            X
          </button>
        )}

        {/* Conditionally render the iframe */}
        {showIframe && (
          <div className="mt-4 flex justify-center">
            <iframe
              src="https://www.boomplay.com/embed/202990835/MUSIC?colType=2&colID=76730240"
              frameBorder="0"
              className="rounded-md w-full h-75 md:h-96"
              allowFullScreen
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
            ></iframe>
          </div>
        )}

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
                <p className="font-bold text-[10px] md:text-lg w-20 md:w-48 gotham">
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
