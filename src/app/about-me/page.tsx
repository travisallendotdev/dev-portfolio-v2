'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import ActiveButton from '../components/ActiveButton/ActiveButton';
import Card from '../components/Card/Card';
import Section from '../components/Section/Section';
import AboutMeTabContent from './tab-content/about-me-tab-content/about-me-tab-content';
import ExperienceTabContent from './tab-content/experience-tab-content/experience-tab-content';
import SkillsTabContent from './tab-content/skills-tab-content/skills-tab-content';
import styles from './about-me.page.module.css';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about-me');

  const tabs = [
    { id: 'about-me', label: 'About Me', content: <AboutMeTabContent /> },
    {
      id: 'experience',
      label: 'Experience',
      content: <ExperienceTabContent />,
    },
    { id: 'skills', label: 'Skills', content: <SkillsTabContent /> },
  ];

  const tabsToContent = new Map<string, React.ReactElement>(
    tabs.map((tab) => [tab.id, tab.content])
  );

  return (
    <Section id="about-me" className={styles.aboutme}>
      <div className={styles.aboutme__container}>
        <Card style={{ padding: '10px' }} className={styles.aboutme__tabs}>
          {tabs.map(({ id, label }) => (
            <ActiveButton
              onClick={() => setActiveTab(id)}
              key={id}
              isActive={activeTab === id}
              className={styles.aboutme__button}
              activeClassName={styles.aboutme__button_active}
              inactiveClassName={styles.aboutme__button_inactive}
            >
              {label}
            </ActiveButton>
          ))}
        </Card>
        <Card className={styles.aboutme__content}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tabsToContent.get(activeTab)}
          </motion.div>
        </Card>
      </div>
    </Section>
  );
}
