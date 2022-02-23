import ImageGallery from "react-image-gallery";

const images = [
  {
    // original: "/assets/rare_deel/1.png",
    thumbnail: "/assets/rare_deel/1.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_deel/2.png",
    thumbnail: "/assets/rare_deel/2.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_deel/3.png",
    thumbnail: "/assets/rare_deel/3.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_deel/4.png",
    thumbnail: "/assets/rare_deel/4.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_deel/5.png",
    thumbnail: "/assets/rare_deel/5.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_deel/6.png",
    thumbnail: "/assets/rare_deel/6.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_free/1.png",
    thumbnail: "/assets/rare_free/1.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_free/2.png",
    thumbnail: "/assets/rare_free/2.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_free/3.png",
    thumbnail: "/assets/rare_free/3.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_free/4.png",
    thumbnail: "/assets/rare_free/4.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_free/5.png",
    thumbnail: "/assets/rare_free/5.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_laser_eye/1.png",
    thumbnail: "/assets/rare_laser_eye/1.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_laser_eye/2.png",
    thumbnail: "/assets/rare_laser_eye/2.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_laser_eye/3.png",
    thumbnail: "/assets/rare_laser_eye/3.png",
    thumbnailHeight: "1000px",
  },
  {
    // original: "/assets/rare_laser_eye/4.png",
    thumbnail: "/assets/rare_laser_eye/4.png",
    thumbnailHeight: "1000px",
  },
];

export function WolfImageGallery() {
  return (
    <ImageGallery
      infinite={true}
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay={true}
      items={images}
      slideDuration={5}
      slideInterval={1000}
      showNav={false}
    />
  );
}
