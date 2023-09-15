import React from "react";

type Props = {};

export default function Navigator({}: Props) {
  return (
    <div className="navigator fixed w-full font-proxima flex flex-row items-center justify-between px-4 py-2 bg-white">
      <ul className="flex flex-row gap-8 font-semibold">
        <a href="">
          <li className="font-extrabold">PAY IT FORWATD CONF.</li>
        </a>
        <a href="#session-info">
          <li>SESSION INFO</li>
        </a>
        <a href="#time-table">
          <li>TIME TABLE</li>
        </a>
        <a href="#live-streaming">
          <li>LIVE STREAMING</li>
        </a>
        <a href="#location">LOCATION</a>
      </ul>
      <div className="nav-logo-wrapper w-10 h-10">
        <a href="https://sshs.sen.hs.kr/" target="_blank">
          <span className="sr-only">SSHS LOGO</span>
          <img src="/sshslogo.jpeg" alt="SSHS LOGO" />
        </a>
      </div>
    </div>
  );
}
