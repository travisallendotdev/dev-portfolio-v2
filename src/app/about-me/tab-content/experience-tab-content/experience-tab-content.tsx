import styles from './experience-tab-content.module.css';
import { getExperienceData } from '../../../common/config/experience.config';
import YearsMonthsDuration from '../../../components/YearsMonthsDuration/YearsMonthsDuration';

export default function ExperienceTabContent() {
  const experienceData = getExperienceData();

  return (
    <div className={styles.experienceTabContent}>
      <h1>Experience</h1>

      {experienceData.map(({ companyName, positions }) => (
        <div key={companyName} className={styles.experienceTabContent__company}>
          <h2 className={styles.experienceTabContent__companyName}>{companyName}</h2>
          {positions.map(({ title, team, durationInYears }) => (
            <div key={title}>
              <h3>
                {title}
                {' · '}
                <YearsMonthsDuration
                  durationInYears={durationInYears}
                  className={styles.experienceTabContent__duration}
                />
              </h3>
              {team && <p>{team}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
