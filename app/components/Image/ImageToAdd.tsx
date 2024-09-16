"use client";
import { Image } from "@chakra-ui/next-js";
import { StaticImageData } from "next/image";
import styles from "./image.module.css";

interface Prop {
  image: StaticImageData;
}

function ImageToAdd({ image }: Prop) {
  return (
    <div>
      <Image alt="web image" src={image} className={styles.image} />
    </div>
  );
}

export default ImageToAdd;
