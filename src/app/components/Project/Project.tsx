import Image from 'next/image';
import styles from './Project.module.css';
import { IProject } from '../../common/types/config';
import Card from '../Card/Card';
import IconExternalLink from '../IconExternalLink/IconExternalLink';
import GithubInvertedIcon from '../icons/GithubInvertedIcon';
import GlobeIcon from '../icons/GlobeIcon';
import Chip from '../Chip/Chip';
import { getTechUsedUrl } from '../../common/config';

type ProjectProps = IProject;

export default function Project({
  title,
  description,
  techUsed,
  demoLink,
  githubLink,
  image,
}: ProjectProps) {
  return (
    <Card className={styles.project__container}>
      {image && (
        <figure className={styles.project__image}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </figure>
      )}
      <h2 className={styles.project__title}>{title}</h2>
      <p className={styles.project__description}>{description}</p>
      <ul className={styles.project__chips}>
        {techUsed.map((techItem) => {
          const url = getTechUsedUrl(techItem);
          return (
            <li key={techItem}>
              {url ? (
                <a href={url} rel="noopener noreferrer" target="_blank">
                  <Chip>{techItem}</Chip>
                </a>
              ) : (
                <Chip>{techItem}</Chip>
              )}
            </li>
          );
        })}
      </ul>
      {(githubLink || demoLink) && (
        <div className={styles.project__links}>
          {githubLink && (
            <IconExternalLink
              className={styles.project__links_demo}
              href={githubLink}
              Icon={GithubInvertedIcon}
            />
          )}
          {demoLink && (
            <IconExternalLink
              className={styles.project__links_github}
              href={demoLink}
              Icon={GlobeIcon}
            />
          )}
        </div>
      )}
    </Card>
  );
}
