import React from "react";
import Image from "next/image";
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaDeezer,
  FaMusic,
  FaPlay,
} from "react-icons/fa";

const TimingLinks = () => {
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
          <div className="mt-1 p-3 max-w-sm rounded-md overflow-hidden">
            <div className="relative md:h-47 md:w-47 h-40 w-40 shadow-lg drop-shadow-black">
              <Image
                src="/timing.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
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
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSpotify size={20} />
                Spotify
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaApple size={20} />
                Apple Music
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.boomplay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaMusic size={20} />
                Boomplay
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaSoundcloud size={20} />
                SoundCloud
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://www.deezer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaDeezer size={20} />
                Deezer
              </div>
              <FaPlay size={16} />
            </a>
            <a
              href="https://music.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-yellow-600 hover:underline"
            >
              <div className="flex items-center gap-2">
                <FaYoutube size={20} />
                YouTube Music
              </div>
              <FaPlay size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimingLinks;
