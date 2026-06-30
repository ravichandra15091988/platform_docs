import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';

export const gitConfig = {
  user: 'Platform Docs',
  repo: 'docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My Portfolio',
      transparentMode: 'top',
    },

  };
}

