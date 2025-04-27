"use client";

import React from "react";

const videos = [
  {
    id: 1,
    title: "Shiro | Official Music Video",
    url: "https://youtu.be/tOMqW95xKsk?si=dY5A_p3bkXzsKDzK",
  },
  {
    id: 2,
    title: "Timing Ya God | Official Music Video",
    url: "https://youtu.be/xUfIGY-AZgs?si=xIbixX5Ldg9TYLud",
  },
  {
    id: 3,
    title: "T.H.Y | Music Video",
    url: "https://youtu.be/vFv1nNVy0WE?si=nchBmmuEb5dEM990",
  },
  {
    id: 4,
    title: "Like Yuuh! | Official Audio Visual",
    url: "https://youtu.be/0Wv2-14heao?si=DzmvYSwueuZM_ZJs",
  },
];

export default function Videos() {
  return (
    <div className="flex flex-col mx-auto p-auto justify-center relative min-h-screen   text-white overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Videos</h1>

      {/* Scrollable video cards */}
      <div className="relative ">
        <div className="flex flex-row md:flex-wrap gap-6 overflow-x-auto  overflow-y-hidden pb-0 md:pb-2 overflow-scroll scroll-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden text-lg flex-shrink-0"
            >
              <iframe
                className="w-full h-48"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h2 className="text-sm font-semibold">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
