import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Destination() {
  return (
    <div className="destination-wrapper mt-20 flex flex-col justify-center items-center cursor-pointer">
      <h1 className="text-white text-3xl mb-10">Destination</h1>
      <div className="destination flex gap-20">
        <div className="relative overflow-hidden w-80 h-108 rounded-md">
          <img
            src="../../public/card-4.jpeg"
            alt="card-image"
            className="w-full h-full object-cover transition-transform transform hover:scale-110 brightness-75"
          />
          <div className="absolute inset-0 rounded-md pointer-events-none"></div>
          <span className="text-white text-5xl relative bottom-60 left-16">
            Tokyo
          </span>
        </div>
        <div className="relative overflow-hidden w-80 h-108 rounded-md">
          <img
            src="../../public/card-2.jpeg"
            alt="card-image"
            className="w-full h-full object-cover transition-transform transform hover:scale-110 brightness-75"
          />
          <div className="absolute inset-0 rounded-md pointer-events-none"></div>
          <span className="text-white text-5xl relative bottom-60 left-16">
            Osaka
          </span>
        </div>
        <div className="relative overflow-hidden w-80 h-108 rounded-md">
          <img
            src="../../public/card-3.webp"
            alt="card-image"
            className="w-full h-full object-cover transition-transform transform hover:scale-110 brightness-75"
          />
          <div className="absolute inset-0 rounded-md pointer-events-none"></div>
          <span className="text-white text-5xl relative bottom-60 left-12">
            Hokaido
          </span>
        </div>
      </div>
    </div>
  );
}
