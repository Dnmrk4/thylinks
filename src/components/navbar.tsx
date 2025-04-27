"use client";

import Link from "next/link";
import React from "react";

function Navbarz() {
  return (
    <>
      <div className="relative  p-2 justify-center">
        <div className="mx-auto m-auto   text-center  p-4">
          <Link href="/">
            <p className="md:text-5xl text-2xl  text-shadow font-bold md:font-extrabold text-nowrap text-white ">
              MARCUS THY RAPPER
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbarz;
