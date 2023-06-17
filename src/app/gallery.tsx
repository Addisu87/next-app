"use client";

import React, { useState } from "react";
import { Carousel } from "acme-carousel";

const Gallery = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View Pictures</button>
      {isOpen && <Carousel />}
    </div>
  );
};

export default Gallery;
