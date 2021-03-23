import React from "react";

type IImageWithText = {
  imagePath: string,
  text?: string,
}

export const ImageWithText = ({imagePath, text}: IImageWithText) => {
  return <div className="article-image">
    <img src={imagePath} />
    {text && <div className="article-image_text">{text}</div>}
  </div>
}