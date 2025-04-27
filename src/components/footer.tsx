import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col left-0 right-0 mx-auto footer footer-center  fixed bottom-0 p-3 text-white">
        <div className="w-full">
          <div>
            <p className="text-nowrap text-center">© 2025 dashutterestudios</p>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-12 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent z-10" />
      </footer>
    </>
  );
}
export default Footer;
