"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex justify-center z-10 gap-10 md:gap-7 py-4">
      <a
        href="https://www.youtube.com/@marcusthyrapper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.instagram.com/nesta.anyasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.facebook.com/nesta.rodrigez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaFacebook size={24} />
      </a>

      {/* Custom SVG for X (Twitter) */}
      <a
        href="https://x.com/MarcusThy?t=-NaT_hJf0FN..."
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M23.5 0h-3.9L12 10.3 4.4 0H.5l9.6 12L0 24h3.9l8.1-10.3L20.6 24h3.9l-9.6-12z" />
        </svg>
      </a>

      <a
        href="https://www.tiktok.com/@marcusthyrapper?is_from_webapp=1&sender_device=pc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaTiktok size={24} />
      </a>
    </div>
  );
}

export default Socials;
