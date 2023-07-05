import React, { memo } from "react";
import Youtube from "react-youtube";
// import VideosContext from "../context/videos";

const opts = {
  height: "100%",
  width: "80%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    playsInline: 1,
    rel: 0,
    modestbranding: 1,
    controls: 1,
    color: "white",
    fs: 1,
  },
};

const IframeConstructor = ({ currentVideo, onEnd }) => {
  console.log("iframe function entered");

  return (
    <div className="player-wrapper">
      <Youtube
        opts={opts}
        videoId={currentVideo}
        onEnd={onEnd}
        className="youtube-player"
        // onReady={(e) => e.target.loadVideoById(currentVideo)}
      />
    </div>
  );
};

export default memo(IframeConstructor);
