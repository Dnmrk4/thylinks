"use client";
import React, { useState } from "react";
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

const TimingLinks = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex flex-col justify-center m-7 p-7 mx-auto">
        <Image
          src="/timing.jpg"
          alt=""
          fill
          className="object-cover min-h-screen z-[-1] blur-md"
        />
        <div className="flex flex-col mx-auto justify-center">
          {/* Card */}
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden relative">
            <div className="relative md:h-47 md:w-47 h-40 w-40 shadow-lg drop-shadow-black">
              <Image
                src="/timing.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              {/* Play/Pause Button */}
            </div>
          </div>
          <div className="mx-auto items-center text-center px-auto mt-[-3px]">
            <div className="font-bold md:text-xl text-amber-50 md:w-40 text-[10px] w-25">
              Timing ya God - Marcus THY Rapper
            </div>
          </div>
        </div>
        <div className="w-70 h-auto mx-auto p-12 mt-12 rounded-md shadow-md bg-gray-50/70 shadow-blue">
          <div className="flex flex-col gap-4">
            <a
              href="https://open.spotify.com/track/3LLWziC1tpVcP3egWXkT6N?si=1f285c747db045bc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                Spotify
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.apple.com/us/song/timing-ya-god/1706731532"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaApple size={20} />
                Apple Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.boomplay.com/songs/139852765?srModel=COPYLINK&srList=WEB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaMusic size={20} />
                Boomplay
              </div>
              <FaPlay size={16} />
            </a>

            <a
              href="https://dzr.page.link/eGX7m2WLYzM6XDHa8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaDeezer size={20} />
                Deezer
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.youtube.com/playlist?list=OLAK5uy_kCIjqlPGshE7ZNENH2Y8yfW_BeNEDMjw0&si=GD8UNhoUaXKiUMIW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaYoutube size={20} />
                YouTube Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://amazon.com/music/player/tracks/B0CHQQMQ16?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_XfSR9WEdho4ms1UQMlrmTNGQB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-700 hover:underline"
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

export default TimingLinks;
