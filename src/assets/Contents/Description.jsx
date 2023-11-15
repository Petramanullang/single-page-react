import React from "react";

export default function Description() {
  return (
    <div className="flex-col description-wrapper">

      <div className="flex justify-center">
        <h1 className="text-white text-3xl mb-10">Description</h1>
      </div>

      <div className="flex gap-24 justify-center items-center px-20 mb-36">
        <img
          className="w-160 h-80 object-cover rounded-md"
          src="../../public/card-1.jpeg"
          alt=""
        />
        <p className="text-white w-160 text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          ducimus veniam iure? Autem consequatur numquam fugiat, impedit
          eligendi saepe at laboriosam libero odit, molestias id, incidunt
          laudantium ullam? Modi dolorem, optio officiis unde culpa alias
          commodi reprehenderit soluta. Deleniti quibusdam, animi distinctio
          eius dolorum obcaecati iure quos eum fuga optio!
        </p>
      </div>

      <div className="flex justify-center items-center px-20 gap-24">
        <p className="text-white text-base w-160">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          ducimus veniam iure? Autem consequatur numquam fugiat, impedit
          eligendi saepe at laboriosam libero odit, molestias id, incidunt
          laudantium ullam? Modi dolorem, optio officiis unde culpa alias
          commodi reprehenderit soluta. Deleniti quibusdam, animi distinctio
          eius dolorum obcaecati iure quos eum fuga optio!
        </p>
        <img
          className="w-160 h-80 object-cover rounded-md"
          src="../../public/card-3.webp"
          alt=""
        />
      </div>
    </div>
  );
}
