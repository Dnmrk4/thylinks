import React from "react";
import Image from "next/image";
import {
  FaSpotify,
  FaDeezer,
  FaPlay,
  FaDownload,
  FaAmazon,
  FaYoutube,
} from "react-icons/fa";
import IndexPage from "@/components/title";

const FyiLinks = () => {
  return (
    <>
      <IndexPage title="FYI" />

      <div className="flex flex-col  justify-center m-7 p-7 mx-auto">
        <Image
          src="/fyi.jpg"
          alt=""
          fill
          className="object-cover min-h-screen z-[-1] blur-md"
        />
        <div className="flex flex-col  mx-auto justify-center">
          {/* card 1, for FYI */}
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden ">
            <div className="relative md:h-47 md:w-47 h-40 w-40 shadow-lg drop-shadow-black ">
              <Image
                src="/fyi.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto mt-[-3px]">
            <div className="font-bold md:text-xl gotham text-white md:w-40 text-[10px] w-25 ">
              FYI - Mutwiri ft Marcus THY Rapper
            </div>
          </div>
        </div>
        <div className="w-70 h-auto mx-auto p-12 mt-12 rounded-md shadow-md bg-blue-50/70 shadow-blue text-black">
          <div className="flex flex-col gap-4">
            <a
              href="https://open.spotify.com/track/0D09qAkUm6Ps9z3TAjXJdN?si=2488935bd55f47ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-fuchsia-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                Spotify
              </div>
              <FaPlay size={16} />
            </a>

            <a
              href="https://dzr.page.link/E5bbxwP72yhWHL926"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-fuchsia-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaDeezer size={20} />
                Deezer
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.youtube.com/watch?v=U8bT4tz2zEk&si=HEV9Vgg8TlkTVotQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-fuchsia-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaYoutube size={20} />
                YouTube Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://amazon.com/music/player/tracks/B0DLWMYDS8?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_vbatHAcXBF5liQMSHa9gGx470"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-fuchsia-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaAmazon size={20} />
                Amazon Music
              </div>
              <FaDownload size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FyiLinks;
