import styles from "../gallery/imagegallery.module.css";
import Image from "next/image";
import { useState } from "react";

const ImageGallery = () => {
  const [isMouseHovering, setMouseHovering] = useState(false);
  const handleMouseEnter = () => setMouseHovering(true);
  const handleMouseLeave = () => setMouseHovering(false);
  console.log(isMouseHovering);
  return (
    <div>
      <div className={styles.grid__layout}>
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
        ].map((path) => {
          return (
            <div key={path} className={styles.grid__item}>
              <Image
                index={path}
                src={`/${path}.jpg`}
                alt="galleryImage"
                width={100}
                height={100}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                objectFit="contain"
                layout="responsive"
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
