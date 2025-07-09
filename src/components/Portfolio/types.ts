export interface NavItem {
  id: string;
  label: string;
}

export interface TagLink {
  label: string;
  href: string;
}

export interface ScrollSection {
  id: number;
  sectionId: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: TagLink[]; // 🔥 Now each tag has a label + href
  bgColor: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface ThemeProps {
  isDarkMode: boolean;
}

export interface NavigationProps extends ThemeProps {
  navItems: NavItem[];
  activeNav: string;
  setActiveNav: (id: string) => void;
}

export interface SocialLinksProps extends ThemeProps {
  socialLinks: SocialLink[];
}

export interface ContentSectionProps extends ThemeProps {
  section: ScrollSection;
  className?: string; // Good to keep for styling
}

export interface PortfolioProps {
  isDarkMode?: boolean;
}
