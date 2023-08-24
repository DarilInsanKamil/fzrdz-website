import Link from 'next/link';
import Image from 'next/image';
import styles from './music.module.css'
import play from '../../assets/icon/play.svg'
import { ButtonIcon } from '..';

export const CardMusic = ({image, alt, type, title, link}) => {
  return (
    <div className={styles.cover}>
      <Image
        src={image}
        className={styles.image}
        width={800}
        height={250}
        alt={alt}
        draggable="false"
      />
      <div className={styles.player}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.title_cover}>{title}</h3>
        <Link href={link}>
          <ButtonIcon icon={play} alt={"play-icon"} title={"Play"} />
        </Link>
      </div>
    </div>
  );
};
