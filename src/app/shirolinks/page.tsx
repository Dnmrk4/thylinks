import React from "react";
import Image from "next/image";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer,
  FaAmazon,
  FaMusic,
  FaRecordVinyl,
  FaPlay,
  FaDownload,
} from "react-icons/fa";

const ShiroLinks = () => {
  return (
    <>
      <div className="flex flex-col justify-center m-7 p-7 mx-auto">
        <Image
          src="/shiro.jpg"
          alt=""
          fill
          className="object-cover min-h-screen z-[-1] blur-md"
        />
        <div className="flex flex-col mx-auto justify-center">
          {/* Card */}
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden">
            <div className="relative md:h-47 md:w-47 h-40 w-40 shadow-lg drop-shadow-black">
              <Image
                src="/shiro.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto mt-[-3px]">
            <div className="font-bold md:text-xl text-gray-200 md:w-40 text-[10px] w-25">
              SHIRO - Marcus THY Rapper
            </div>
          </div>
        </div>
        <div className="w-70 h-auto mx-auto p-12 mt-12 rounded-md shadow-md bg-blue-50/70 shadow-blue text-black">
          <div className="flex flex-col gap-4">
            <a
              href="https://open.spotify.com/track/4b5qC4RGyoGXO6tQ3ZU3BY?si=2dc1bd43f30f4791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                Spotify
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.apple.com/us/song/shiro/1806176500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaApple size={20} />
                Apple Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.boomplay.com/songs/202990835?srModel=COPYLINK&srList=WEB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaMusic size={20} />
                Boomplay
              </div>
              <FaPlay size={16} />
            </a>

            <a
              href="https://dzr.page.link/DocpcY3TerJb9Wyy8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaDeezer size={20} />
                Deezer
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.youtube.com/playlist?list=OLAK5uy_kr86AmSXlhvP-OdyWu_1APd3t-Bs8GOqo&si=RmH5saNdlF1c-1Dk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaYoutube size={20} />
                YouTube Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.amazon.com/SHIRO/dp/B0F15NQ75B"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaAmazon size={20} />
                Amazon Music
              </div>
              <FaDownload size={16} />
            </a>
            <a
              href="https://www.qobuz.com/us-en/album/shiro-marcus-thy-rapper/fqmd6awcva6ua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-neutral-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaRecordVinyl size={20} />
                Qobuz
              </div>
              <FaDownload size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShiroLinks;
