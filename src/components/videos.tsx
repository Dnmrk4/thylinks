"use client";

import React from "react";

const videos = [
  {
    id: 1,
    title: "Shiro | Official Music Video",
    url: "https://www.youtube.com/embed/tOMqW95xKsk?si=cgRcZfcEKevRsIyZ",
  },
  {
    id: 2,
    title: "Timing Ya God | Official Music Video",
    url: "https://www.youtube.com/embed/xUfIGY-AZgs?si=7ntljE8TrG0YlakJ",
  },
  {
    id: 3,
    title: "T.H.Y | Music Video",
    url: "https://www.youtube.com/embed/vFv1nNVy0WE?si=pPrngO4iEBDj4Fa-",
  },
  {
    id: 4,
    title: "Like Yuuh! | Official Audio Visual",
    url: "https://www.youtube.com/embed/0Wv2-14heao?si=zq97482J9SJ7fBG_",
  },
];

export default function Videos() {
  return (
    <div className="flex flex-col mx-auto mt-0 justify-center relative text-white overflow-scroll">
      <h1 className="text-xl font-bold  mb-6 text-center">Videos</h1>

      {/* Video Cards */}
      <div className="flex flex-row gap-3 overflow-x-scroll scroll-auto scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="inline-block flex-shrink-0 w-64 md:w-auto"
          >
            {/* Video */}
            <iframe
              className="w-full h-48 rounded-md"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Title */}
            <div className="mt-2">
              <h2 className="text-xs text-center font-medium">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
