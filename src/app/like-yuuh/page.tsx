import React from "react";
import Image from "next/image";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer,
  FaMusic,
  FaPlay,
  FaAmazon,
  FaDownload,
} from "react-icons/fa";
import IndexPage from "@/components/title";

const LikeLinks = () => {
  return (
    <>
      <IndexPage title="Like Yuuh!" />

      <div className="flex flex-col justify-center m-7 p-7 mx-auto">
        <Image
          src="/yuuh.jpg"
          alt=""
          fill
          className="object-cover min-h-screen z-[-1] blur-md"
        />
        <div className="flex flex-col mx-auto justify-center">
          {/* Card */}
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden">
            <div className="relative md:h-47 md:w-47 h-40 w-40 shadow-lg drop-shadow-black">
              <Image
                src="/yuuh.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto mt-[-3px]">
            <div className="font-bold md:text-xl gotham text-background stroke-3 stroke-white md:w-40 text-[10px] w-35">
              Like Yuuh! - Marcus THY Rapper ft Blacowp
            </div>
          </div>
        </div>
        <div className="w-70 h-auto mx-auto p-12 mt-12 rounded-md shadow-md bg-blue-50/70 shadow-blue text-black">
          <div className="flex flex-col gap-4">
            <a
              href="https://open.spotify.com/track/52odWT9V5UeZohlXx8q8Dy?si=4b3e3f36a4b34bcf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                Spotify
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.apple.com/us/song/like-yuuh-feat-blacowp/1731811675"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaApple size={20} />
                Apple Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.boomplay.com/songs/157471001?srModel=COPYLINK&srList=WEB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaMusic size={20} />
                Boomplay
              </div>
              <FaPlay size={16} />
            </a>

            <a
              href="https://dzr.page.link/Crrek4RtK8ZhMNTL6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaDeezer size={20} />
                Deezer
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.youtube.com/watch?v=pBamBnmgZao&si=lZSFQroUqgE9RyTF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaYoutube size={20} />
                YouTube Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://amazon.com/music/player/tracks/B0CVW1X18F?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_VtoPoRFwXr7ihPvJhHauabjjd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 hover:underline"
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

export default LikeLinks;
