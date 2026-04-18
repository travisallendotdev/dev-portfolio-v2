export interface INavigationItem {
  href: string;
  text: string;
  icon: () => React.JSX.Element;
}

export interface IProject {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  techUsed: string[];
  githubLink?: string;
  demoLink?: string;
}
