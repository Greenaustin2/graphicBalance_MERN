import React, { useContext } from "react";
import Youtube from "react-youtube";
import VideosContext from "../context/videos";

const IframeConstructor = () => {
  const { video, submitRequest } = useContext(VideosContext);
  // const submitApi = () => {
  //   apiRequest();
  // };
  // let videoId;
  // if (videoData) {
  //   videoId = videoData["id"];
  // }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playsInline: 1,
      rel: 0,
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      color: "white",
      fs: 1,
    },
  };
  // if (video === undefined) {
  //   return <p>still loading</p>
  // }
  return (
    <div>
      {video && (
        <Youtube opts={opts} videoId={video["id"]} onEnd={submitRequest} />
      )}
    </div>
  );
};

export default IframeConstructor;