"use client";

import Link from "next/link";
import React from "react";

function Navbarz() {
  return (
    <>
      <div className="relative  justify-center overflow-hidden backdrop-blur-md bg-black/30">
        <div className="mx-auto m-auto text-center p-4">
          <Link href="/">
            <p className="md:text-5xl text-3xl w-full irish-grover-regular text-shadow  font-extrabold p-4 md:font-extrabold text-nowrap text-white">
              MARCUS THY RAPPER
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbarz;
