import ButtonLink from '../ButtonLink/ButtonLink';
import Portrait from '../Portrait/Portrait';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <section
      id="landing"
      className={styles.landing}
      data-testid="landing-section"
    >
      <div className={styles.landing__intro}>
        <h1 className={styles.landing__title}>{`Hi! I'm Travis Allen`}</h1>
        <p className={styles.landing__description}>
          Staff Engineer specializing in distributed systems, high-throughput
          data pipelines, and infrastructure observability. Founding engineer at
          Gala Games — eight years building systems that process nearly a
          million orders for 4 million users.
        </p>
        <ButtonLink
          href="/projects"
          text="Check out my projects!"
          type="outline"
        />
      </div>
      <div className={styles.landing__portrait}>
        <Portrait />
      </div>
    </section>
  );
}
