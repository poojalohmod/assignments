import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";


export default function ImageSlideshow() {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Card className="p-4 text-center">
      <img src={images[index]} alt="slideshow" className="mx-auto mb-4" />
      <div className="flex justify-center gap-2">
        <Button onClick={prevImage}>Previous</Button>
        <Button onClick={nextImage}>Next</Button>
      </div>
    </Card>
  );
}
