import React from "react";
import Socials from "./socials";

function Footer() {
  return (
    <>
      <footer className="flex flex-col left-0 w-full right-0 mx-auto bottom-0   text-white">
        <div className="mx-auto flex flex-row">
          <Socials />
        </div>
        <div className="w-full h-auto  z-10">
          <div className="mx-auto m-auto text-center  z-10 bottom-0">
            <p className="text-nowrap fottto text-white text-center  text- md:text-lg">
              © 2025 danmarkmutai
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
