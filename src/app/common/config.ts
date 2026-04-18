import AboutIcon from '../components/icons/AboutIcon';
import GithubIcon from '../components/icons/GitHubIcon';
import HomeIcon from '../components/icons/HomeIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import ProjectsIcon from '../components/icons/ProjectsIcon';
import { INavigationItem, IProject } from './types/config';

const internalNavigationItems: INavigationItem[] = [
  {
    href: '/',
    text: 'Home',
    icon: HomeIcon,
  },
  {
    href: '/projects',
    text: 'Projects',
    icon: ProjectsIcon,
  },
  {
    href: '/about-me',
    text: 'About',
    icon: AboutIcon,
  },
];

export const getInternalNavigationItems = (
  currentPathname: string
): INavigationItem[] =>
  internalNavigationItems.filter(({ href }) => href !== currentPathname);

export const externalNavigationItems: INavigationItem[] = [
  {
    href: 'https://linkedin.com/in/travisallendotdev',
    text: '',
    icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/travisallendotdev',
    text: '',
    icon: GithubIcon,
  },
];

export const projects: IProject[] = [
  {
    title: 'Job Fit Evaluation Agent',
    image: {
      src: '/projects/n8n-job-fit-evaluation-agent.png',
      alt: 'Screenshot of Job Fit Evaluation Agent',
      width: 1000,
      height: 872,
    },
    description:
      'End-to-end RAG pipeline that chunks and vectorizes professional documents via pgvector, retrieves relevant context, and feeds it to an LLM agent to score job fit against live postings — replacing hours of manual JD comparison.',
    techUsed: ['JavaScript', 'PostgreSQL', 'pgvector', 'n8n', 'Node.js'],
    githubLink:
      'https://github.com/travisallendotdev/job-post-eval-n8n-workflow',
  },
  {
    title: 'TravisAllen.dev',
    description:
      'This is the second version of my personal portfolio site. Currently, it showcases some of the projects I have worked on and provides a way to contact me. In the future, I may add a blog and other interactive features.',
    image: {
      src: '/projects/travisallendotdev.png',
      alt: 'Screenshot of TravisAllen.dev',
      width: 500,
      height: 436,
    },
    techUsed: [
      'React',
      'TypeScript',
      'CSS Modules',
      'Next.js',
      'Node.js',
      'Jest',
      'React Testing Library',
    ],
    githubLink: 'https://github.com/travisallendotdev/dev-portfolio-v2',
    demoLink: 'https://travisallen.dev',
  },
];

const techUsedUrlMap: Record<string, string> = {
  React: 'https://reactjs.org/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org/',
  'CSS Modules': 'https://github.com/css-modules/css-modules',
  'Next.js': 'https://nextjs.org/',
  'Node.js': 'https://nodejs.org/',
  Jest: 'https://jestjs.io/',
  'React Testing Library': 'https://testing-library.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  pgvector: 'https://github.com/pgvector/pgvector',
  n8n: 'https://n8n.io/',
};

export const getTechUsedUrl = (techItem: string): string | null =>
  techUsedUrlMap[techItem] ?? null;
