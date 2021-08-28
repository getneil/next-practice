import React from "react";

const style = {
  maxHeight: '300px',
}
export default ({ url = "" }) => {
  if (!url) return <></>;
  let isVideo = false;
  ['.mp4','.webm'].forEach((ext) => {
    if (url.includes(ext)) {
      isVideo = true;
    }
  });

  return isVideo ? 
    <video style={style} src={url} data-testid="Video"/> :
    <img  style={style} src={url} alt="dog picture" data-testid="Image"/>;
};