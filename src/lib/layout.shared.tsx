import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ThemePanel } from '@/components/theme-panel';

export const gitConfig = {
  user: 'Platform Docs',
  repo: 'docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Ravichandra K',
      transparentMode: 'top',
    },
    themeSwitch: {
      component: <ThemePanel />,
    },
  };
}

