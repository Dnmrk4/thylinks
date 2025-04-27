"use client";

import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

function Socials() {
  return (
    <div className="flex justify-center gap-4 py-4">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://www.tiktok.com"
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
