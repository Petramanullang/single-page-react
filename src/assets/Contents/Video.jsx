import React from "react";

export default function Video() {
  return (
    <div className="video-wrapper flex justify-center items-center gap-20 bg-[url(../../public/content-2.png)] mt-10 h-screen w-full -z-10 bg-cover bg-center before:absolute">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CxuiFNYnEr4?si=oV7YeyxYE6Y12jlS"
        title="YouTube video player"
        frameborder="0"
        className="z-10 border-2 rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vJAGF5mKwWY?si=dmzZRFxPqYhWEmBJ"
        title="YouTube video player"
        frameborder="0"
        className="z-10 border-2 rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

        
    </div>
  );
}
