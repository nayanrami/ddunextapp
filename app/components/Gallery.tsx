import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto m-10">
      <h1 className="inline border-b-4 p-2 border-red-500 text-4xl font-bold font-sans">
        Gallery
      </h1>
      <br />
      <br />
      <br />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
        <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg2.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg3.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg4.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg5.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/dduimg6.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery1.jpeg"
              alt=""
            />
          </div>
          
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery2.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery4.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery/gallery5.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
