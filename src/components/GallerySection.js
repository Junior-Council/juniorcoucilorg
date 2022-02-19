import React from "react";
import ImageList from "@mui/material/ImageList";
import Container from "./Container";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

export default function GallerySection({ images }) {
  return (
    <div
      className="section"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((image) => (
          <ImageListItem key={image.src}>
            <img src={image.childImageSharp.fluid.src}></img>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
