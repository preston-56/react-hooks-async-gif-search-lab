import React from "react";

function GifList(props) {
  return (
    <ul>
      {props.gifs.map((gifObj) => (
        <li>
          <img src={gifObj.images.original.url} alt="" />
        </li>
      ))}{" "}
    </ul>
  );
}

export default GifList;
