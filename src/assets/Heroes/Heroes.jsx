import React from "react";
import { useState } from "react";

export default function Heroes() {
  return (
    <div className="heroes-wrapper relative min-h-screen flex items-center">
      <div className="heroes bg-cover bg-center bg-[url('../public/heroes3.png')] h-auto w-full -z-10 absolute top-0 left-0 right-0 bottom-10 brightness-50"></div>

      <div className="text-white ml-20">
        <h1 className="text-6xl text-center lg:text-8xl font-bold mb-0 lg:mb-4 brightness-80">VISIT <br />JAPAN</h1>

      </div>
    </div>
  );
}
