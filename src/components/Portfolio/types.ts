export interface NavItem {
  id: string;
  label: string;
}

export interface ScrollSection {
  id: number;
  sectionId: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
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
  className?: string; // ✅ Added this to accept custom styles
}

export interface PortfolioProps {
  isDarkMode?: boolean;
}
