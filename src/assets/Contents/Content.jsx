import React from "react";
import Card from "./Card";

export default function Content() {
  return (
    <div className="content-wrapper bg-black md:flex md:justify-center">
      <div className="content">
        <div className="md:flex lg:gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}