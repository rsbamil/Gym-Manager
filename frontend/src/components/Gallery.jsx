import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((elem, idx) => (
            <img key={idx} src={elem} alt="gallery-img" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((elem, idx) => (
            <img key={idx} src={elem} alt="gallery-img" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 10).map((elem, idx) => (
            <img key={idx} src={elem} alt="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
