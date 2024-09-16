"use client";

import Link from "next/link";
import styles from "./projectCard.module.css";
import ImageToAdd from "../Image/ImageToAdd";
import rawg from "../../assets/screenShots/rawg.png";
import realEstate from "../../assets/screenShots/real estate.png";
import weather from "../../assets/screenShots/weather.png";
import calorie from "../../assets/screenShots/calorie.png";
import movie from "../../assets/screenShots/Movie.png";

const image = [rawg, realEstate, weather, calorie, movie];

interface Props {
  webLink: Link;
}

export interface Link {
  address: string;
  name: string;
  id: number;
}

function ProjectCard({ webLink }: Props) {
  return (
    <div className={styles.card}>
      <div>
        <Link target={"_blank"} href={webLink.address}>
          <ImageToAdd image={image[webLink.id - 1]} />
        </Link>
      </div>
      <div>
        <h1 className={styles.title}>{webLink.name}</h1>
      </div>
    </div>
  );
}

export default ProjectCard;
